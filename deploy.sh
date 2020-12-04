#!/bin/sh

echo publishing to www
hugo && rsync -r public/ codebam@seanbehan.dev:/usr/share/caddy/seanbehan.dev

echo publishing to ipfs
# rsync ipfs_publish.sh codebam@seanbehan.dev:ipfs_publish.sh
# ssh -t codebam@seanbehan.dev "chmod +x /home/codebam/ipfs_publish.sh"

# publish locally
ipfs add -r public/

# publish remotely
ssh -t codebam@seanbehan.dev "sh -c /home/codebam/ipfs_publish.sh" &
