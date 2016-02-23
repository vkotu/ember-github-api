import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', function() {
    this.route('kotu');
  });
  //LIST OF ORGS
  this.route('orgs');

  //INDIVIDUAL ORG
  this.route('org',{path: 'org/:id'}, function() { //org/yahoo

    //LIST OF REPOS
    this.route('repos');
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors');
      this.route('issues');
    }); //org/jquery/jquery-ui
  });
  this.route('notfound', {path:'*path'});
});

export default Router;
