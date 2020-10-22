class FilterEligibleShows {
  async execute(payload) {
    return await payload.filter(show => show.drm && show.episodeCount > 0)
  }
}

module.exports = new FilterEligibleShows;