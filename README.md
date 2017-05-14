# ng2-mean-starter-kit
A startup-base demostrate building an angular 2 app in the MEAN stack with the Angular CLI.

## Set up.
Make sure you have angular cli installed.
```bash
$ npm install -g angular-cli
```

### Optional
Install mongodb for your pc, or use mlab's database.
Commands for Ubuntu 16.04
```bash
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
```
[Link to the full documentation for mongodb 3.4](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

Clone the repo
```bash
$ git clone https://github.com/Temeteron/ng2-mean-starter-kit.git
$ cd ng2-mean-starter-kit
```

Install dependencies
```bash
$ npm install
```

Run the app
```bash
$ npm run build
```
