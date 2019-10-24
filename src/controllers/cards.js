const formResponse = require("../helpers/form-response");
const cards = require("../cards");

module.exports = {
  getCards: async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 8;
    const start = (page - 1) * limit;

    let filters = req.query;

    cards.then(cards => {
      let result = [];
      let tmp = [];
      for (let i = 0; i < cards.length; i++) {
        let match = true;
        for (let fil in filters) {
          if (fil != "page") {
            if (cards[i].hasOwnProperty([fil])) {
              if (fil == "attack" || fil == "cost") {
                if (filters[fil] != 0 && cards[i][fil] == 0) {
                  match = false;
                }
              }

              if (cards[i][fil]) {
                if (cards[i][fil] != filters[fil]) {
                  match = false;
                }

                if (filters["name"]) {
                  if (
                    cards[i]["name"]
                      .toLowerCase()
                      .indexOf(filters["name"].toLowerCase()) !== -1
                  ) {
                    match = true;
                  }
                }
              }
            } else {
              match = false;
            }
          }
        }

        if (match) {
          tmp.push(cards[i]);
        }
      }
      for (let i = start; i < limit + start; i++) {
        if (tmp[i]) {
          result.push(tmp[i]);
        }
      }
      formResponse.response(res, 200, result);
    });
  }
};
