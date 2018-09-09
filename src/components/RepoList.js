import React from "react";
import { Link } from "react-router-dom";

class RepoList extends React.Component {

  render() {
    return (
      <div className="info_container">
        {this.props.dataRepo

          .filter(filtro => {
            return filtro.name
              .toLowerCase()
              .includes(this.props.searchName.toLowerCase());
          })
          .filter(item => {
            return item.language.includes(this.props.language);
          })
          .map(data => {
            const url = "/Repo/:name";
            return (
              <div className="info_repo">
                <ul className="info_repo--ul">
                <Link className="card__link" to={url}>
                  <li className="info_repo--list">{data.name}</li>
                  </Link>
                  <p className="info_repo--description">{data.description}</p>
                  <p className="info_repo--language">
                  <i class={`fas fa-circle ${data.language}`} />{data.language}
                  </p>
                </ul>
              </div>
            );
          })}
      </div>
    );
  }
}

export default RepoList;
