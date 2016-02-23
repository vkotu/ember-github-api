import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    // debugger;
    let org = this.modelFor('org');
    return $.get(`https://api.github.com/repos/${org.id}/${params.repoid}`).then(rawRepo => {
      rawRepo.oldId = rawRepo.id;
      rawRepo.id = rawRepo.name;
      return rawRepo;
    })
  }
});
