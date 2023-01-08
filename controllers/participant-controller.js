const Participant = require('../models/Participant');

module.exports = {
    recupererLesParticipants(req, res) {
        Participant.find()
          .sort({ score: -1 })
          .then((participants) => {
            res.send(participants);
          });
      },
      postparticipant(req, res, next) {
        const body = req.body;
        console.log(body);
        const { pseudo } = body;
        const { mobile } = body;
        const { score } = body;
        const participant = new Participant({
          pseudo: pseudo,
          mobile: mobile,
          score: score
        });
        participant.save().then(() => {
          res.send(participant);
          next();
        });
      },
      async putParticipant(req, res) {
        console.log(req.body);
        //var//
        const { _id, score} = req.body;
    
        //update//
        const filter = { _id: _id };
        const update = {
          score:score
        };
        let participant = await Participant.findByIdAndUpdate(filter, update);
        console.log(participant);
        participant.save().then(async () => {
          res.send(participant);
        });
      },
}