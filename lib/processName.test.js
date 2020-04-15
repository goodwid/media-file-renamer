const assert = require('chai').assert;
const processName = require('../lib/processName');

describe('processName module', () => {
  it('converts a name from scene style title with dot seperators', () => {
    const str = 'The.Score.2001.720p.BRRip.x264-x0r.mkv';
    const expected = { title: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });

  it('converts a name from scene style title with space seperators', () => {
    const str = 'The Score 2001 720p BRRip x264-x0r.mkv';
    const expected = { title: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });

  it('converts a name from scene style title with underline seperators', () => {
    const str = 'The_Score_2001_720p_BRRip_x264-x0r.mkv';
    const expected = { title: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });

  it('converts a name from scene style title with dash seperators', () => {
    const str = 'The-Score-2001-720p-BRRip-x264-x0r.mkv';
    const expected = { title: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });

  it('converts a year', () => {
    const str = 'The Score 2001.mkv';
    const expected = { title: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });

  it('converts a year wrapped in parens', () => {
    const str = 'The Score (2001).mkv';
    const expected = { title: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });
});
