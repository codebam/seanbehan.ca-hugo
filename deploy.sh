#!/bin/sh

echo publishing to www
rm -rf public && hugo && rsync -r public/ codebam@ssh.seanbehan.ca:~/seanbehan.ca --delete
