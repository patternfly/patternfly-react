#!/bin/bash
if [ -z "$CIRCLE_PULL_REQUEST" ]
then
  echo 'Not a PR, not deploying'
  exit 0
fi

# Split on "/", ref: http://stackoverflow.com/a/5257398/689223
URL_SPLIT=(${CIRCLE_PULL_REQUEST//\// })
PR_NUM=$(printf %s\\n "${URL_SPLIT[@]:(-1)}")
# replaces "/" or "." with "-"
# Domain names follow the RFC1123 spec [a-Z] [0-9] [-]
# The length is limited to 253 characters
# https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_syntax
DEPLOY_SUBDOMAIN=`echo "$PR_NUM-pr-${CIRCLE_PROJECT_REPONAME}-${CIRCLE_PROJECT_USERNAME}" | tr '[\/|\.]' '-' | cut -c1-253`
DEPLOY_DOMAIN="https://${DEPLOY_SUBDOMAIN}.surge.sh"
echo 'Deploying domain: ' ${DEPLOY_DOMAIN}
ALREADY_DEPLOYED=`yarn run surge list | grep ${DEPLOY_DOMAIN}`
GITHUB_PR_COMMENTS=https://api.github.com/repos/${CIRCLE_PROJECT_REPONAME}/issues/${CIRCLE_PR_NUMBER}/comments

yarn run surge --project .public --domain $DEPLOY_DOMAIN;

if [ -z "$ALREADY_DEPLOYED" ] || true
then
  echo 'Adding github PR comment'
  # Using the Issues api instead of the PR api
  # Done so because every PR is an issue, and the issues api allows to post general comments,
  # while the PR api requires that comments are made to specific files and specific commits
  curl -H "Authorization: token ${GH_PR_TOKEN}" --request POST ${GITHUB_PR_COMMENTS} --data '{"body":"PatternFly-React preview: '${DEPLOY_DOMAIN}'"}'
else
  echo "Already deployed ${DEPLOY_DOMAIN}"
fi