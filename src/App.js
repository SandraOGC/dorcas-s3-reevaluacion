import React, { Component } from "react";
import "./App.css";
import Repo from "./components/Repo";
import RepoList from "./components/RepoList";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreinfo: [],
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
        this.setState({
          moreinfo: dataJson
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
                moreinfo={this.state.moreinfo}
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
              if (this.state.moreinfo.length !== 0) {
                return (
                  <Repo match={props.match} moreinfo={this.state.moreinfo} />
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
