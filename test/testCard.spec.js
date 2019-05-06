const chai = require('chai');
const expect = chai.expect;
const validator = require('../index');


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
    describe('e é vazio', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator('')).to.equal(false);
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
    
    describe('e é um composto por sequencia de 8', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator("88888888888888")).to.equal(false);
        });       
    });
    describe('e é um boleano true', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator(true)).to.equal(false);
        });       
    })
    describe('e é um boleano false', () => {
        it('deve retornar false', ()=>{
            expect(validator.cardValidator(false)).to.equal(false);
        });       
    })  
}); 
describe('QUANDO O CARTÃO É VALIDO', () => {
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
    describe('cartão enRoute com 15 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('214913101732465')).to.equal(true);                
        });       
    });
    describe('cartão American Express com 15 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('379245890734878')).to.equal(true);                
        });       
    }); 
    describe('cartão Mastercard com 16 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('5240451823631043')).to.equal(true);                
        });       
    });  
    describe('cartão Visa com 16 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('4916726936340442')).to.equal(true);                
        });       
    }); 
    describe('cartão JCB com 16 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('3537332718158283')).to.equal(true);                
        });       
    }); 
    describe('cartão Discover com 16 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('6011024938904087')).to.equal(true);                
        });       
    }); 
    describe('cartão Elo com 16 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('4389354672041401')).to.equal(true);                
        });       
    });
    describe('cartão Hipercard com 16 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('6062827802086544')).to.equal(true);                
        });       
    });
    describe('cartão Aura com 16 dígitos', () => {
        it('deve retornar true', ()=>{
            expect(validator.cardValidator('5040790069663588')).to.equal(true);                
        });       
    });   
   
}); 

