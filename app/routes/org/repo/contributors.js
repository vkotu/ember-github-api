import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let orgId = Ember.get(this.modelFor('org'), 'login');
    let repoId = Ember.get(this.modelFor('org.repo'), 'name');
    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors?access_token=8b491d8e3f834e900e466be511c84fc869691fa1`).then(rawContributors => {
      //debugger;

        //debugger;
        return rawContributors.map(rawContributor => {
          rawContributor.oldId = rawContributor.id;
          rawContributor.id = rawContributor.name;
          return rawContributor;
        });
      });
  }
});
