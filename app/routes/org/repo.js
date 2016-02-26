import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    // debugger;
    let orgId = Ember.get(this.modelFor('org'),'id');
    return this.store.queryRecord('repo', {
      orgId,
      repoId: params.repoid
    });
    //return $.get(`https://api.github.com/repos/${org.id}/${params.repoid}?access_token=8b491d8e3f834e900e466be511c84fc869691fa1`).then(rawRepo => {
    //  rawRepo.oldId = rawRepo.id;
    //  rawRepo.id = rawRepo.name;
    //  return rawRepo;
    //}) 
  }
});
