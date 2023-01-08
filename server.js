const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/index');
const PORT = 3000;
const server = express();
const fixture = require('./fixtures/faker');


mongoose.Promise = global.Promise;
server.use(bodyParser.json());
route(server);
server.listen(process.env.PORT || PORT,async(req, res) => {
    // fixture.participantFixture();
    console.log("serveur exécuter sur http://localhost:" + PORT)
    // mongoose.connect('mongodb://localhost:27017/Ae2iGamer')
    mongoose.connect('mongodb+srv://oriesta:azerty77@cluster0.iczkn.mongodb.net/Ae2iGamer?retryWrites=true&w=majority')
    mongoose.connection
        .once('open', () => console.log('Connexion est établie'))
        .on('error', (error) => {
            console.warn('Erreur durant la connexion', error)
        })
})