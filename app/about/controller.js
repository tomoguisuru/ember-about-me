import Ember from 'ember';

const {
  Controller,
  computed,
  get,
} = Ember;

const AboutController = Controller.extend({
  sortKey:       'name',  // [name, level, years]
  sortDirection: 'asc',   // [asc, desc]

  skills: [
    { name: 'HTML',       level: 4, years: 10 },
    { name: 'EmberJS',    level: 5, years: 3 },
    { name: 'ReactJS',    level: 3, years: 1 },
    { name: 'JavaScript', level: 5, years: 8 },
    { name: 'SQL',        level: 3, years: 7 },
    { name: 'ASP.NET',    level: 2, years: 5 },
    { name: 'PHP',        level: 2, years: 2 },
    { name: 'Ruby',       level: 2, years: 2 },
    { name: 'Rails',      level: 2, years: 2 },
    { name: 'C#',         level: 3, years: 6 },
    { name: 'Python',     level: 1, years: 1 },
    { name: 'CSS',        level: 4, years: 5 },
    { name: 'Elixir',     level: 1, years: 1 },
    { name: 'Phoenix',    level: 1, years: 1 },
  ],

  hobbies: [
    { icon: 'quadcopter',  description: 'Drone Piloting' },
    { icon: 'printer-3d',  description: '3D Printing' },
    { icon: 'movie',       description: 'Movies' },
    { icon: 'laptop',      description: 'Programming' },
    { icon: 'playstation', description: 'Video Games' },
  ],

  sortedSkills: computed('skills', 'sortKey', 'sortDirection', function() {
    const { sortKey, sortDirection } = this.getProperties('sortKey', 'sortDirection');
    return get(this, 'skills').sortBy(sortKey, sortDirection);
  }),
});

export default AboutController;
