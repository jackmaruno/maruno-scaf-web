const proxy = [
    {
      "context": ["/api"],
      "target": "http://localhost:8080/scaf-rest/api",
      "secure": false,
    //   pathRewrite: {'^/api' : ''}
    "logLevel": "debug",
    "bypass": function (req, res, proxyOptions) {
        req.headers["Access-Control-Allow-Origin"] = "*";
        req.headers["Access-Control-Allow-Methods"] = "GET, PUT, POST, DELETE";
        req.headers["Access-Control-Allow-Headers"] = "Content-Type";
    
        console.log('\n\n\n\n\nproxy', req.headers);
        if (req.headers.accept && req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
        }
        req.headers["X-Custom-Header"] = "yes";
    }
    },  

  ];
  module.exports = proxy;