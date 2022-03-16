const frisby = require('frisby');

describe('login', () => {
  it('Deve retornar erro se for realizado login com email inválido', async () => {

    await frisby
      .post('http://localhost:3001/login', {
        password: '123456',
      })
      .expect('status', 401)
      .expect('json', {
        message: '"email" is required'
      });

    await frisby
      .post('http://localhost:3001/login', {
        email: 'email@email'
      })
      .expect('status', 401)
      .expect('json', {
        message: '"email" must be a valid email'
      });

    await frisby
      .post('http://localhost:3001/login', {
        email: ''
      })
      .expect('status', 401)
      .expect('json', {
        message: '"email" is not allowed to be empty'
      });

  });

  it('Deve retornar erro se a senha estiver incorreta', async () => {

    await frisby
      .post('http://localhost:3001/login', {
        email: 'email@email.com',
        password: '0000',
      })
      .expect('status', 401)
      .expect('json', {
        message: '"password" length must be at least 6 characters long'
      });
  });


});

it('Deve retornar erro se a senha estiver vazia', async () => {

  await frisby
    .post('http://localhost:3001/login', {
      email: 'email@email.com',
      password: ''
    })
    .expect('status', 401)
    .expect('json', {
      message: '"password" is not allowed to be empty'
    });
});