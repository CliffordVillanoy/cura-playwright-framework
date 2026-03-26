// ==========================
// LOGIN DATA
// ==========================
export const loginData = {
    valid: {
      username: 'John Doe',
      password: 'ThisIsNotAPassword'
    }
  };

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


// ==========================
// APPOINTMENT BASE DATA
// ==========================
export const appointmentData = {
  valid: {
    facility: 'Tokyo CURA Healthcare Center',
    visitDate: '30/03/2026',
    comment: 'Test appointment'
  }
};


// ==========================
// NEGATIVE SCENARIOS
// ==========================
export const negativeScenarios = [
  {
    name: 'missing date',
    data: {
      facility: 'Hongkong CURA Healthcare Center',
      visitDate: '',
      comment: 'Test appointment'
    },
    expectedUrl: '#appointment'
  },
  {
    name: 'missing facility',
    data: {
      facility: '',
      visitDate: '30/03/2026',
      comment: 'Test appointment'
    },
    expectedUrl: '#summary'
  },
  {
    name: 'empty form',
    data: {
      facility: '',
      visitDate: '',
      comment: ''
    },
    expectedUrl: '#appointment'
  }
];


// ==========================
// EDGE CASE SCENARIOS
// ==========================
export const edgeScenarios = [
  {
    name: 'past date',
    data: {
      facility: 'Seoul CURA Healthcare Center',
      visitDate: '01/01/2020',
      comment: 'Past date test'
    },
    expectedUrl: '#summary'
  },
  {
    name: 'invalid date format',
    data: {
      facility: 'Tokyo CURA Healthcare Center',
      visitDate: '21/21/2020',
      comment: 'Invalid date format test'
    },
    expectedUrl: '#summary'
  },
  {
    name: 'long comment',
    data: {
      facility: 'Tokyo CURA Healthcare Center',
      visitDate: '30/03/2026',
      comment: 'A'.repeat(500)
    },
    expectedUrl: '#summary'
  }
];