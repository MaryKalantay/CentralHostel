#!/usr/bin/env bash
git pull
npm i
gulp
echo "Copying from assets/ to ../public_html/"
sudo cp -r assets/ ../public_html/
echo "Copying from locales/ to ../public_html/"
sudo cp -r locales/ ../public_html/
echo "Removing index.html files for all languages"
sudo find ../public_html/ -maxdepth 1 -type f -name 'index*.html' -exec rm -- '{}' +
echo "Copying index.html to ../public_html/"
sudo cp index.html ../public_html/index_nolang.html
echo "Copying sitemap.xml to ../public_html/"
sudo cp sitemap.xml ../public_html/
echo "Copying index.php to ../public_html/"
sudo cp index.php ../public_html/
echo "Copying from node_modules/slick-carousel/slick/ajax-loader.gif to ../public_html/assets/css/"
sudo cp node_modules/slick-carousel/slick/ajax-loader.gif ../public_html/assets/css/
sudo mkdir ../public_html/assets/css/fonts
sudo cp node_modules/slick-carousel/slick/fonts/slick.ttf ../public_html/assets/css/fonts/
sudo cp node_modules/slick-carousel/slick/fonts/slick.woff ../public_html/assets/css/fonts/
npm install uglify-js -g
uglifyjs --compress --mangle --output ../public_html/assets/js/app.min.js -- ../public_html/assets/js/app.js
