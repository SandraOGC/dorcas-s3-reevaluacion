import React from "react";

class RepoList extends React.Component {
  render() {
    return (
      <div className="info_container">
        {this.props.dataRepo
        .map(data => {
          const detail = "/Detail/" + data.name;
          return (
            <div className="info_repo">
            <ul className="info_repo--ul">
            <li className="info_repo--list">{data.name}</li>
            <p className="info_repo--description">{data.description}</p>
            <p className="info_repo--language">{data.language}</p>
            </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RepoList;