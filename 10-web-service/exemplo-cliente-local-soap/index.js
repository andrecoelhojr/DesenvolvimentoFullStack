const soap = require("soap");
const url = "http://localhost:8001/wscalc1?wsdl";

soap.createClient(url, (err, client) => {
    if (err) throw err;
    console.log(client.describe().ws.calc);

    client.multiplicar({a: 4, b: 3}, (err,res) => {
        if (err) throw err;
        console.log(res);
    });

    client.somar({a: 4, b: 3}, (err,res) => {
        if (err) throw err;
        console.log(res);
    });

});