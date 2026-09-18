const https = require('https');

const dataString = JSON.stringify({fullName: "Test Node"});
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain;charset=utf-8',
    'Content-Length': Buffer.byteLength(dataString)
  }
};

const req = https.request('https://script.google.com/macros/s/AKfycbwpnV3ILiOSN4EtWk35_2vCGg6Nz_1IjtUQkXVwQRyqpicK7Z4dcepKHAx_ko7nhbO5Ww/exec', options, (res) => {
  if (res.statusCode === 302) {
    const loc = res.headers.location;
    console.log("Redirected to:", loc);
    // Follow redirect with GET
    https.get(loc, (res2) => {
      let body = '';
      res2.on('data', chunk => body += chunk);
      res2.on('end', () => console.log("Final Body:", body));
    });
  } else {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => console.log("Final Body:", body));
  }
});

req.on('error', (e) => console.error(e));
req.write(dataString);
req.end();
