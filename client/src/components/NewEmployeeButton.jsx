import React from 'react';

class NewEmployeeButton extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  showEmployeeModal() {
    // eslint-disable-next-line no-undef
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }

  render() {
    return (
      <button
        id="newEmployee"
        className="button space"
        type="button"
        onClick={this.showEmployeeModal}
      >
        Ny
      </button>
    );
  }
}

export default NewEmployeeButton;
