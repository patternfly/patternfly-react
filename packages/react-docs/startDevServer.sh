#!/bin/bash

STR=$NODE_OPTIONS
SUB='--openssl-legacy-provider'

if [[ "$STR" != *"$SUB"* ]]; then
  NEW_OPTIONS="$NODE_OPTIONS --openssl-legacy-provider"
  export NODE_OPTIONS="${NEW_OPTIONS}"
  echo "NODE_OPTIONS: ${NODE_OPTIONS}"
fi

yarn start
