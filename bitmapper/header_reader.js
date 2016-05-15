const fs = require('fs');
var fileName = __dirname + '/non-palette-bitmap.bmp';

const imageFile = fs.readFileSync(fileName);

const headers = {};

headers.type = imageFile.toString('ascii', 0, 2);
headers.size = imageFile.readUInt32LE(2);
headers.pixelStart = imageFile.readUInt32LE(10);

var transformer = function(image) {
  var stream = fs.createWriteStream('newImage.bmp');
  for (var i = 0; i < imageFile.length; i++) {
    var data = imageFile[i];
    if (i > headers.pixelStart ) {
      data = Math.floor((Math.random() * 255) + 1);
    }

    var buffr = new Buffer(1);
    buffr.writeUInt8(data, 0);
    stream.write(buffr);
  }
  stream.end();
};

transformer(fileName);
