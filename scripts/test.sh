DEPLOY_DOMAIN=4-pr-patternfly-react-dgutride.surge.sh
TRAVIS_PULL_REQUEST=true
ALREADY_DEPLOYED=`surge list | grep $DEPLOY_DOMAIN`
if [ "$TRAVIS_PULL_REQUEST" != "false" ] && [ -z "${ALREADY_DEPLOYED// }" ]
then
  echo 'hi mom'
fi

echo 'Already deployed:' $ALREADY_DEPLOYED