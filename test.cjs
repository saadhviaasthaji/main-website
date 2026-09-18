const https = require('https');
const http = require('http');

function makeRequest(url, data) {
  const dataString = JSON.stringify(data);
  const urlObj = new URL(url);
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
      'Content-Length': Buffer.byteLength(dataString)
    }
  };

  const req = https.request(url, options, (res) => {
    if (res.statusCode === 302) {
      console.log("Redirecting to:", res.headers.location);
      makeRequest(res.headers.location, data);
      return;
    }
    
    let responseBody = '';
    res.on('data', (chunk) => responseBody += chunk);
    res.on('end', () => console.log("Response:", res.statusCode, responseBody));
  });

  req.on('error', (e) => console.error(e));
  req.write(dataString);
  req.end();
}

makeRequest('https://script.google.com/macros/s/AKfycbwpnV3ILiOSN4EtWk35_2vCGg6Nz_1IjtUQkXVwQRyqpicK7Z4dcepKHAx_ko7nhbO5Ww/exec', {
  fullName: "Test Node", 
  email: "test@test.com", 
  phone: "123", 
  occupation: "", 
  address: "", 
  city: "", 
  reason: "other", 
  message: ""
});
