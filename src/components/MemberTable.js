import React from "react";


//this component is a function that creates the table that houses the api data and allows us to delete or update member levels via functions
export default function MemberTable({members, deleteMember, updateLevel, handleUpdatedLevel}) {
    return (  
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Membership Level</th>
                    <th>Delete Member</th>
                    <th>Update Member Level</th>
                </tr>
            </thead>
            <tbody>
                {members.map((member, index) => (
                    <tr key={index}>
                        <td>{member.name}</td>
                        <td>{member.membershipLevel}</td>
                        <td>
                            <button onClick={() => deleteMember(member.id)}>Delete</button>
                        </td>
                        <td>
                            <input onChange={(e) => handleUpdatedLevel(e.target.value)} placeholder="New Membership Level" />
                            <button onClick={(e) => updateLevel(member)}>Update</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}