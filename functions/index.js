const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});

exports.projectCreated = functions.firestore
  .document('stocks/stockId}')
  .Update(doc => {

    const project = doc.data();
    const notification = {
      content: 'Updated Stocks Check Out Now',
      user: `${project.hospital}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the Pro-Blood Family',
          user: `${newUser.firstname} ${newUser.lastname}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
});