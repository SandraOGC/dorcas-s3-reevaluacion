import React, { Component } from "react";
import "./App.css";
import Repo from "./components/Repo";
import RepoList from "./components/RepoList";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRepo: []
    };
    this.getRepo = this.getRepo.bind(this);
  }

        
  getRepo() {
  fetch("https://api.github.com/orgs/Adalab/repos")
  .then(data => {
    
    return data.json();
  })
  .then(dataJson => {
    console.log(dataJson);
    this.setState({
      dataRepo: dataJson
    })
  })
}

componentDidMount(){
  this.getRepo();
}

  render() {
    return (
      <div className="App">
        <h1>Repos at Adalab in GitHub</h1>
        <input></input>
        <select name="" id="">
        <option value="Css">Css</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
        </select>
        <RepoList dataRepo = {this.state.dataRepo}/>
        <Repo/>
        <Search/>
      <div>

      </div>

      </div>
    );
  }
}

export default App;
