import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { isBlank } from '@ember/utils';

const MDIComponent = Component.extend({
  tagName: 'i',

  classNames: ['mdi'],
  classNameBindings: ['mdiAttrs'],

  props: '',

  mdiAttrs: computed('props', function() {
    const props = get(this, 'props');

    if (isBlank(props)) { return; }

    return props.replace(/ /g, '')
      .split(',')
      .map(_a => `mdi-${_a}`)
      .join(' ');
  }),


});

export default MDIComponent;
