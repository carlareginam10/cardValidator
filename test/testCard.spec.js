const chai = require('chai');
const expect = chai.expect;
const validator = require('../index');

describe('QUANDO O CARTÃO É VALIDO', () => {
    describe('cartão com 16 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('5220147622328021')).to.equal(true);                
        });       
    });  
    describe('cartão visa com 16 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('4916726936340442')).to.equal(true);                
        });       
    }); 
    describe('cartão Diners com 14 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('30392141983465')).to.equal(true);                
        });       
    }); 
    describe('cartão Voyager com 15 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('869929344656202')).to.equal(true);                
        });       
    });  
    
   
}); 

describe('QUANDO O CARTÃO É INVÁLIDO', () => {     
    describe('e tem mais que 16 números', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator('52201476223280201111')).to.equal(false);
        });       
    });
    describe('e tem menos que 16 números', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator('786')).to.equal(false);
        });       
    });
    
    describe('e o total não é divisivel por 10', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator('5350810502386790')).to.equal(false);
        });       
    });
    describe('e é uma string com 16 letras', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator('ringstringstring')).to.equal(false);
        });       
    });
    describe('e é um cartão válido digitado com pontuação', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator("5220.1476.2232.8021")).to.equal(false);
        });       
    });
    describe('e é um composto por sequencia de zeros', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator("1000000000000000")).to.equal(false);
        });       
    });
    describe('e é um composto por sequencia de zeros', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator("7777777777777777")).to.equal(false);
        });       
    });
   


}); 

