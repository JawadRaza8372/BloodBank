import React from 'react'
import moment from "moment";
function Notify({doc}) {
    return (
        <>
             <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src="https://w0.pngwave.com/png/789/888/computer-icons-login-person-user-avatar-log-png-clip-art.png" alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p><strong style={{textTransform:"capitalize",fontSize:"15px"}}>{doc.user}</strong><span className="n-time text-muted"><i
                                                    className="icon feather icon-clock m-r-10"/>{moment(doc.createdAt.toDate()).fromNow()}</span></p>
                                                <p> {doc.content}</p>
                                            </div>
                                        </div>
                                    </li>
        </>
    )
}

export default Notify
