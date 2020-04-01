import MockFirebase from 'mock-cloud-firestore';
import {enviarOrden} from '../Components/compo.js';

const fixtureData = {
  __collection__: {
    orden: {
        post001: {
          contenido: 'probando mocks',
          tipo: 'publico',
          name: 'mariangel mora',
        },
      },
    },
  }

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


const nombre = {
  name: 'Mary',
};

const mesa = {
    mesas: '1',
  };

const producto = {
  producto: 'Cafe',
  precio: '5',
  url: 'mi imagen de prueba',
}

  
const estado = {
    status: 'pendiente'
}

const totalp = {
 total: 5
}

describe('enviarOrden', () => {
  it('debería ser una función', () => {
    expect(typeof enviarOrden).toBe('function');
  });
  // it('Debería poder enviar data a firestore', done => enviarOrden(nombre, mesa, producto, estado, totalp).then((data) => {
  //   expect(data.contenido.contenido).toBe('jn');
  //   done();
  // }));
});