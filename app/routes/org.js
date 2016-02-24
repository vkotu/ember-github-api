import Ember from 'ember';

export default Ember.Route.extend({

  authentication: Ember.inject.service(),
  model(params){
   // debugger;
   return $.get(`https://api.github.com/orgs/${params.id}`).then(rawOrg => {
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
