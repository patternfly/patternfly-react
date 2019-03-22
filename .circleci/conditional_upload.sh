#!/bin/bash
# The situation occasionally arises where our docs build successfully,
# but due to caching and other unopportune CI events the files aren't
# actually there. So make sure they're there before uploading.
if [ -z "$(ls -A .public/patternfly-3 2>/dev/null)" ]
then
    echo "Missing PF3 docs, skipping upload"
    exit 1
fi
if [ -z "$(ls -A .public/patternfly-4 2>/dev/null)" ]
then
    echo "Missing PF4 docs, skipping upload"
    exit 1
fi

if yarn run surge --project .public --domain patternfly-react.surge.sh
then  
    # Sends a POST request to Travis that triggers browser tests from here:
    # https://github.com/quarckster/widgetastic.patternfly4/tree/master/testing
    curl -s -X POST \
       -H "Content-Type: application/json" \
       -H "Accept: application/json" \
       -H "Travis-API-Version: 3" \
       -H "Authorization: token $QUARCKSTER_TOKEN" \
       -d '{"request": {"branch": "master"}}' \
       https://api.travis-ci.org/repo/quarckster%2Fwidgetastic.patternfly4/requests
fi