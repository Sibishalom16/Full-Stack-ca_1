import React from 'react';
import Card from './components/TeamMemberCard';
import './App.css';
import './index.css'


const teamMembers=[
  {id:1, memberName:'John Doe', job:'Full stack Developer'},
  {id:2,memberName:'John Doe', job:'Full stack Developer'},
  {id:3,memberName:'John Doe', job:'Full stack Developer'},
  {id:4,memberName:'John Doe', job:'Full stack Developer'},
]

function App(){
  return(
  <div className="app">
    <h1>Team Members Card</h1>
    <div className="card-container">
      {teamMembers.map(card=>(
        <Card key={card.id}  membername={card.memberName} job={card.job}/>
      ))}

    </div>
  </div>
  )
}

export default App;
