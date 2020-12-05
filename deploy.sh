#!/bin/sh

echo publishing to www
rm -rf public && hugo && rsync -r public/ codebam@seanbehan.dev:/var/www/htdocs/seanbehan.dev

echo publishing to ipfs
# rsync ipfs_publish.sh codebam@seanbehan.dev:ipfs_publish.sh
# ssh -t codebam@seanbehan.dev "chmod +x /home/codebam/ipfs_publish.sh"

# publish locally
ipfs_hash=$(echo $(ipfs add -r public/) | rev | cut -d ' ' -f 2 | rev)

# publish remotely
ssh -t codebam@seanbehan.dev "screen -d -m sh -c /home/codebam/ipfs_publish.sh" &
