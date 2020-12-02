#!/bin/sh

hugo && rsync -r public/ codebam@seanbehan.dev:/usr/share/caddy/seanbehan.dev
