#!/usr/bin/env node

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const axios = require('axios');
const processName = require('./lib/processName');


const movieFileName = process.argv[2];
if(!movieFileName) {
  console.log(chalk.red('No movie name supplied!'));
  process.exit(1)
}
const {title, year} = processName(movieFileName);
const ext = path.extname(movieFileName);

axios.get(`https://www.omdbapi.com/?apikey=${process.env.APIKEY}&t=${title}&y=${year}`)
  .then(res => {
    const movie = res.data;
    const releaseDate = new Date(movie.Released);
    fs.utimesSync(movieFileName, releaseDate, releaseDate);
    if(!movie.Title) throw new Error('No movie title was found.')
    console.log(`${movie.Title} was released on ${movie.Released}`);
    const newName = `${movie.Title} (${year})${ext}`
    fs.renameSync(movieFileName, newName);
  })
  .catch(err => console.error(chalk.red(` * ${err}`)));
