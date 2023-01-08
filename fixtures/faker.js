const Participant = require('../models/Participant');
const { faker } = require('@faker-js/faker');

async function participantFixture(){
    await Participant.deleteMany({});
    for (i = 0; i <= 10; i++) {
        const particiapnt = new Participant({
            pseudo : faker.name.lastName(),
            mobile : faker.phone.number(),
            score: faker.random.numeric(9)
        })
         particiapnt.save();
        console.log(particiapnt);
    }
}

module.exports = {
    "participantFixture":participantFixture
}
