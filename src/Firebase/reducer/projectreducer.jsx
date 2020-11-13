const initialState={
    projects:[
        {id:"1",title:"aaja",description:"chal oy"},
        {id:"2",title:"aaja2",description:"chal oy2"},
        {id:"3",title:"aaja3",description:"chal oy3"},
        {id:"4",title:"aaja4",description:"chal oy4"}



    ]
};
const projectreducer=(state=initialState,action)=>{
    switch (action.type){
        case "CREATE_PROJECT":
console.log("project creatd ",action.projectn);
return state;
case "CREATE_history":
    console.log("project creatd ",action.projectn);
    return state;
case "ERROR_FOUND":
    console.log("Error found ",action.err);
    return state;
    default:
        return state;
    }
};
export default projectreducer;