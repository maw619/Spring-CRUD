import logo from './logo.svg';
import React from 'react';

class App extends React.Component{

state = {
  clients:[]
}

componentDidMount(){
  fetch('/clients')
  .then(res => res.json())
  .then(data =>{
    this.setState({clients:data});
  })
}

  render(){
    const {clients} = this.state
    return (
      <div>
        <h3>Name</h3>
          {clients.map((data) =>(
           <div key={data.id}>
              <p>{data.name}</p>
           </div>
          ))}
      </div>
      )
  }
}

export default App;
