#!/usr/bin/env bash

#
# @function start
# @description
#   starts REACT UI
#
function start() {
  echo "------------------------------------------------------------------------------"
  echo "Starting REACT Front End Page..."
  echo "------------------------------------------------------------------------------"
  cd ../ui-graphql-grid/
  npm run start
}

start
