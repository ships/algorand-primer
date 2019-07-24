#!/bin/bash -eux

pushd subject

  yarn install
  yarn upgrade -CLA

popd

rsync -a -v ./subject/ ./dirty/
