import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    return this.store.query('repo', {
      orgId
    });
    //return $.get(`https://api.github.com/orgs/${orgId}/repos?access_token=8b491d8e3f834e900e466be511c84fc869691fa1`).then(rawRepos => {
    //  //debugger;
    //  return rawRepos.map(rawRepo => {
    //    rawRepo.oldId = rawRepo.id;
    //    rawRepo.id = rawRepo.name;
    //    return rawRepo;
    //  });
    //});
  }
});
