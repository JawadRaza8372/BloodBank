export const createDonor=(project)=>{
    return (dispatch,getstate,{ getFirestore })=>{
        const firestore = getFirestore();
    firestore.collection('clientsdata').add({
      ...project,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT' ,projectn:project});
    }).catch(err => {
      dispatch({ type: 'ERROR_FOUND' , err});
    });
  }
};
export const updatest=(idd,txt)=>{
  return (dispatch,getstate,{ getFirestore })=>{
      const firestore = getFirestore();
  firestore.collection('bloodreq').id(idd).update({
status:txt
  }).then(()=>{
    console.log(`hyyyy ${txt}`);
  })
}
};
export const createHistory=(project)=>{
  return (dispatch,getstate,{ getFirestore })=>{
      const firestore = getFirestore();
  firestore.collection('clientshistory').add({
    ...project,
    createdAt: new Date()
  }).then(() => {
    dispatch({ type: 'CREATE_history' ,projectn:project});
  }).catch(err => {
    dispatch({ type: 'ERROR_FOUND' , err});
  });
}
};