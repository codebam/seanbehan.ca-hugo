#!/bin/sh

result=$(ipfs add -r /usr/share/caddy/seanbehan.dev)
ipfs_hash=$(echo $result | rev | cut -d ' ' -f 2 | rev)
ipfs name publish --key=seanbehan.dev $ipfs_hash
