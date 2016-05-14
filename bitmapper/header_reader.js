const fs = require('fs');
filename = __dirname + '/non-palette-bitmap.bmp'
//filename = __dirname + '/palette-bitmap.bmp'

const file = fs.readFileSync(filename);

const headers = {};

headers.type = file.toString('ascii', 0, 2);
headers.size = file.readUInt32LE(2)
headers.pixelStart = file.readUInt32LE(10);


var pixel = 0
var wstream = fs.createWriteStream('myOutput.bmp');
for (var i = 0; i < file.length; i++) {
 //data = new Array
 data = file[i]
 if (i > headers.pixelStart ) {
     data = Math.floor((Math.random() * 255) + 1);
 }


 var buf = new Buffer(1);
 buf.writeUInt8(data, 0);
 //b = Buffer.alloc(1, data);
 console.log(buf);
 wstream.write(buf);
}
wstream.end();



console.log(headers);
