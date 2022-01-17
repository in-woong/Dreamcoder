import { getDatabase, ref, set, remove } from 'firebase/database';
class CardRepository {
  constructor() {
  }

  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}`), {
      1: userId,
      2: card,
    });
  }

  removeCard(userId, card) {
    console.log("remove")
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/cards/${card.id}`);
    remove(cardRef);
  }
  // get(child(this.dbRef, `users/${userId}`)).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log('No data available');
  //     }
  //   })
  //   .catch((error) => console.error(error));
}
export default CardRepository;
