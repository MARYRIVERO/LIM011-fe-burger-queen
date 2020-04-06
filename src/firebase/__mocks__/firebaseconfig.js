
import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
    __collection__: {
    users: {
    __doc__: {
    user_a: {
    age: 15,
    username: 'user_a',
    }
    }
    }
    }
    };
  
 const firebase= new MockFirebase(fixtureData);

  export default firebase;