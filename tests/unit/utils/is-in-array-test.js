import isInArray from '../../../utils/is-in-array';
import { module, test } from 'qunit';
import Ember from 'ember';

module('Unit | Utility | is in array');

// Replace this with your real tests.
test('it works', function(assert) {
  const Type = Ember.Object.extend({
    item: 6,
    list: [1,2,3],
    isItemInList: isInArray('item','list')
  });
  const obj = Type.create();
//debugger;

  assert.equal(obj.get('isItemInList'), false, 'Intial Check for not in list');
  obj.get('list').addObject(6);
  assert.equal(obj.get('isItemInList'), true, 'Intial Check for item in list');
  obj.set('item',52);
  assert.equal(obj.get('isItemInList'), false, 'after changing obj Check for not in list');
});
