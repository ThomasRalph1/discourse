import computed from 'ember-addons/ember-computed-decorators';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  queryParams: ['category_id'],

  @computed('model.is_group_user')
  showGroupMessages(isGroupUser) {
    return isGroupUser || (this.currentUser && this.currentUser.admin);
  }
});
