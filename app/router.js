import Ember from 'ember';
import config from './config/environment';

const {
  get,
  run: { scheduleOnce },
  inject: { service },
} = Ember;

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  metrics: service(),

  didTransition() {
    this._super(...arguments);

    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');

      get(this, 'metrics').trackPage({ page, title });
    });
  }
});

Router.map(function() {
  this.route('about', { path: '/' });
});

export default Router;
