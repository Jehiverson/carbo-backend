const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp();
const db = getFirestore();

const getDataCollection = async (collectionRef) =>{

    var dataCollection = [];

    const dataRef = db.collection(collectionRef);

    const snapshot = await dataRef.get();
    if (snapshot.empty) {
    return dataCollection;
    }

    snapshot.forEach(doc => {
        dataCollection.push(doc.data());
    });

    return dataCollection;
};

const getDataCollectionForId = async (collectionRef, docRef) =>{

    const dataRef = db.collection(collectionRef).doc(docRef);
    const doc = await dataRef.get();
    if (!doc.exists) {
        return false;
    } else {
        return doc.data();
    }
};

const setDataCollection = async (collectionRef, documentRef, collectionJson) =>{
    const dataRef = db.collection(collectionRef);
    await dataRef.doc(documentRef).set(collectionJson);
    return true
};

const updateDataCollection = async(collectionRef, documentRef, collectionJson) =>{
    const dataRef = db.collection(collectionRef);
    await dataRef.doc(documentRef).update(collectionJson);
    return true;
};

const deleteDataCollection = async(collectionRef, documentRef) =>{
    await db.collection(collectionRef).doc(documentRef).delete();
    return true;
}

module.exports ={
    getDataCollection,
    getDataCollectionForId,
    setDataCollection,
    updateDataCollection,
    deleteDataCollection
}