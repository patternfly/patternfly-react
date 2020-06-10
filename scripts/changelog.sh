#! /bin/bash
if [ -z $1 ]
then
  echo 'Usage: changelog.sh @patternfly/react-core@version';
  exit 1;
fi;

git log --pretty="format:%ci %s" --perl-regexp --author='^((?!patternfly-build).*)$' $1..HEAD
