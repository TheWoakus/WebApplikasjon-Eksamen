import React from 'react';
import PropTypes from 'prop-types';

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

Search.propTypes = {
  search: PropTypes.func,
};
export default Search;
