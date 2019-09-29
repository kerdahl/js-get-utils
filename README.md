# js-get-utils
Automatically download the latest version of various virus removal tools to a directory optionally provided as an argument at runtime. Currently only supports Windows machines.

## Usage
### Without PKG from source
1. Download the repository
2. ```npm install```
3. ```node bin.js <directory to store downloaded utilities>```

### With PKG from source
1. Download the repository
2. ```npm install```
3. ```npm install -g pkg```
4. ```pkg .```
5. ```./js-get-utils-win.exe <directory to store downloaded utilities (optional)>```

### From Release
1. Download ```js-get-utils-win.exe``` from latest Release
2. Run ```./js-get-utils-win.exe <directory to store downloaded utilities (optional)>```

The benefit of using PKG is that since the app is bundled as an executable file, it is more portable.
