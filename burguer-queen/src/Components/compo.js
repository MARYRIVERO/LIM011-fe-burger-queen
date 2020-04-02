import firebase from '../firebase/firebaseconfig';

export const enviarOrden = (nombre, mesa, producto, estado, totalp, fecha, ) =>
    firebase
    .firestore()
    .collection('users')
    .add({
        nombre,
        mesa,
        producto,
        fecha,
        estado,
        totalp,
    });