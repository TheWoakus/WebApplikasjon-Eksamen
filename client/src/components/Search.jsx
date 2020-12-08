import React from 'react';

class Search extends React.Component {
  search(event) {
    const keyword = event.target.value;
    this.props.search(keyword);
  }

  render() {
    return (
      <input
        type="text"
        className="searchbox"
        placeholder="Søk etter firmanavn, adresse, telefon eller lokasjon.."
        onChange={(e) => this.search(e)}
      />
    );
  }
}
export default Search;
