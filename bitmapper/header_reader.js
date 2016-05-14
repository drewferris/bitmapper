const fs = require('fs');
var filename = __dirname + '/non-palette-bitmap.bmp';

const file = fs.readFileSync(filename);

const headers = {};

headers.type = file.toString('ascii', 0, 2);
headers.size = file.readUInt32LE(2);
headers.pixelStart = file.readUInt32LE(10);

var wstream = fs.createWriteStream('newImage.bmp');
for (var i = 0; i < file.length; i++) {
  var data = file[i];
  if (i > headers.pixelStart ) {
    data = Math.floor((Math.random() * 255) + 1);
  }

  var buf = new Buffer(1);
  buf.writeUInt8(data, 0);
  console.log(buf);
  wstream.write(buf);
}
wstream.end();

console.log(headers);
