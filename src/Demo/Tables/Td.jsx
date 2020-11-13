import React from 'react'

function Td({doc}) {
    return (
        
       
        <tr>
        <td>{doc.id}</td> 
        <td>{doc.name}</td>
        <td>{doc.email}</td>
        <td>{doc.contact}</td>
        <td>{doc.gender}</td>
        <td>{doc.ethnicity}</td>
        <td>{doc.dob}</td>
        <td>{doc.bloodgroup}</td>
        <td>{doc.cnic}</td>
        <td>{doc.createdAt.toDate().toDateString()}</td>

    </tr>
    )
}

export default Td;
