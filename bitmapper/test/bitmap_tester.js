'use strict';

const expect = require('chai').expect;
const reader = require('../header_reader');
const fs = require('fs');

describe('new img created', () => {
  it('should have newImage.bmp', () => {
    let transformedBitMap = fs.readFileSync('newImage.bmp');
    let oldBitMap = fs.readFileSync( 'non-palette-bitmap.bmp');
    expect(transformedBitMap).to.not.eql(oldBitMap);
  });
});
