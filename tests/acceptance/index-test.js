import { test } from 'qunit';
import Ember from 'ember';
import moduleForAcceptance from 'ember0guthub-api/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    //debugger;
    assert.equal(currentURL(), '/orgs');
    assert.equal(currentRouteName(), 'orgs', 'at orgs route');
  });
  click('a[href*="org/emberjs"]');
  andThen(() => {
    assert.equal(currentURL(),'/org/emberjs/repos','at repos page');
  });
  click('a[href*="org/emberjs/data"]');
  andThen(() => {
    debugger;
    assert.equal(currentURL(),'/org/emberjs/data/issues', 'at issues page');

  });
});

