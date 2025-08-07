### Search nodejs plugin
```
$ asdf plugin list all | grep nodejs
nodejs                                      https://github.com/asdf-vm/asdf-nodejs.git
```

### Add the nodejs plugin
```
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
```

### Install nodejs 22.17.0 (LTS) version
```
$ asdf list all nodejs | grep 22.17.0
22.17.0

$ asdf install nodejs 22.17.0
```

### Set the nodejs version and verify
```
$ asdf set nodejs 22.17.0

$ node --version
v22.17.0

$ npm --version
10.9.2
```

### Working directory
```
cd /Users/sai/pov-appdev/simple-nodejs-microservice-app
```

### Create `.gitignore` file 
```
# Dependencies
node_modules/

# Environment variables
.env

# Logs
*.log
npm-debug.log*

# Optional npm cache directory
.npm
```
### Initialize npm project
```
npm init -y
```
* `npm init -y` creates a `package.json` file with default values.
* `package.json` is the heart of any Node.js project.
* `package.json` is for dependency management, which tracks what packages your project uses.
```
{
  "name": "simple-microservice-app",
  "version": "1.0.0",
  "description": "cd /Users/sai/pov-appdev/simple-microservice-app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Install Express
* This creates a `node_modules` folder in your project and adds `Express` as a dependency in your `package.json`.
* Check your `package.json` now has `express` as dependency.
* The `node_modules` directory has other packages as well.
* Express has dependencies - it needs other packages to work. When you install `Express`, `npm` automatically installs:
    * **Direct dependencies**: Packages Express directly uses
    * **Transitive dependencies**: Packages that Express's dependencies need
    * **Dependencies of dependencies**: And so on...

```
npm install express
```
* output as below:
```
added 67 packages, and audited 68 packages in 1s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Write the code
```
touch app.js
```

### Let's start the app
```
node app.js
```
### Option 1 - Go to the browser and hit
```
http://localhost:3000
```
* In your Terminal, you can see `Request Headers` is logged as below:
```
Server is running on http://localhost:3000
Request Headers: {
  host: 'localhost:3000',
  connection: 'keep-alive',
  'sec-ch-ua': '"Not.A/Brand";v="99", "Chromium";v="136"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  dnt: '1',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'sec-fetch-site': 'none',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-user': '?1',
  'sec-fetch-dest': 'document',
  'accept-encoding': 'gzip, deflate, br, zstd',
  'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8'
}
```
### Option 2 - Launch another Terminal and hit
```
$ curl http://localhost:3000
Response from Frontend Microservice ! by HelloCloud
```
* In your Terminal, you can see `Request Headers` is logged as below:
```
Request Headers: { host: 'localhost:3000', 'user-agent': 'curl/8.7.1', accept: '*/*' }
```

### Install `pkg`
```
npm install --save-dev pkg
```
* output
```
added 118 packages, and audited 186 packages in 4s

35 packages are looking for funding
  run `npm fund` for details

1 moderate severity vulnerability

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
```
### Update `package.json` as below
```
{
  "name": "simple-nodejs-microservice-app",
  "version": "1.0.0",
  "main": "app.js",
  "bin": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "build": "pkg . --out-path dist"
  },
  "pkg": {
    "targets": [
      "node18-macos-x64",
      "node18-linux-x64",
      "node18-win-x64"
    ],
    "outputPath": "dist"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "pkg": "^5.8.1"
  }
}
```

### Now when you run `npm run build`, you'll get:
```
dist/
├── simple-nodejs-microservice-app-macos-x64     # Intel Macs
├── simple-nodejs-microservice-app-linux-x64     # Intel Linux
└── simple-nodejs-microservice-app-win-x64.exe   # Windows
```
### Platform compatibility:
* macOS x64 → Intel Macs
* linux x64 → Traditional Linux servers
* win x64 → Windows machines

### Verify the result of `npm run build`
```
$ ls -la dist/
total 277160
drwxr-xr-x@ 5 sai  staff       160 Jul 11 00:22 .
drwxr-xr-x@ 9 sai  staff       288 Jul 11 00:22 ..
-rwxr-xr-x@ 1 sai  staff  48368600 Jul 11 00:22 simple-nodejs-microservice-app-linux
-rwxr-xr-x@ 1 sai  staff  53790672 Jul 11 00:22 simple-nodejs-microservice-app-macos
-rw-r--r--@ 1 sai  staff  39741089 Jul 11 00:22 simple-nodejs-microservice-app-win.exe
```

### Test
```
$ ./dist/simple-nodejs-microservice-app-macos 
Server is running on http://localhost:3000
```