
// ==========================
// Positive Scenario
// ==========================

export const loginData = {
    valid: {
    username: 'John Doe',
    password: 'ThisIsNotAPassword'
    }
  };

// ==========================
// Negative Scenario
// ==========================

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