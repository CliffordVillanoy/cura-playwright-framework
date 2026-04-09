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