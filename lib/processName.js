module.exports = (titleString) => {
  const movieNameArr = titleString.split(/[.,_,\-,\ ]/);
  let results = {};
  let titleArr = [];
  for (let i = 0;i < movieNameArr.length; i++) {
    if (/\(?\d{4}\)?/.test(movieNameArr[i])) {
      results.title = titleArr.join(' ');
      results.year = movieNameArr[i].replace(/[()]/g, '');
      break;
    }
      titleArr.push(movieNameArr[i]);
  }
  return results;
};
