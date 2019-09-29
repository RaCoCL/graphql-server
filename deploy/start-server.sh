#!/usr/bin/env bash

#
# @function start
# @description
#   starts graphql server
#
function start() {
  echo "------------------------------------------------------------------------------"
  echo "Starting Graphql Server..."
  echo "------------------------------------------------------------------------------"
  node ../dist/index.js

}

start
