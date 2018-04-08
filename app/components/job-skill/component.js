import Component from '@ember/component';
import { computed, get } from '@ember/object';

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
