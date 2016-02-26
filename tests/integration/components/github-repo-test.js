import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
  const repo = Ember.Object.create({
    forks_count: 32,
    watchers_count: 99,
    name: 'repooo'
  });
  this.set('repo',repo);
  this.render(hbs`{{github-repo repo=repo}}`);
  assert.equal(this.$().text().trim(),`repooo
      ( Forks: 32 , Watchers: 99 )`);

  this.render(hbs`{{github-repo}}`);

 // assert.equal(this.$().text().trim(), `(
 //Forks  , Watchers:  )`);
 //
 // // Template block usage:" + EOL +
 // this.render(hbs`
 //   {{#github-repo}}
 //     template block text
 //   {{/github-repo}}
 // `);
 //
 // assert.equal(this.$().text().trim(), 'template block text');
});
