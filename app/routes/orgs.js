import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise((resolve,reject) => {
      Ember.run.later(() => {
        resolve([
          {id: 'facebook'},
          {id: 'emberjs'},
          {id: 'yahoo'},
          {id: 'netflix'},
          {id: 'microsoft'},
          {id: 'ember-cli'}
        ]);
      },500);
    });
  },

  favorites: Ember.inject.service(),

  //setupController(controller,model) {
  //  controller.set('model',model)
  //},

  actions: {
    favClicked(org) {
      if(this.get('favorites.items').indexOf(org) < 0 ){
        this.get('favorites').favoriteItem(org);
      }else{
        this.get('favorites').unfavoriteItem(org);
      }

    },
    linksToggled() {
      console.log("Toggled");
    }
  }
});
