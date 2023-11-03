const soap = require("soap");
const url = "http://www.dneonline.com/calculator.asmx?wsdl";

soap.createClient(url, function (err, client) {
    console.log('Descreve -> ', client.describe().Calculator.CalculatorSoap);

    client.Add({intA: 10, intB: 2}, function (err, result) {
        if(err) {
            console.log(err)            
        } else {
            console.log("A soma é: " + result.AddResult);
        }
    })

    client.Subtract({intA: 10, intB: 2}, function (err, result) {
        if(err) {
            console.log(err)            
        } else {
            console.log("A subtração é: " + result.SubtractResult);
        }
    })

    client.Multiply({intA: 10, intB: 2}, function (err, result) {
        if(err) {
            console.log(err)            
        } else {
            console.log("A multiplicação é: " + result.MultiplyResult);
        }
    })    

    client.Divide({intA: 10, intB: 2}, function (err, result) {
        if(err) {
            console.log(err)            
        } else {
            console.log("A divisão é: " + result.DivideResult);
        }
    })
});