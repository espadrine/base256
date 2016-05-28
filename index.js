var base64url = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9", "-", "_"];

function encode(buf) {
  var s = '';
  var len = buf.length;
  for (var i = 0; i < len; i++) {
    var b = buf[i];
    if (b < 64) {
      s += String.fromCharCode(b + 0xc0);
    } else if (b < 128) {
      // Encode it as base64url
      s += base64url[b - 64];
    } else {
      s += String.fromCharCode(b - 128 + 0xc0);
    }
  }
  return s;
}

exports.encode = encode;
