#!/bin/bash
USERNAME=${CIRCLE_PROJECT_USERNAME}
REPONAME=${CIRCLE_PROJECT_REPONAME}
PR_NUM=${CIRCLE_PR_NUMBER}
PR_BRANCH=${CIRCLE_BRANCH}

if [ -n "${PR_NUM}" ] # If build is a PR
then
  # Domain names follow the RFC1123 spec [a-Z] [0-9] [-] limited to 253 characters
  # https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_syntax
  # So, just replace "/" or "." with "-"
  DEPLOY_SUBDOMAIN=`echo "${REPONAME}-pr-${PR_NUM}" | tr '[\/|\.]' '-' | cut -c1-253`
  ALREADY_DEPLOYED=`npx surge list | grep ${DEPLOY_SUBDOMAIN}`
elif [ "${PR_BRANCH}" = "master" ]
then
  DEPLOY_SUBDOMAIN=${REPONAME}
else
  DEPLOY_SUBDOMAIN=`echo "${REPONAME}-pr-${PR_BRANCH}" | tr '[\/|\.]' '-' | cut -c1-253`
  ALREADY_DEPLOYED=`npx surge list | grep ${DEPLOY_SUBDOMAIN}`
fi

DEPLOY_DOMAIN="https://${DEPLOY_SUBDOMAIN}.surge.sh"
npx surge --project docs --domain $DEPLOY_DOMAIN;

if [ -n "${PR_NUM}" ] && [ -z "${ALREADY_DEPLOYED}" ] # Leave a Github comment
then
  # Use Issues api instead of PR api because
  # PR api requires comments be made on specific files of specific commits
  GITHUB_PR_COMMENTS="https://api.github.com/repos/${USERNAME}/${REPONAME}/issues/${PR_NUM}/comments"
  echo "Adding github PR comment ${GITHUB_PR_COMMENTS}"
  curl -H "Authorization: token ${GH_PR_TOKEN}" --request POST ${GITHUB_PR_COMMENTS} --data '{"body":"PatternFly-React preview: '${DEPLOY_DOMAIN}'"}'
else
  echo "Already deployed ${DEPLOY_DOMAIN}"
fi
