import MockFirebase from 'mock-cloud-firestore';
import {enviarOrden} from '../Components/compo.js';

const fixtureData= {
  __collection__: {
    orden: {
      post001: {
        estado: 'pendiente',
        fecha: 'hoy',
        mesa: '1',
        nombre: 'Mary',
        producto: {
          cantidad: '1',
          id: '02',
          precio: '5',
          producto: 'cafe',
          url: 'imagen',
          }
      },
    },
  },
}

global.firebase= new MockFirebase(fixtureData, {
  isNaiveSnapshotListenerEnabled: true
});


const nombre= {
  name: 'Mary',
};

const mesa= {
  mesas: '1',
};

const producto= {
  producto: 'Cafe',
  precio: '5',
  url: 'mi imagen de prueba',
}


const estado= {
  status: 'pendiente'
}

const totalp= {
  total: 5
}

describe('Componente Mesero', () => {  
  it('debería ser una función', () => {
    expect(typeof enviarOrden).toBe('function');
  });
  it('Deberia poder crear un nuevo usuario', (done) => enviarOrden(nombre, mesa, producto, estado, totalp).then((data) => {
    expect(data.nombre).toBe('Mary');
    done();
  }));
});
