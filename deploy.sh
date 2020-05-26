#!/usr/bin/env bash
git pull
npm i
gulp
echo "Copying from assets/ to ../hostel.kharkiv.ua/"
sudo cp -r assets/ ../hostel.kharkiv.ua/
echo "Copying from locales/ to ../hostel.kharkiv.ua/"
sudo cp -r locales/ ../hostel.kharkiv.ua/
echo "Removing index.html files for all languages"
sudo find ../hostel.kharkiv.ua/ -maxdepth 1 -type f -name 'index*.html' -exec rm -- '{}' +
echo "Copying index.html to ../hostel.kharkiv.ua/"
sudo cp index.html ../hostel.kharkiv.ua/index_nolang.html
echo "Copying sitemap.xml to ../hostel.kharkiv.ua/"
sudo cp sitemap.xml ../hostel.kharkiv.ua/
echo "Copying index.php to ../hostel.kharkiv.ua/"
sudo cp index.php ../hostel.kharkiv.ua/
echo "Copying from node_modules/slick-carousel/slick/ajax-loader.gif to ../hostel.kharkiv.ua/assets/css/"
sudo cp node_modules/slick-carousel/slick/ajax-loader.gif ../hostel.kharkiv.ua/assets/css/
sudo mkdir ../hostel.kharkiv.ua/assets/css/fonts
sudo cp node_modules/slick-carousel/slick/fonts/slick.ttf ../hostel.kharkiv.ua/assets/css/fonts/
sudo cp node_modules/slick-carousel/slick/fonts/slick.woff ../hostel.kharkiv.ua/assets/css/fonts/
npm install uglify-js -g
uglifyjs --compress --mangle --output ../hostel.kharkiv.ua/assets/js/app.min.js -- ../hostel.kharkiv.ua/assets/js/app.js

echo "Rename source css"
sudo mv ../hostel.kharkiv.ua/assets/css/styles.min.css ../hostel.kharkiv.ua/assets/css/source_styles.min.css
echo "Copy cropped css"
sudo cp src/scss/crop_styles.min.css ../hostel.kharkiv.ua/assets/css/styles.min.css
