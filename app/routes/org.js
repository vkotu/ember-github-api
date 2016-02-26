import Ember from 'ember';

export default Ember.Route.extend({

  authentication: Ember.inject.service(),
  model(params){
   // debugger;
    let url = `https://api.github.com/orgs/${params.id}?access_token=8b491d8e3f834e900e466be511c84fc869691fa1`;
    //debugger;
   return $.get(url).then(rawOrg => {
      rawOrg.oldId = rawOrg.id;
      rawOrg.id = rawOrg.login;
      return new Ember.RSVP.Promise((resolve, reject) => {
        Ember.run.later(() => {
          resolve( rawOrg);
        },500);
      });
    })
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('records', this.get('authentication.records'));
  },

  actions: {
    addToRecords(value) {
     // alert(`Hi: ${value}`);
      this.get('authentication.records').addObject({id: value});
    },
    error(jqxhr) {
      //debugger;
      if(jqxhr.status === 404) {
       this.intermediateTransitionTo('org.notfound')
      } else {
        return true;
      }
      //debugger;
    }
  }


});
