import React from "react";
import { Link } from "react-router-dom";

class Repo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="moreInfo">
            <div className="info_repo">
            <ul className="info_repo--ul">
              <li className="info_repo--list">{this.props.dataRepo.name}</li>
              <p className="info_repo--description">{this.props.dataRepo.description}</p>
              <p className="info_repo--language">
              <i className={`fas fa-circle ${this.props.dataRepo.language}`} />{this.props.dataRepo.language}</p>
              <p><i className="fas fa-star"></i>{this.props.dataRepo.stargazers_count}</p>
              <p><i className="fas fa-eye"></i>{this.props.dataRepo.watchers_count}</p>
              <p><i className="fas fa-code-branch"></i>{this.props.dataRepo.forks_count}</p>
            </ul>
          </div>
        </div>
        <Link className="" to="/">
            <p className="">Return</p>
          </Link>
      </React.Fragment>
    );
  }
}

export default Repo;
