#!/bin/sh

npm run build
firebase deploy  # Connected to /build
rm -rf ./build/  # Don't need it on my local copy
