function getMatches(string, pattern) {
    return string
        .match(new RegExp(pattern.source, pattern.flags))
        .map(match => match ? new RegExp(pattern.source, pattern.flags).exec(match) : [[]]);
}

function fixImports(srcText) {
    // Get where styles are coming from
    const styleRegex = /import styles from '(.*)';/g;

    let res = "import React, { HTMLProps, ReactNode } from 'react';";
    res += "\nimport { css } from '@patternfly/react-styles';";
    if (srcText.match(styleRegex)) {
        const styleImport = getMatches(srcText, styleRegex)[0][1];
        res += `\nimport styles from '${styleImport}';`
    }
    return res;
}

function getType(type) {
    switch (type) {
        case 'bool':
            return 'boolean';
        case 'node':
            return 'ReactNode';
        default:
            return type;
    }
}

function fixProps(srcText, name) {
    const propRegex1 = /\/\*\*\s+(.*)\*\/\n\s+([\w']+):\s+PropTypes.([\w.]+)/g;
    const propRegex2 = /([\w']+):\s+PropTypes.([\w.]+)/g;
    let res = `export interface ${name}Props extends HTMLProps<> {`;

    let propTypes;
    let indexOffset = 0;
    if (srcText.match(propRegex1)) {
        propTypes = getMatches(srcText, propRegex1);
    }
    else {
        propTypes = getMatches(srcText, propRegex2);
        indexOffset = 1;
    }

    for (const p of propTypes) {
        if (p[2 - indexOffset] === "''") continue;

        res += `\n    /** ${p[1]} */`;
        res += `\n    ${p[2 - indexOffset]}?: ${getType(p[3 - indexOffset])};`;
    }
    res += '\n};'


    return res;
}

function fixDefaultProps(srcText, name) {
    const defaultPropRegex = /defaultProps\s*=\s*({[\s\S]*};)/g;
    const props = getMatches(srcText, defaultPropRegex)[0][1];
    return `export const default${name}Props = ${props}`;
}

function getComponentName(srcText) {
    const nameRegex = /export default (.*);/g;
    return getMatches(srcText, nameRegex)[0][1];
}

function fixFunctionalComponent(srcText, name) {
    const componentRegex = /const .*\s*=\s*(\([\s\S]+\));/g;
    const component = getMatches(srcText, componentRegex)[0][1];
    let res = `export const ${name}: React.FunctionComponent<${name}Props> = `;
    res += res.replace(/}\)\s*=>\s*\(/, `}: ${name}Props) => (`);
    res += `;\n\n${name}.defaultProps = default${name}Props;`;
    return res;
}

module.exports = {
    // Runs some regexs to extremely roughly convert a JS component to TS. You'll
    // need to have the JS on hand to finish the conversion.
    // Usage: node scripts/convertComponentToTS.js src/components/Alert
    convertToTS: function (srcText) {
        const name = getComponentName(srcText);
        console.log('Converting', name);

        let res = fixImports(srcText);
        res += '\n\n' + fixProps(srcText, name);
        res += '\n\n' + fixDefaultProps(srcText, name);
        if (srcText.indexOf('extends React.Component') === -1) {
            res += '\n\n' + fixFunctionalComponent(srcText, name);
        }
        else {
            console.log('detected stateful component, skipping');
        }
        res += '\n';
        return res;
    }
};
