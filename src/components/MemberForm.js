import React from "react";


//This component is a function that handles the form on screen and the functions that add values to name and membership level
export default function MemberForm({addMember, handleName, handleMembershipLevel}) {
    return (
        <form className="member-form"onSubmit={addMember}>
            <h4>Add New Member:</h4>
            <label>Name: </label>
            <input onChange={(e) => handleName(e.target.value)} />
            <label>  Membership Level: </label>
            <input onChange={(e) => handleMembershipLevel(e.target.value)}/>
            <button>Submit</button>
        </form>
    )
}