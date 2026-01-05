<h1 align="center">Status bot for discord !</h1>
<em><h5 align="center">(Programming Language - Node.js | Shell)</h5></em>

<p align="center">
  <img src="https://img.shields.io/github/stars/Kurama250/Status_bot">
  <img src="https://img.shields.io/github/license/Kurama250/Status_bot">
  <img src="https://img.shields.io/github/repo-size/Kurama250/Status_bot">
  <img src="https://img.shields.io/badge/stability-stable-green">
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/module-name">
  <img src="https://img.shields.io/npm/v/axios?label=axios">
  <img src="https://img.shields.io/npm/v/discord.js?label=discord.js">
</p>

# Tutorial to install the bot ! For LINUX (VPS or Dedicated Server)

## 1 - on Terminal

<h5>A) Auto installer</h5>

- Run command :

```shell script
bash <(curl -s https://raw.githubusercontent.com/Status_bot/main/setup.sh)
```
<h5>B) Manual installer</h5>

```shell script
apt update && apt upgrade -y
apt install npm nodejs git -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&\
apt-get install -y nodejs
```

```shell script
git clone https://github.com/Kurama250/Status_bot.git
cd Status_bot/
npm i
npm install pm2 -g
```
## 2 - on Terminal

```shell script
nano config/config.json
```

- And you also change this line on config/config.json :

```js
{
    "token": "YOUR_TOKEN",
    "roleId": "ROLE_ID",
    "serverId": "SERVER_ID",
    "triggerMessages": [
      "/update",
      ".gg/update",
      "discord.gg/update",
      "https://discord.gg/update"
    ],
    "webhookUrl": "WEBHOOK_URL"
  }
```

- After doing this, press CTRL + X and you press Y and ENTER then you do the following commands !

## 3 - on Terminal

```shell script
pm2 start main.js -n Status_bot
```
- Demo : 

![alt text](https://github.com/Kurama250/Status_bot/blob/main/status.png?raw=true)

<h3 align="center"><strong>Support on Discord :</strong> <a href="https://discord.gg/6aebQGdDxB">Discord Link</a> - Create a Ticket with bot for help</3>
<h3 align="center">If you like this repository don't hesitate to give it a star ⭐ !</h3>
<h1 align="center">Then it's the end you have started the code have fun !</h1>

Licence : [Creative commons](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en) - CC BY-NC-ND 4.0 by [Kurama250](https://github.com/Kurama250) 
