import React from 'react';

class Search extends React.Component {
	search(event) {
		let keyword = event.target.value;
		this.props.search(keyword);
	}

	render() {
		return (
			<input
				type="text"
				className="searchbox"
				placeholder="Enter title, address, phone number or location to search for.."
				onChange={(e) => this.search(e)}
			/>
		);
	}
}
export default Search;
