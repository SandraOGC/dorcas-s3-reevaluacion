import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="title_container">
        <h1>Repos at Adalab in GitHub</h1>
        <input
          type="text"
          name="s_repo"
          placeholder="Search"
          onKeyUp={this.props.inputSearch}
        />
        <select
          className="button_select"
          name="s_language"
          id="s_language"
          onChange={this.props.filterLanguage}
        >
          <option value="">Filtrar</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
        </select>
      </div>
    );
  }
}

export default Search;
