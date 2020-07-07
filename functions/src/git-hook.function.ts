import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

const expTable = [20, 40, 100, 200, 350, 500, 700, 900, 1100, 1500];
const GET_EXP = 10;

export const gitHook = functions
  .region('asia-northeast1')
  .https.onRequest(async (request, response) => {
    const monsters = await db
      .collection('monsters')
      .where('ownerGithubId', '==', request.body.sender.id)
      .get();

    const monster = monsters.docs[0].data();

    let level = 1;
    expTable.some((nextExp) => {
      if (monster.exp + GET_EXP >= nextExp) {
        level++;
        return false;
      } else {
        return true;
      }
    });
    const increment = admin.firestore.FieldValue.increment(GET_EXP);
    monsters.docs.forEach((doc) =>
      doc.ref.update({
        exp: increment,
        level,
      })
    );
    response.send('success');
  });
