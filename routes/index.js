const participantController = require("../controllers/participant-controller");
const api = '/api';

module.exports = (server) =>{
    server.get(api+"/participants",participantController.recupererLesParticipants);
    server.post(api+"/participant",participantController.postparticipant);
    server.put(api+"/majParticipant",participantController.putParticipant);
}