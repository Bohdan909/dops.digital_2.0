#!/bin/bash

sudo chmod 755 /var/www/html/codedeploy/DOPS_vue2.0/install.sh

sudo chown -R ubuntu:ubuntu /var/www/html/codedeploy/DOPS_vue2.0/

rm -rf /var/www/html/codedeploy/DOPS_vue2.0/node_modules/

cd /var/www/html/codedeploy/DOPS_vue2.0

port=3002
sed -i 's/port:.*/port:'$port'/' /var/www/html/codedeploy/DOPS_vue2.0/nuxt.config.js

npm install

npm run build 

pm2 delete DOPS_vue2.0

cd /var/www/html/codedeploy/DOPS_vue2.0

pm2 start npm --name "DOPS_vue2.0" -- start
