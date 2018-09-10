import React from "react";
import { Link } from "react-router-dom";

class Repo extends React.Component {

  render() {

    const data = this.props.moreinfo[this.props.match.params.id];
    console.log(data);
    return (
      <React.Fragment>
        <div className="moreInfo">
            <div className="info_repo">
            <ul className="info_repo--ul">
              <li className="info_repo--list">{data.name}</li>
              <p className="info_repo--description">{}</p>
              <p className="info_repo--language">
              <i className={`fas fa-circle `} />{}</p>
              <p><i className="fas fa-star"></i>{}</p>
              <p><i className="fas fa-eye"></i>{}</p>
              <p><i className="fas fa-code-branch"></i>{}</p>
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
