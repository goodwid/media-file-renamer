#!/usr/bin/env node

require('dotenv').config();
const chalk = require('chalk');
const axios = require('axios');
const processName = require('./lib/processName');

const movieFileName = process.argv[2];
if(!movieFileName) {
  console.log(chalk.red('No movie name supplied!'));
  process.exit(1)
}
const {search, year} = processName(movieFileName);

axios.get(`https://www.omdbapi.com/?apikey=${process.env.APIKEY}&t=${search}&y=${year}`)
  .then(res => {
    const movie = res.data;
    if(!movie.Title) throw new Error('No movie title was found.')
    console.log(`${movie.Title} was released on ${movie.Released}`);
  })
  .catch(err => console.error(chalk.red(` * ${err}`)));
