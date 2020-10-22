const show = require('../models/Show');

class ShowController {
  listEligible() {
    return async function (req, res) {
      try {
        const { payload } = req.body;

        const response = {
          "response": await show.listEligible(payload)
        };

        res.status(200).json(response)
      } catch(err) {
        return res.status(400).json({ error: "Could not decode request: JSON parsing failed" });
      }
    }
  }
}

module.exports = new ShowController;