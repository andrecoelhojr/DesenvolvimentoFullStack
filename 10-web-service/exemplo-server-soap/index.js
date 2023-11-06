const express = require("express");
const soap = require("soap");
const app = express();
const fs = require("fs");
const PORT = 8001;

const myservice = {
    ws: {
        calc: {
            somar : function(args) {
                const n = 1*args.a + 1*args.b;
                return { sumres : n };
            },
            multiplicar : function(args) {
                  const n = args.a * args.b;
                  return { mulres : n };
            }
        }
    }
};

const xml = fs.readFileSync("wscalc1.wsdl", "utf8");

app.listen(PORT, () => {
    soap.listen(app, '/wscalc1', myservice, xml, () => {
      console.log('Servidor online ' + PORT + '...');
    });
});