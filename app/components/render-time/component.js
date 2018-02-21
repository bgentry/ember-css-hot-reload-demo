import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  time: computed(function() {
    let now = new Date();
    return now.toJSON();
  })
});
