#!/bin/bash
REPO_OWNER=$CIRCLE_PROJECT_USERNAME
REPO_NAME=$CIRCLE_PROJECT_REPONAME
DEPLOY_PATH=.public

DEPLOY_SUBDOMAIN_UNFORMATTED_LIST=()
if [ ! -z "$CIRCLE_PULL_REQUEST" ]
then
    # Split on "/", ref: http://stackoverflow.com/a/5257398/689223
    URL_SPLIT=(${CIRCLE_PULL_REQUEST//\// })
    PR_NUM=$(printf %s\\n "${URL_SPLIT[@]:(-1)}")
    DEPLOY_SUBDOMAIN_UNFORMATTED_LIST+=($PR_NUM-pr)
fi

if [ -n "${CIRCLE_TAG// }" ] #TAG is not empty
then
  #sorts the tags and picks the latest
  #sort -V does not work on the travis machine
  #sort -V              ref: http://stackoverflow.com/a/14273595/689223
  #sort -t ...          ref: http://stackoverflow.com/a/4495368/689223
  #reverse with sed     ref: http://stackoverflow.com/a/744093/689223
  #git tags | ignore release candidates | sort versions | reverse | pick first line
  LATEST_TAG=`git tag | grep -v rc | sort -t. -k 1,1n -k 2,2n -k 3,3n -k 4,4n | sed '1!G;h;$!d' | sed -n 1p`
  echo $LATEST_TAG
  if [ "$CIRCLE_TAG" == "$LATEST_TAG" ]
  then
    DEPLOY_SUBDOMAIN_UNFORMATTED_LIST+=("latest")
  fi
  DEPLOY_SUBDOMAIN_UNFORMATTED_LIST+=(${CIRCLE_TAG}-tag)
else
  DEPLOY_SUBDOMAIN_UNFORMATTED_LIST+=(${CIRCLE_BRANCH}-branch)
fi

for DEPLOY_SUBDOMAIN_UNFORMATTED in "${DEPLOY_SUBDOMAIN_UNFORMATTED_LIST[@]}"
do
  echo $DEPLOY_SUBDOMAIN_UNFORMATTED
  # replaces "/" or "." with "-"
  # Domain names follow the RFC1123 spec [a-Z] [0-9] [-]
  # The length is limited to 253 characters
  # https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_syntax
  DEPLOY_SUBDOMAIN=`echo "$DEPLOY_SUBDOMAIN_UNFORMATTED" | tr '[\/|\.]' '-' | cut -c1-253`
  DEPLOY_DOMAIN=https://${DEPLOY_SUBDOMAIN}-${REPO_NAME}-${REPO_OWNER}.surge.sh
  echo 'Deploying domain: ' ${DEPLOY_DOMAIN}
  ALREADY_DEPLOYED=`yarn run surge list | grep ${DEPLOY_DOMAIN}`
  GITHUB_PR_COMMENTS=https://api.github.com/repos/${CIRCLE_PROJECT_REPONAME}/issues/${CIRCLE_PR_NUMBER}/comments

  yarn run surge --project ${DEPLOY_PATH} --domain $DEPLOY_DOMAIN;

  if [ ! -z "$CIRCLE_PULL_REQUEST" ] && [ -z "$ALREADY_DEPLOYED" ]
  then
    echo 'Adding github PR comment'
    # Using the Issues api instead of the PR api
    # Done so because every PR is an issue, and the issues api allows to post general comments,
    # while the PR api requires that comments are made to specific files and specific commits
    curl -H "Authorization: token ${GH_PR_TOKEN}" --request POST ${GITHUB_PR_COMMENTS} --data '{"body":"PatternFly-React preview: '${DEPLOY_DOMAIN}'"}'
  fi
done