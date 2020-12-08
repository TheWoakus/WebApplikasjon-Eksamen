import React from 'react';

class NewCategoryButton extends React.Component {
  showCategoryModal() {
    const modal = this.document.getElementById('modal');
    modal.style.display = 'block';
  }

  render() {
    return (
      <button
        id="newCategory"
        className="button space"
        type="button"
        onClick={this.showCategoryModal}
      >
        Ny
      </button>
    );
  }
}

export default NewCategoryButton;
