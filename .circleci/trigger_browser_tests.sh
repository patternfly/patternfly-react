#!/bin/bash
# Sends a POST request to Travis that triggers browser tests from here
# https://github.com/quarckster/widgetastic.patternfly4/tree/master/testing

curl -s -X POST \
   -H "Content-Type: application/json" \
   -H "Accept: application/json" \
   -H "Travis-API-Version: 3" \
   -H "Authorization: token $QUARCKSTER_TOKEN" \
   -d '{"request": {"branch": "master"}}' \
   https://api.travis-ci.org/repo/quarckster%2Fwidgetastic.patternfly4/requests