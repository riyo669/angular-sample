import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

export const gitHook = functions
  .region('asia-northeast1')
  .https.onRequest(async (request, response) => {
    const monsters = await db
      .collection('monsters')
      .where('ownerGithubId', '==', request.body.sender.id)
      .get();

    const increment = admin.firestore.FieldValue.increment(10);
    monsters.docs.forEach((doc) =>
      doc.ref.update({
        exp: increment,
      })
    );
    response.send('success');
  });
