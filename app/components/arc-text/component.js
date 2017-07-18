import Ember from 'ember';

const {
  Component,
  run: { scheduleOnce },
  // get,
} = Ember;

/**
 * ref used https://codepen.io/ccallen001/pen/QKpQgB
 */
const ArcTextComponent = Component.extend({
  classNames: ['arc-text'],

  arc:    360,
  origin: 0,
  radius: 100,
  text:   '',

  init() {
    this._super(...arguments);

    scheduleOnce('afterRender', this, function() {
      const $elem = this.$();
      $elem.html('');

      let { arc, radius, origin, text } = this.getProperties('arc', 'radius', 'origin', 'text');
      const len = text.length;
      const deg = arc / len;

      for (let i = 0; i < len; i++) {
        const rChar = text.charAt(i);

        $elem.append(`<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${rChar}</p>`);
        origin += deg;
      }
    });
  }
});

export default ArcTextComponent;
