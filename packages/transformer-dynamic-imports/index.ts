// https://levelup.gitconnected.com/writing-typescript-custom-ast-transformer-part-2-5322c2b1660e
import * as ts from 'typescript';
import path from 'path'
import glob from 'glob'

const PACKAGES_ROOT = path.resolve(process.cwd(), 'packages')

function reactCoreTag(strings, nameBinding) {
  return `${PACKAGES_ROOT}/react-core/src/**/${nameBinding}.ts*`}

const COMPONENTS_CACHE: {
  [nameBinding: string]: string
} = {
  ButtonProps: 'components/Button',
  ButtonVariant: 'components/Button',
  EmptyStateVariant: 'components/EmptyState',
  getResizeObserver: 'helpers/resizeObserver',
  PopoverProps: 'components/Popover',
  TooltipPosition: 'components/Tooltip',
  useOUIAProps: 'helpers/OUIA/ouia',
  OUIAProps: 'helpers/OUIA/ouia',
  getDefaultOUIAId: 'helpers/OUIA/ouia',
  handleArrows: 'helpers/KeyboardHandler',
  setTabIndex: 'helpers/KeyboardHandler',
}

function findComponentModule(nameBinding: string) {
  let modulePath = COMPONENTS_CACHE[nameBinding]
  if(modulePath) {
    return modulePath
  }

  const sourceGlob = reactCoreTag`${nameBinding}`
  const sourceFile = glob.sync(sourceGlob)
  if(sourceFile.length < 1) {
    throw new Error(`Unable to find source file for module ${nameBinding}! The module likely does not have unique file as is included within another file. Please add the entry into the modules mapper!`)
  }
  const moduleSource: string[] = sourceFile[0].split('react-core/src').pop()?.split('/') || []
  moduleSource?.pop()
  modulePath = moduleSource?.join('/').replace(/^\//, '')
  COMPONENTS_CACHE[nameBinding] = modulePath
  return modulePath

}

function camelToDash(str: string) {
  return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).replace(/^-/, '');
}

function createIconDynamicImports(nodeFactory: ts.NodeFactory, iconNames: string[]) {
  const imports = iconNames.map(icon => nodeFactory.createImportDeclaration(
    undefined,
    undefined,
    nodeFactory.createImportClause(false, nodeFactory.createIdentifier(icon), undefined),
    nodeFactory.createStringLiteral(`@patternfly/react-icons/dist/dynamic/icons/${camelToDash(icon)}`))
  )
  return imports
}

function createDynamicReactCoreImports(nodeFactory: ts.NodeFactory, node: ts.ImportDeclaration) {
  const importNames: string[] = []
  const importNodes: ts.ImportDeclaration[] = []
  // get all named imports 
  node.importClause?.namedBindings?.forEachChild(node => {
    importNames.push(node.getFullText().trim())
  })
  importNames.forEach(nameBinding =>{
    const importPartial = findComponentModule(nameBinding)
    const importNode = nodeFactory.createImportDeclaration(
      undefined,
      undefined,
      nodeFactory.createImportClause(false, undefined, nodeFactory.createNamedImports(
        [nodeFactory.createImportSpecifier(false, undefined, nodeFactory.createIdentifier(nameBinding))]
      )),
      nodeFactory.createStringLiteral(`@patternfly/react-core/dist/dynamic/${importPartial}`)
      )
      importNodes.push(importNode)
  })
  return importNodes
}


const transformer:ts.TransformerFactory<ts.SourceFile> = context => sourceFile => {
    /** @type { import("typescript").Visitor } */
    function visitor(node) {
      const { factory } = context
      // handles relative imports import {foo} from '@patternfly/react-icons'
      // the regex has extra '$ condition
      if(ts.isImportDeclaration(node) && /@patternfly\/react-(core|icons|tokens)'$/.test(node.moduleSpecifier.getText())) {
        if(node.moduleSpecifier.getText().includes('react-icons')) {
          const importNames: string[] = []
          // get all named imports 
          node.importClause?.namedBindings?.forEachChild(node => {
            importNames.push(node.getFullText().trim())
          })
          // create new icon import nodes
          return createIconDynamicImports(factory, importNames)
        }

        if(node.moduleSpecifier.getText().includes('react-core')) {
          return createDynamicReactCoreImports(factory, node)
        }
        
        return node
      }
      
      // handle absolute icons import paths
      if(ts.isImportDeclaration(node) && /@patternfly\/react-(icons|tokens)/.test(node.moduleSpecifier.getText())) {
        if (ts.isImportDeclaration(node) && /@patternfly\/.*\/dist\/esm/.test(node.moduleSpecifier.getText())) {
          return factory.updateImportDeclaration(
            node,
            node.decorators,
            node.modifiers,
            node.importClause,
            factory.createStringLiteral(
              node.moduleSpecifier.getFullText().replace(/"/g, '').replace(/'/g, '').replace(/dist\/esm/, 'dist/dynamic').trim(),
              true
            ),
            undefined
          )
        }

      }

      // handle any uncaught esm imports
      if (ts.isImportDeclaration(node) && /@patternfly\/.*\/dist\/esm/.test(node.moduleSpecifier.getText()) && context.getCompilerOptions().module === 1) {
        return factory.updateImportDeclaration(
          node,
          node.decorators,
          node.modifiers,
          node.importClause,
          factory.createStringLiteral(
            node.moduleSpecifier.getFullText().replace(/"/g, '').replace(/'/g, '').replace(/dist\/esm/, 'dist/js').trim(),
            true
          ),
          undefined
        )
      }
      return ts.visitEachChild(node, visitor, context);
  
    }
    return ts.visitNode(sourceFile, visitor);
  }

module.exports = transformer
