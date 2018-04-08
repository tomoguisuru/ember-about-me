import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('job-skill', 'Integration | Component | job skill', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{job-skill 
      skillLevel=skillLevel 
      name="Monkey"
    }}
  `);

  assert.equal(this.$().text().trim(), 'Monkey', 'Emits name property');
  assert.equal(this.$('.job-skill').hasClass('font--12'), true, 'Has correct font');

  this.set('skillLevel', 5);

  // Template block usage:
  this.render(hbs`
    {{#job-skill 
      skillLevel=skillLevel
    }}
      template block text
    {{/job-skill}}
  `);

  assert.equal(this.$('.job-skill').hasClass('font--36'), true, 'Has correct font');
  assert.equal(this.$().text().trim(), 'template block text', 'Displays block text correctly');
});
