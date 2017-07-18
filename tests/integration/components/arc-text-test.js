import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('arc-text', 'Integration | Component | arc text', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const arc_text = 'this is a test';
  this.set('arc_text', arc_text);
  this.render(hbs`
   {{arc-text arc_text=arc_text}}
  `);

  return wait().then(() => {
    assert.equal(this.$('.arc-text').length, 1);
  });

});
