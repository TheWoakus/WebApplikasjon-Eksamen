import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class GenerateDbContent extends React.Component {
  constructor() {
    super();
    this.populateDB = this.populateDB.bind(this);
  }

  componentDidMount() {
    this.populateDB();
  }

  populateDB() {
    axios
      .post(
        `${process.env.BASE_URL}${process.env.API_VERSION}/${this.props.department},
			${this.props.listOfItems}`
      )
      .then((res) => {
        console.log(res.data);
        this.articleForm.reset();
        this.props.history.push(`/${this.props.department}`);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line no-undef
    window.location.reload(true); // i know.. deprecated.. but it still works for this task..
  }
}

GenerateDbContent.propTypes = {
  department: PropTypes.string.isRequired,
  listOfItems: PropTypes.array.isRequired,
};
export default GenerateDbContent;
