const filterEligibleShows = require('../services/FilterEligibleShows');

class Show {
  async listEligible(payload) {
    const filteredList = await filterEligibleShows.execute(payload);

    const response = filteredList.map(show => {
      return {
        "image": `${show.image.showImage}`,
        "slug": `${show.slug}`,
        "title": `${show.title}`
      }
    });

    return response;
  }
}

module.exports = new Show;