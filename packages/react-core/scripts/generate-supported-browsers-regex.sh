#!/bin/bash

DESTINATION_PATH=src/helpers/SupportedBrowsers/supportedBrowsersRegex.ts
SUPPORTED_BROWSERS_REGEX=$(npx browserslist-useragent-regexp --allowHigherVersions)

echo "export default $SUPPORTED_BROWSERS_REGEX;" > $DESTINATION_PATH
