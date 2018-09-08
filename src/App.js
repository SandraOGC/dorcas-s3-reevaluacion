import React, { Component } from "react";
import "./App.css";
import Repo from "./components/Repo";
import RepoList from "./components/RepoList";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRepo: [],
      language: "",
      searchName: ""
    };
    this.getRepo = this.getRepo.bind(this);
    this.filterLanguage = this.filterLanguage.bind(this);
    this.inputSearch = this.inputSearch.bind(this);
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
        });
      });
  }
  inputSearch = (e) => {
    // alert("hola");
    const iSearch = e.currentTarget.value;
    this.setState({
      searchName: iSearch
    });
  }

  filterLanguage(e) {
    const resultado = e.currentTarget.value;
    this.setState({
      language: resultado
    });
  }

  componentDidMount() {
    this.getRepo();
  }

  render() {
    return (
      <div className="App">
        <h1>Repos at Adalab in GitHub</h1>
        <input type="text" name="s_repo" onKeyUp={this.inputSearch} />
        <select className="button_select"
          name="s_language"
          id="s_language"
          onChange={this.filterLanguage}
        >
          <option value="">Filtrar</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
        </select>
        <RepoList
          dataRepo={this.state.dataRepo}
          filterLanguage={this.state.filterLanguage}
          language={this.state.language}
          inputSearch={this.inputSearch}
          searchName={this.state.searchName}
        />
        <Repo />
        <Search />
        <div />
      </div>
    );
  }
}

export default App;
