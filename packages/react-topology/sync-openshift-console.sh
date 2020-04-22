#!/bin/sh
CURRENT_BRANCH=`git branch --show-current`
SCRIPTDIR=`dirname "$0"`
EXITCODE=0
echo Cleanup...
git remote remove openshift-console
git branch -D temp-openshift
git branch -D temp-branch

echo Adding remote of OpenShift console GIT repo
git remote add -f openshift-console https://github.com/wojta/openshift-console.git
if [ $? -eq 0 ]; then
    cd "$SCRIPTDIR"/../../
    pwd
    git merge -s ours --no-commit --allow-unrelated-histories openshift-console/master
    git branch temp-openshift openshift-console/master
    git checkout -f temp-openshift
    if [ $? -eq 0 ]; then
      echo Splitting frontend/packages/topology into temp-branch
      git subtree split --squash --prefix=frontend/packages/topology -b temp-branch
      if [ $? -eq 0 ]; then
        git branch -D temp-openshift
        echo Checking out temp-branch
        git checkout -f temp-branch
        echo Removing offending files
        git rm package.json tsconfig.json src/index.ts src/components/index.ts .gitignore
        git commit -a -m "Removing offending files"
        echo Checking out $CURRENT_BRANCH
        git checkout $CURRENT_BRANCH
        echo Read-tree of temp-branch
        git read-tree --prefix=packages/react-topology -u temp-branch
        cd "$SCRIPTDIR"
        
      else
        echo "Failed to sync"
        EXITCODE=3 
      fi
    else 
        echo "Can't merge with openshift-console"
        EXITCODE=2
    fi
else
  echo "Failed to add remote"
  EXITCODE=1
fi
git remote remove openshift-console
exit $EXITCODE
