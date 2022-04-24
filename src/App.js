import './App.css';
import React from 'react';
import high from './images/personalPic.jpg'



class App extends React.Component  {
  
  constructor(props){
    super(props);
    this.state={
      fullName: "Dennoun Jawad",
      bio: "@J.Dennoun",
      imgSrc: high,
      profession: "freelanceDeveloper",
      shows: false
    }
  };
  
  
  

  render() {
    return (
      <>
        
          {this.state.shows ? 
            <span> {this.state.fullName} <br />{this.state.bio} <br /> {this.state.profession} <br /> <img src={this.state.imgSrc} alt="pic" /> </span> 
            : 
            <span>Click to See the profile info</span>
            }
          <br />
          <label className="switch">
            <input type="checkbox"  onChange={() => this.setState({ shows : !this.state.shows })} />
            <span className="slider"/>
          </label>   
      </>
    );
  }
}


export default App;
