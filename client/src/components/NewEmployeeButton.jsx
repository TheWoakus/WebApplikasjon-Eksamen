import React from 'react';

class NewEmployeeButton extends React.Component {
  showEmployeeModal() {
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
