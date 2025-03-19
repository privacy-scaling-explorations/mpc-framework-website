#!/bin/bash

set -euo pipefail

rm -rf build/apps
mkdir -p build/apps

rm -rf build/extras-tmp
mkdir -p build/extras-tmp

build_app() {
    local repo_name="$1"
    local deploy_path="$2"
    local subdir="$3"
    local env_var_name="$4"
    
    pushd build/extras-tmp
        curl -L -o repo.zip "https://github.com/voltrevo/${repo_name}/archive/refs/heads/main.zip"
        unzip repo.zip
        rm repo.zip

        pushd "${repo_name}-main/${subdir}"
            npm install
            declare "${env_var_name}=/${deploy_path}/"
            eval "${env_var_name}=/${deploy_path}/ npm run build"
        popd
    popd

    mv "build/extras-tmp/${repo_name}-main/${subdir}/dist" "build/${deploy_path}"
}

build_app "mpc-lizard-spock" "apps/lizard-spock" "." "VITE_MPC_LIZARD_SPOCK_BASE"
build_app "2pc-is-for-lovers" "apps/2pc-is-for-lovers" "." "VITE_2PC_IS_FOR_LOVERS_BASE"
build_app "mpc-hello" "apps/hello" "client-client" "VITE_MPC_HELLO_BASE"

rm -rf build/extras-tmp
