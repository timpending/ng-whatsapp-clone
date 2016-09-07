Meteor.startup(() => {
  if (Groups.find().count() === 0) {
    const groups = [{
      'group_id': '500',
      'group_name': 'gCrew',
    },{
      'group_id': '500',
      'group_name': 'Night Shift',
    }];

    groups.forEach((group) => {
      Groups.insert(group)
    });
  }
});
