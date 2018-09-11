import React from "react";
import { Link } from "react-router-dom";


class Repo extends React.Component {
  getInfo() {
    const data = this.props.dataRepo;
    //hago un for para indicar la posicion en data para usar la posicion (indice). con maps recorre todo el array
    for (let i = 0; i < data.length; i++) {
      if (parseInt(this.props.match.params.id) === data[i].id) {
        return (
          <div>
            <li className="info_repo--list">{data[i].name}</li>
            <p className="info_repo--description">{data[i].description}</p>
            <p className="info_repo--language">
              <i className={`fas fa-circle ${data[i].language}`} />
              {data[i].language}
            </p>
            <div className="info-repo--icons">
            <p>
              <i className="fas fa-star" /> {data[i].stargazers_count}
            </p>
            <p>
              <i className="fas fa-eye" /> {data[i].watchers_count}
            </p>
            <p>
              <i className="fas fa-code-branch" /> {data[i].forks_count}
            </p>
            </div>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="moreInfo">
          <div className="info_repo">
            <ul className="info_repo--ul">{this.getInfo()}</ul>
          </div>
        </div>
        <Link className="text-return" to="/">
          <p>Return</p>
        </Link>
      </React.Fragment>
    );
  }
}

export default Repo;
