#!/bin/bash
# setup.sh by Kurama250
# Github : https://github.com/Kurama250
# Licence : Creative commons - CC BY-NC-ND 4.0

apt update && apt upgrade -y
apt install npm nodejs git -y
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&\
    apt-get install -y nodejs -y
else
    echo "Node.js is already installed. Skipping installation."
fi
git clone https://github.com/Kurama250/Status_bot.git
cd Status_bot/
npm install discord.js@13.16.0 axios@1.5.1
npm install pm2 -g
