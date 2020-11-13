import React,{useState} from 'react'
import {Row, Col, Card, Table, Button} from 'react-bootstrap';
function Buttons({doc}) {
    const [state, setstate] = useState(0);
    const count=0;
    // if(doc.status !==`null`){
    //     setstate(count+1);
    // }
    return (
        <>
            <Card>
                            <Card.Body>
                                <h4 className='mb-4'>Requests{doc.status}</h4>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h4 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-droplet text-c-red f-50 m-r-5"/>  Responded |{state}  
                                        <i className="feather icon-droplet text-c-red f-50 m-r-5"/> Panding  |O-</h4>
                                    </div>                              
                                </div>
                            </Card.Body>
                        </Card>
        </>
    )
}

export default Buttons
