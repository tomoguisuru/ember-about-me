import Ember from 'ember';

const {
  Component,
  computed,
  get,
} = Ember;

const JobSkillComponent = Component.extend({
  classNames: ['job-skill'],

  classNameBindings: ['fontSize'],

  fontSize: computed('skillLevel', function() {
    const skillLevel = get(this, 'skillLevel');
    const skillLevels = { 1: 12, 2: 16, 3: 18, 4: 24, 5: 36};
    const level = skillLevels[skillLevel] || 12;

    return `font--${level}`;
  }),
});

export default JobSkillComponent;
