import React,{useState} from 'react'
import firebase from "firebase/app";
function Reqtable({doc ,place,stock,stockdata}) {
const st={stockdata};
    const accept=(e)=>{
        e.preventDefault();
           let  group=doc.bloodgroup;
           let quantity=stockdata.[group];
           console.log(quantity);
          if (quantity<=0){
           return alert(`Not Enough Stock`)
          }
          else{
              if (`${quantity}` >= `${doc.units}`){
                let  result=(quantity)-parseInt(doc.units);
                firebase.firestore().collection('bloodreq').doc(doc.id).update({status:"Accepted"}).then(()=>{
                    
                        firebase.firestore().collection('notifications').add({ content: 'Has Accepted Request',
                        organization: place,requestername:`${doc.name}`,requesterID:`${doc.cnic}`,requestedunits:`${doc.units}`,requestedblood:`${doc.bloodgroup}`, createdAt: new Date()
                    }).then(
                        firebase.firestore().collection('stocks').doc(stock).update({[group]:result}).then(()=>{
                            return(alert(`Request Accepted and Stocks Updated`)
                             
                           )})
                      
                    )    
    
    
              })
              }
              else{
                  return alert("Not Enough Stock")
              }
         
          }
    }
    const reject=(e)=>{
        e.preventDefault();

        firebase.firestore().collection('bloodreq').doc(doc.id).update({status:"Rejected"}).then(()=>{
            return(alert(`Rejected Successfully`),
            firebase.firestore().collection('notifications').add({ content: 'Has Rejected Request Due To Shortage Of Stock',
            organization: `${place}`,requestername:`${doc.name}`,requesterID:`${doc.cnic}`,requestedunits:`${doc.units}`,requestedblood:`${doc.bloodgroup}`, createdAt: new Date()
        }).then(console.log('notification added'))
              
            )    })

    }
    const cancel=(e)=>{
        e.preventDefault();
        let  group=doc.bloodgroup;
        let quantity=stockdata.[group];
        let  result=(quantity)+parseInt(doc.units);
        firebase.firestore().collection('bloodreq').doc(doc.id).update({status:"Canceled"}).then(()=>{
           
            firebase.firestore().collection('notifications').add({ content: 'Has Canceled Due To Not Collecting On Time.',
            organization: `${place}`,requestername:`${doc.name}`,requesterID:`${doc.cnic}`,requestedunits:`${doc.units}`,requestedblood:`${doc.bloodgroup}`, createdAt: new Date()
        }).then(

            firebase.firestore().collection('stocks').doc(stock).update({[group]:result}).then(()=>{
                return(alert(`Request Canceled and Stocks Updated`)
                 
               )})
        )
              
               })


    }
    const collec=(e)=>{
        e.preventDefault();

        firebase.firestore().collection('bloodreq').doc(doc.id).update({status:"Collected"}).then(()=>{
            return(alert(`Collected Successfully`),
            firebase.firestore().collection('notifications').add({ content: 'Has Collected',
            organization: `${place}`,requestername:`${doc.name}`,requesterID:`${doc.cnic}`,requestedunits:`${doc.units}`,requestedblood:`${doc.bloodgroup}`, createdAt: new Date()
        }).then(console.log('notification added'))
              
            )    })

    }
            const link= (doc.status==="null")?
                 (  <td><button onClick={reject} className="label theme-bg2 text-white f-12">Reject</button>
                 <button onClick={accept} className="label theme-bg text-white f-12">Approve</button></td>
                 ): (doc.status==="Accepted")?
                 (  <td>
                                  <button onClick={cancel} className="label theme-bg2 text-white f-12">Cancel</button>
                 <button onClick={collec} className="label theme-bg text-white f-12">Collect</button>
                </td>
                 ):<td><p>{doc.status}</p></td>;
let blood="";
                 switch(doc.bloodgroup){
                     case "WBCAp":
                    blood="WBC A+"
                     break;
                     case "RBCAp":
                        blood="RBC A+"
                         break;
                         case "RBCBp":
                            blood="RBC B+"
                             break;
                             case "RBCOp":
                                blood="RBC O+"
                                 break;
                                 case "RBCAn":
                                    blood="RBC A-"
                                     break;
                                     case "RBCBN":
                                        blood="RBC B-"
                                         break;
                                         case "RBCABp":
                                            blood="RBC AB+"
                                             break;
                                             case "RBCABn":
                                                blood="RBC AB-"
                                                 break;
                                                 case "RBCOther":
                                                    blood="RBC Other"
                                                     break;
                                                     case "WBCAp":
                                                        blood="WBC A+"
                                                         break;
                                                         case "WBCBp":
                                                            blood="WBC B+"
                                                             break;
                                                             case "WBCOp":
                                                                blood="WBC O+"
                                                                 break;
                                                                 case "WBCABp":
                                                                    blood="WBC AB+"
                                                                     break;
                                                                     case "WBCAn":
                                                                        blood="WBC A-"
                                                                         break;
                                                                         case "WBCBn":
                                                                            blood="WBC Bn"
                                                                             break;
                                                                             case "WBCOn":
                                                                                blood="WBC O-"
                                                                                 break;
                                                                                 case "WBCABn":
                                                                                    blood="WBC AB-"
                                                                                     break;
                                                                                     case "WBCOther":
                                                                                        blood="WBC Other"
                                                                                         break;
                                                                                         case "Platelet":
                                                                                        blood="Platelets"
                                                                                         break;
                                                                                         case "Plasma":
                                                                                        blood="Plasma"
                                                                                         break;
                                                                                         case "Cryo":
                                                                                        blood="Cryo"
                                                                                         break;
                                                                                         default:
                                                                                             blood="null"
                                                                                             break;


                 }

    return (
        <>
             <tr className="unread">
                <td>
                <img style={{width:"40px"}} src="https://w0.pngwave.com/png/789/888/computer-icons-login-person-user-avatar-log-png-clip-art.png"
                 className="rounded-circle" alt="User Profile"/>
                </td>
                                        <td>
                        <h6 style={{textTransform:"capitalize"}} className="mb-1">Name:    {doc.name}  | CNIC:     {doc.cnic}</h6>
                        <p className="m-0">{blood} | {doc.units} Units | Day I want : {doc.needdate} | Status:{doc.status}</p>
                                        </td>
                                        <td>
                 <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>{doc.timee.toDate().toLocaleString()}</h6>
                                        </td>
             { link
                 }
                                    </tr> 
        </>
    )
}

  export default Reqtable;
