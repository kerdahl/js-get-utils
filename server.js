const fetch = require('node-fetch');
const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');

const getMBAMLink = async () => {
  var test = await fetch(
    'https://downloads.malwarebytes.com/file/mb3win_43841'
  );
  return test.url;
};

const getMBAM = (link, dir) => {
  try {
    const fileName = `${dir}/mbam.exe`;
    console.log(`Creating file ${fileName} ...`);
    const file = fs.createWriteStream(fileName);
    console.log(`Downloading MBAM from ${link} ...`);
    https.get(link, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('MBAM complete.');
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const getKaspersky = dir => {
  try {
    const link =
      'https://devbuilds.s.kaspersky-labs.com/devbuilds/KVRT/latest/full/KVRT.exe';
    const fileName = `${dir}/kvrt.exe`;
    console.log(`Creating file ${fileName} ...`);
    const file = fs.createWriteStream(fileName);
    console.log(
      `Downloading Kaspersky Virus Removal Tool (KVRT) from ${link} ...`
    );
    https.get(link, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('KVRT complete.');
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const getEEK = dir => {
  try {
    const link = 'https://dl.emsisoft.com/EmsisoftEmergencyKit.exe';
    const fileName = `${dir}/eek.exe`;
    console.log(`Creating file ${fileName} ...`);
    const file = fs.createWriteStream(fileName);
    console.log(`Downloading Emsisoft Emergency Kit (EEK) from ${link} ...`);
    https.get(link, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('EEK complete.');
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const getCCleanerLink = async () => {
  const response = await fetch('https://www.ccleaner.com/ccleaner/builds');
  const html = await response.text();
  const $ = cheerio.load(html);
  let link = '';
  $('#GTM__download--CC-portableBuild').each((index, value) => {
    link = $(value).attr('href');
  });
  return link;
};

const getCCleaner = (link, dir) => {
  try {
    const fileName = `${dir}/ccleaner.zip`;
    console.log(`Creating file ${fileName} ...`);
    const file = fs.createWriteStream(fileName);
    console.log(`Downloading CCleaner Portable from ${link} ...`);
    https.get(link, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('CCleaner Portable complete.');
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const getUtils = async dir => {
  const mbamLink = await getMBAMLink();
  const ccleanerLink = await getCCleanerLink();
  getMBAM(mbamLink, dir);
  getKaspersky(dir);
  getEEK(dir);
  getCCleaner(ccleanerLink, dir);
};

module.exports = getUtils;
