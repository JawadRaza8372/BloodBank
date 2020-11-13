import React from 'react'

function Tdjunior({doc}) {
    return (
        <>
          <tr>
           <td>{doc.hospital}</td>
        <td>{doc.createdAt.toDate().toDateString()}</td>
        <td>{doc.createdAt.toDate().toLocaleTimeString()}</td>
    </tr>  
        </>
    )
}

export default Tdjunior;
