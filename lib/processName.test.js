const assert = require('chai').assert;
const processName = require('../lib/processName');

// 'Hidden.Figures.2016.720p.BRRip.X264.AC3-EVO.mkv',
// 'X-Men.Days.of.Future.Past.2014.720p.Rogue.Cut.BluRay.x264-x0r.mkv',
// 'Rogue.One.2016.1080p.BRRip.X264.AC3-EVO.mkv',
// 'Oz.The.Great.And.Powerful.2013.720p.BRRip.x264.AAC-ViSiON.mp4',
// 'Iron.Man.3.2013.720p.BDRip.x264.AAC-ViSiON.mp4',
// 'The.Conversation.1974.720p.BRRip.x264-x0r.mkv',
// 'The.Da.Vinci.Code.2006.Extended.Cut.720p.BluRay.DTS.x264-DON.mkv',
// 'Romancing.the.Stone.1984.720p.BluRay.DD5.1x264-SbR.mkv',
// 'National.Treasure.Book.Of.Secrets.2007.720p.BluRay.x264-x0r.mkv',
// 'Stargate.Continuum.2008.720p.BluRay.DTS.x264-CtrlHD.mkv'     
//  'A.Few.Good.Men.1992.720p.BDRip.XviD-SHiRK.avi',

describe('processName module', () => {
  it('converts a name from scene style title with dot seperators', () => {
    const str = 'The.Score.2001.720p.BRRip.x264-x0r.mkv';
    const expected = { search: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });

  it('converts a name from scene style title with space seperators', () => {
    const str = 'The Score 2001 720p BRRip x264-x0r.mkv';
    const expected = { search: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });

  it('converts a name from scene style title with underline seperators', () => {
    const str = 'The_Score_2001_720p_BRRip_x264-x0r.mkv';
    const expected = { search: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });

  it('converts a name from scene style title with dash seperators', () => {
    const str = 'The-Score-2001-720p-BRRip-x264-x0r.mkv';
    const expected = { search: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });
  
  it('converts a year', () => {
    const str = 'The Score 2001.mkv';
    const expected = { search: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });

  it('converts a year wrapped in parens', () => {
    const str = 'The Score (2001).mkv';
    const expected = { search: 'The Score', year: '2001' };
    assert.deepEqual(processName(str), expected)
  });
});