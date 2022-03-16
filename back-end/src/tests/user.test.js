const frisby = require('frisby');

describe('users', () => {
  it('Deve retornar erro se for realizado login com name inválido', async () => {

    await frisby
      .post('http://localhost:3001/users', {
        email: 'email@email.com',
        password: '123456'
      })
      .expect('status', 400)
      .expect('json', {
        message: '"name" is required'
      });

    await frisby
      .post('http://localhost:3001/users', {
        name: 'aaaaaaaa'
      })
      .expect('status', 400)
      .expect('json', {
        message: '"name" length must be at least 12 characters long'
      });

    await frisby
      .post('http://localhost:3001/users', {
        name: 'aaaaaaaaaaaa',
        email: 'email@email'
      })
      .expect('status', 400)
      .expect('json', {
        message: '"email" must be a valid email'
      });
  });

  it('Deve retornar erro se a senha estiver incorreta', async () => {

    await frisby
      .post('http://localhost:3001/users', {
        name: 'aaaaaaaaaaaa',
        email: 'email@email.com',
        password: '0000'
      })
      .expect('status', 400)
      .expect('json', {
        message: '"password" length must be at least 6 characters long'
      });
  });
});

it('Deve retornar erro se a senha estiver vazia', async () => {

  await frisby
    .post('http://localhost:3001/users', {
      name: 'aaaaaaaaaaaa',
      email: 'email@email.com',
      password: ''
    })
    .expect('status', 400)
    .expect('json', {
      message: '"password" is not allowed to be empty'
    });
});

it('Deve retornar erro se o campo name estiver vazio', async () => {

  await frisby
    .post('http://localhost:3001/users', {
      name: '',
      email: 'email@email.com',
      password: '123456'
    })
    .expect('status', 400)
    .expect('json', {
      message: '"name" is not allowed to be empty'
    });
});

it('Deve retornar erro se o campo email estiver vazio', async () => {

  await frisby
    .post('http://localhost:3001/users', {
      name: 'aaaaaaaaaaaa',
      email: '',
      password: '123456'
    })
    .expect('status', 400)
    .expect('json', {
      message: '"email" is not allowed to be empty'
    });
});



