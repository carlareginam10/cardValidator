const chai = require('chai');
const expect = chai.expect;
const validator = require('../index');

describe('QUANDO O CARTÃO É VALIDO', () => {
    describe('XXXXXX', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator(5220147622328021)).to.equal(true);                
        });       
    });  
   
}); 


describe('QUANDO O CARTÃO É INVÁLIDO', () => {
     
    describe('e tem mais que 16 números', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator('52201476223280201')).to.equal(false);
        });       
    });
    describe('e o primeiro número começa com 0', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator('0220147622328020')).to.equal(false);
        });       
    });
    describe('e o total não é divisivel por 10', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator('5350810502386790')).to.equal(false);
        });       
    });


}); 