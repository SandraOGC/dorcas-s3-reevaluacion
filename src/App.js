import React, { Component } from "react";
import "./App.css";
import Repo from "./components/Repo";
import RepoList from "./components/RepoList";
// import Search from "./components/Search";
import { Route, Switch } from "react-router-dom";

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
  inputSearch = e => {
    const iSearch = e.currentTarget.value;
    this.setState({
      searchName: iSearch
    });
  };

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

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <RepoList
                dataRepo={this.state.dataRepo}
                filterLanguage={this.state.filterLanguage}
                language={this.state.language}
                inputSearch={this.inputSearch}
                searchName={this.state.searchName}
              />
            )}
          />
          <Route
            path="/Repo/:id"
            render={props => {
              if (this.state.dataRepo.length !== 0) {
                return (
                  <Repo
                    match={props.match.params.name}
                    dataRepo={this.state.dataRepo}
                  />
                );
              } else {
                return <p>No more info</p>;
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
