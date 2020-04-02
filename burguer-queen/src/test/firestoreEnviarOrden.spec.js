import { enviarOrden } from '../Components/compo.js';
jest.mock('../firebase/firebaseconfig.js');

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

describe.only('Componente Mesero', () => {  
  it('debería ser una función', () => {
    expect(typeof enviarOrden).toBe('function');
  });
  // it('Deberia poder guardar la orden', (done) => enviarOrden(nombre, mesa, producto, estado, totalp).then((data) => {
  //   expect(data.nombre).toBe('Mary');
  //   done();
  // }));
});
