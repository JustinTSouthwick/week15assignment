import './App.css';
import { useState, useEffect } from 'react';
import MemberForm from './components/MemberForm';
import MemberTable from './components/MemberTable';

function App() {
  const API_URL = 'https://6496f73e83d4c69925a3490b.mockapi.io/member';

  const [members, setMembers] = useState([{
    name: '',
    membershipLevel: ''
  },]);

  const [newMember, setNewMember] = useState({
    name: '',
    membershipLevel: ''
  });

  const [updatedLevel, setUpdatedLevel] = useState('')

  function handleUpdatedLevel(updatedLevelValue) {
    setUpdatedLevel(updatedLevelValue)
  }

  function handleName(value) {
    setNewMember({
      ...newMember,
      name: value
    })
  };

  function handleMembershipLevel(value) {
    setNewMember({
      ...newMember,
      membershipLevel: value
    })
  };

  useEffect(() => {
    fetch(API_URL)
    .then((data) => data.json())
    .then((data) => setMembers(data))
  }, [])

  const getMembers = () => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => setMembers(data))
  };

  const addMember = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newMember)
    }).then (() => getMembers())
  };

  const deleteMember = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    }).then (() => getMembers())
  };

  const updateLevel = (member) => {
    let updatedMember = member;
    updatedMember.membershipLevel = updatedLevel;
    
    fetch(`${API_URL}/${member.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedMember)
    }).then (() => getMembers())
  };

  //returning a div with the member form and table to be viewed and interacted with 
  return( 
    <div>
      <MemberForm
        addMember={addMember} 
        handleName={handleName} 
        handleMembershipLevel={handleMembershipLevel}
      />
      <MemberTable
        handleUpdatedLevel={handleUpdatedLevel}
        updateLevel={updateLevel} 
        deleteMember={deleteMember}
        members={members}
      />
    </div>
  )
}

export default App;
