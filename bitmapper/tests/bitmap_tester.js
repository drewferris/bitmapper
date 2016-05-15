'use strict';

const expect = require('chai').expect;
const reader = require('../header_reader');
const fs = require('fs');

describe('new img created', () => {
  it('should have newImage.bmp', () => {
    if(err) console.log(err);
    var transformedBitMap = fs.readFileSync('../newImage.bmp');
    var oldBitMap = __dirname + '/non-palette-bitmap.bmp';
    expect(transformedBitMap).to.not.eql(oldBitMap);
  });
});
