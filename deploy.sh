#!/usr/bin/env bash
git pull
npm i
gulp
echo "copying from assets/ to ../public_html/"
sudo cp -r assets/ ../public_html/
echo "copying from locales/ to ../public_html/"
sudo cp -r locales/ ../public_html/
echo "copying index.html to ../public_html/"
sudo cp index.html ../public_html/
echo "copying from node_modules/slick-carousel/slick/ajax-loader.gif to assets/css/"
sudo cp node_modules/slick-carousel/slick/ajax-loader.gif assets/css/
