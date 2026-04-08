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