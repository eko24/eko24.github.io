#!/bin/bash
set -ev && \
cd ./_site && \
remote_repo=${GITHUB_URL:-`git config remote.origin.url`} && \
remote_branch="gh-pages" && \
git init && \
git config user.name "Travis CI" && \
git config user.email "eko24ive@gmail.com" && \
git add . && \
git commit -m'build' && \
git push --force --quiet $remote_repo master:$remote_branch > /dev/null 2>&1 && \
rm -fr .git && \
cd ../
