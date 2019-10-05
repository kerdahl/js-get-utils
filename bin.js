const getUtils = require('.');

if (process.argv.length > 2) {
  let dir = process.argv[2];
  getUtils(dir);
} else {
  console.log(
    `Downloading utilities to current directory (${process.cwd()})...`
  );
  let dir = '.';
  getUtils(dir);
}
