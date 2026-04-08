export const invalidLoginScenarios = [
  {
    name: 'invalid credentials',
    data: {
      username: 'InvalidUser',
      password: 'WrongPassword'
    }
  },
  {
    name: 'empty credentials',
    data: {
      username: '',
      password: ''
    }
  }
];