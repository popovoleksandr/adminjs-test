#!/usr/bin/env sh

echo "Fetching development dependencies"

export NODE_ENV="development"
npm install & npx gulp --releaseVersion $2

echo "Building successfully finished"