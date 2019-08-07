const getUtils = require('.');

if (process.argv.length > 2) {
  let dir = process.argv[2];
  getUtils(dir);
} else {
  console.log(
    'GetUtils requires an argument containing the directory to store the downloaded utilities.'
  );
  process.exit(0);
}
