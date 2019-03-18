const typedoc = require('../../../build/ts-output.json')

function getObjectNamed(iterable, name) {
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i].name.toLowerCase() === name.toLowerCase())
      return iterable[i];
  }
}

function getDefaultClassProps(name) {
  let result = [];
  const component = getObjectNamed(typedoc.children, name);
  const defaultProps = getObjectNamed(component.children, 'defaultProps');
  defaultProps.children.forEach(prop => {
    if (prop.kindString === 'Variable') {
      result.push({
        name: prop.name,
        default: prop.defaultValue,
      });
    }
    else if (prop.kindString === 'Function') {
      result.push({
        name: prop.name,
        default: prop.signatures[0].type.name,
      });
    }
  });

  return result;
}

function getDefaultFunctionProps(component) {
  let result = [];
  const params = component.signatures[0].parameters[0].type.declaration.children;

  params.forEach(param => {
    if (param.defaultValue) {
      result.push({
        name: param.name,
        default: param.defaultValue,
        type: param.type
      })
    }
  });

  return result;
}

// Takes typedoc json, returns something like (event?: React.MouseEvent): void
function getType(method) {
  let type = '(';
  if (method.parameters) {
    method.parameters.forEach(param => {
      type += param.name;
      if (param.flags.isOptional)
        type += '?';
      type += ': ' + param.type.name
      type += ', ';
    });
    type = type.slice(0, type.length - 2);
  }
  type += '): ' + method.type.name;


  return type;
}

function getProps(name) {
  let result = {};
  // Assume component 'Button' exports interface named 'ButtonProps'
  const iface = getObjectNamed(typedoc.children, name + 'Props');
  for (let i = 0; i < iface.children.length; i++) {
    const prop = iface.children[i];
    // Skip extended props
    if (prop.inheritedFrom) continue;
    if (prop.kindString === 'Property') {
      let isRequired = true;
      let propType = prop.type.name;
      if (prop.type.type === 'union') { // Multiple types...
        // TODO: use what typedoc uses: https://github.com/TypeStrong/typedoc/blob/master/src/lib/converter/factories/type-parameter.ts
        const typeNames = prop.type.types.map(t => t.name);
        const undefinedLoc = typeNames.indexOf('undefined');
        if (undefinedLoc !== -1) {
          isRequired = false;
          typeNames.splice(undefinedLoc, 1);
        }
        if (typeNames.indexOf('false') !== -1 &&
          typeNames.indexOf('true') !== -1) {
          propType = 'boolean';
        } else {
          propType = typeNames[0];
        }
      }

      result[prop.name] = {
        name: prop.name,
        required: isRequired,
        type: propType,
        comment: prop.comment ? prop.comment.shortText : '',
      };
    }
    else if (prop.kindString === 'Method') {
      const method = prop.signatures[0];
      const type = getType(method);
      result[prop.name] = {
        name: prop.name,
        required: prop.flags.isOptional,
        type: type,
        comment: method.comment ? method.comment.shortText : '',
      };
    }
  }
  return result;
}

// Fuzzy find prop.name in props.keys and set it's value
function setDefaultProp(props, prop) {
  // Remove dashes and make lowercase
  const simplifyName = (name) => name.replace('-', '').toLowerCase();
  Object.keys(props).forEach(k => {
    if (simplifyName(k) === simplifyName(prop.name)) {
      props[k].default = prop.default;
      props[k].required = false;
      return;
    }
  });
}

export function accumulateProps(componentName) {
  const component = getObjectNamed(typedoc.children, componentName);
  if (!component)
    return null;

  let props = getProps(componentName);
  if (component.kindString === 'Class') {
    getDefaultClassProps(componentName).forEach(p => setDefaultProp(props, p));
  } else if (component.kindString === 'Function') {
    getDefaultFunctionProps(component).forEach(p => setDefaultProp(props, p));
  }

  return Object.values(props);
}

