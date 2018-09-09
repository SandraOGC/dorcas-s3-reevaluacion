import React from "react";
import { Link } from "react-router-dom";

class Repo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="moreInfo">
        {this.props.dataRepo
        .map(data => {

          return (
            <div className="info_repo">
            <ul className="info_repo--ul">
              <li className="info_repo--list">{data.name}</li>
              <p className="info_repo--description">{data.description}</p>
              <p className="info_repo--language">
              <i class={`fas fa-circle ${data.language}`} />{data.language}
              </p>
            </ul>
          </div>
          )
        })}
        </div>
        <Link className="" to="/">
            <p className="">Return</p>
          </Link>
      </React.Fragment>
    );
  }
}

export default Repo;
