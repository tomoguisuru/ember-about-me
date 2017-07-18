import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdi-icon', 'Integration | Component | mdi icon', {
  integration: true
});

test('it renders', function(assert) {

  this.set('props', 'cellphone,18');
  this.render(hbs`{{mdi-icon props=props}}`);

  assert.equal(this.$('.mdi').hasClass('mdi-cellphone'), true, 'Correct icon class');
  assert.equal(this.$('.mdi').hasClass('mdi-18'), true, 'Correct font class');
});
