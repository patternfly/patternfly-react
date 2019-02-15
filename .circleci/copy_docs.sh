#!/bin/bash
cp -r packages/patternfly-4/react-docs/public .public/patternfly-4
cp -r packages/patternfly-4/react-docs/public/assets .public/assets
cp -r .out .public/patternfly-3
echo 'out'
ls .out
echo 'public'
ls .public