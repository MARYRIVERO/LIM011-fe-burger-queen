import firebase from 'firebase/app';

export const enviarOrden = (nombre, mesa, producto, estado, totalp, fecha,) => 
firebase
.firestore()
.collection('Orden')
.add({
 nombre,
 mesa,
 producto,
 fecha,
 estado,
 totalp,
})
;