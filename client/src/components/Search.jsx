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
        placeholder="Søk etter firma basert på geografisk lokasjon.."
        onChange={(e) => this.search(e)}
      />
    );
  }
}
export default Search;
