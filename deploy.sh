#!/bin/sh

echo publishing to www
rm -rf public && hugo && rsync -r public/ codebam@seanbehan.ca:/var/www/htdocs/seanbehan.ca --delete
