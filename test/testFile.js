const sumar = require("../index");
//Asserts = Afirmacion
const asserts = require("assert");
const { assert } = require("console");

describe("Suma de dos numeros apunto estas", ()=>{
    //Afirmamos cinco mas siete son 12
    it("Cinco mas siete es 12", ()=>{
        asserts.equal(12, sumar(5,7));
    });
    //Afirmamos cinco mas ciete no son 57
    it("Cinco mas siete no son 57", ()=>{
        asserts.notEqual(57, sumar(5,7));
    });
});
