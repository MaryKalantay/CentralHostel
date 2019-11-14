#!/usr/bin/env bash
git pull
npm i
gulp
sudo cp -r assets/ ../public_html/
sudo cp -r locales/ ../public_html/
sudo cp index.html ../public_html/