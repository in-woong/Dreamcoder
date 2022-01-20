import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';
class CardRepository {
  constructor() {
    this.db = getDatabase();
  }

  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }

  syncCard(userId, onUpdate) {
    const starCountRef = ref(this.db, `${userId}/cards`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off(starCountRef);
  }

  removeCard(userId, card) {
    console.log('remove');
    const cardRef = ref(this.db, `${userId}/cards/${card.id}`);
    remove(cardRef);
  }
}
export default CardRepository;
