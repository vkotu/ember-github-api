import Ember from 'ember';
import isInArray from '../utils/is-in-array';
import checkTestVar from '../utils/is-in-array';

export default Ember.Component.extend({
  tagName: 'li',
  favorites: Ember.inject.service(),
  isFavorited: isInArray('org','favorites.items'),
  testVarChanged: checkTestVar('testVar'),
  actions: {
    favWasClicked() {
      this.set('testVar',"I am changed");
      //debugger;
      this.sendAction('on-fav-clicked',this.get('org'));
    }
  }
});
