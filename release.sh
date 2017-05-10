#!/bin/bash

if ["$TRAVIS_REPO_SLUG" != "priley86/patternfly-react" -o "$TRAVIS_BRANCH" != "master"]; then
  exit 0;
fi

npm run build-storybook
cd .out
git config --global user.email "Travis CI"
git config --global user.name "hello@ghbot.com"
git init
git add .
git commit -m "Deploy Storybook to GitHub Pages"

cd ..
chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key
git push --force --quiet https://github.com/priley86/patternfly-react.git master:gh-pages