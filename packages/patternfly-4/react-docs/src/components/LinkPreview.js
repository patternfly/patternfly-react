import React from "react";

// This component really shouldn't be in react-docs.
// However, it exists downstream in https://github.com/patternfly/patternfly-org
export default ({name, path}) => {
    const split = path.split('/');

    return <a href={split[split.length - 1].toLowerCase()} target="_blank">{name}</a>
}