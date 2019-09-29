#!/usr/bin/env bash
#
# @function deploy
# @description
#   installs node dependencies and compiles code into dist folder
#
function deploy() {
  cd ..
  echo "------------------------------------------------------------------------------"
  echo "Installing dependencies"
  echo "------------------------------------------------------------------------------"
  npm install
  echo "------------------------------------------------------------------------------"
  echo "Compiling Typescript code"
  echo "------------------------------------------------------------------------------"
  npm run compile
  echo "------------------------------------------------------------------------------"
  echo "Deployment finished. You can now run ./start-server.sh script..."
  echo "------------------------------------------------------------------------------"
}

function deploy-ui() {
  cd ui-graphql-grid
  echo "------------------------------------------------------------------------------"
  echo "Installing React dependencies"
  echo "------------------------------------------------------------------------------"
  npm install
}

deploy
