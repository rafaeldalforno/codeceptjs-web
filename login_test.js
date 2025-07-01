Feature('login');

Scenario('Login com Sucesso',  ({ I }) => {

  I.amOnPage('http://automationpratice.com.br');
  I.click('Login');
  I.waitForText('Login', 1);
  I.fillField('#user', 'qazando@test.com');
  I.fillField('#password', '123456');
  I.click('#btnLogin');
  I.waitForText('Login realizado', 3);
  I.waitForText('Olá, qazando@test.com');

}).tag('@sucesso');

Scenario('Tentando Logar digitando apenas o email',  ({ I }) => {

  I.amOnPage('http://automationpratice.com.br');
  I.click('Login');
  I.fillField('#user', 'qazando@test.com');
  I.click('#btnLogin');
  I.waitForText('Senha inválida', 2)  

}).tag('onlyEmail');

Scenario('Tentando Logar sem digitar email e senha',  ({ I }) => {

  I.amOnPage('http://automationpratice.com.br');
  I.click('Login');
  I.click('#btnLogin');
  I.waitForText('E-mail inválido.', 2)

}).tag('emptyData');

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

  I.amOnPage('http://automationpratice.com.br');
  I.click('Login');
  I.fillField('#password', '123456');
  I.click('#btnLogin');
  I.waitForText('E-mail inválido.', 2)

}).tag('onlyPassword');