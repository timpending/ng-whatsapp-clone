import { Meteor } from 'meteor/meteor';
import { Parties } from '../imports/api/parties';


Meteor.startup(() => {
  if (Parties.find().count() === 0) {
    const parties = [{
      'name': 'Pants-Party',
      'description': 'Bricks Favorite'
    },{
      'name': 'Toga Party',
      'description': 'Friends, Romans, Countrymen, lend me your bedsheets'
    },{
      'name': 'Birthday Party',
      'description': 'Give me your cupcakes'
    }];

    parties.forEach((party) => {
      Parties.insert(party)
    });
  }
});
