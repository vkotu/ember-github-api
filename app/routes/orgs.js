import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 'facebook'},
      {id: 'emberjs'},
      {id: 'yahoo'},
      {id: 'netflix'},
      {id: 'microsoft'},
      {id: 'ember-cli'}
    ];

  },

  favorites: Ember.inject.service(),

  //setupController(controller,model) {
  //  controller.set('model',model)
  //},

  actions: {
    favClicked(org) {
      this.get('favorites').favoriteItem(org);
    }
  }
});
