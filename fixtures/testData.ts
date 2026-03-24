export const loginData = {
    validUser: {
        username: 'John Doe',
        password: 'ThisIsNotAPassword'
    },
    invalidUser: {
        username: 'InvalidUser',
        password: 'WrongPassword'
    },
    emptyUser: {
        username: '',
        password: ''
    },

};


export const appointmentData = {
    validAppointment: {
        facility: 'Tokyo CURA Healthcare Center',
        visitDate: '30/03/2026',
        comment: 'Test appointment'
    },
    missingDate: {
        facility: 'Hongkong CURA Healthcare Center',
        visitDate: '',
        comment: 'Test appointment'
    },
    missingFacility: {
        facility: '',
        visitDate: '30/03/2026',
        comment: 'Test appointment'
    },
    emptyForm: {
        facility: '',
        visitDate: '',
        comment: ''
    }
};