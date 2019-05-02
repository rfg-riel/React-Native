
const person = [{
    'id': '0',
    'firstName': 'Gary',
    'lastName': 'Lo',
    'birthday': '01/01/1980',
    'email': 'gary.lo@test.com',
    'mobileNumber': '09551230987',
    'address': 'Manila',
    'contactPerson': 'John',
    'contactPersonPhoneNumber': '09551230988'

},{
    'id': '1',
    'firstName': 'Dan',
    'lastName': 'Ho',
    'birthday': '01/01/1985',
    'email': 'dan.ho@test.com',
    'mobileNumber': '09551230977',
    'address': 'Quezon',
    'contactPerson': 'Amy',
    'contactPersonPhoneNumber': '09551230978'
}];

class PersonApi {
    static getPerson () {
        return person
    }
}

export default PersonApi
