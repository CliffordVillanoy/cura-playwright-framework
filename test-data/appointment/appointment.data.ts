// ==========================
// Positve Scenario
// ==========================

export const positiveScenario = {
  valid: {
  facility: 'Tokyo CURA Healthcare Center',
  visitDate: '30/03/2026',
  comment: 'Test appointment'
  }
};

// ==========================
// Negative Scenario
// ==========================

export const negativeScenario = [
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
// Edge Case Scenario
// ==========================

export const edgeScenario = [
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