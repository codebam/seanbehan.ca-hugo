#!/bin/sh

hugo && rsync -r public/ codebam@seanbehan.dev:/usr/share/nginx/html/seanbehan.dev
