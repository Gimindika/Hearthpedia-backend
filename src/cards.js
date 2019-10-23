const Axios = require("axios");
const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/";

const header = {
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "d74edda605msh634bd54c9935348p1a7422jsn2b288df71077"
  }
};

let allCard = [];
const cards = Axios.get(`${url}/cards/`, header).then(result => {
  result = result.data;
  for (set in result) {
    result[set].map(card => {
      if (card.img) {
        allCard.push(card);
      }
      return null;
    });
  }
  return allCard;
});

module.exports = cards;
