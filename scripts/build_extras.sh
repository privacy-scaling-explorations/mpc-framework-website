#!/bin/bash

set -euo pipefail

rm -rf build/apps
mkdir -p build/apps

rm -rf build/extras-tmp
mkdir -p build/extras-tmp

pushd build/extras-tmp
    curl -L -o repo.zip https://github.com/voltrevo/mpc-lizard-spock/archive/refs/heads/main.zip
    unzip repo.zip
    rm repo.zip

    pushd mpc-lizard-spock-main
        npm install
        VITE_MPC_LIZARD_SPOCK_BASE="/apps/lizard-spock/" npm run build
    popd
popd

mv build/extras-tmp/mpc-lizard-spock-main/dist build/apps/lizard-spock
rm -rf build/extras-tmp
