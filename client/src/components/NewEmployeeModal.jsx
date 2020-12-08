import React from 'react';

class NewEmployeeModal extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.clickListener();
  }

  closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

  clickListener() {
    const modal = document.getElementById('modal');
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }

  createEmployee(event) {
    event.preventDefault();
    const employeeDetails = {
      title: this.title.value,
    };
    this.props.addEmployee(employeeDetails);
    this.employeeform.reset();
    {
      this.closeModal();
    }
  }

  render() {
    return (
      <>
        <section id="modal">
          <section id="modalContent">
            <h2 className="callout">
              Ny ansatt
              <span
                id="close"
                role="button"
                tabIndex="0"
                onClick={this.closeModal}
                onKeyPress={this.closeModal}
              >
                &times;
              </span>
            </h2>

            <form
              ref={(input) => (this.employeeform = input)}
              onSubmit={(e) => this.createEmployee(e)}
            >
              <fieldset>
                <section id="fieldset">
                  <section className="field">
                    <label className="formLabel" htmlFor="newTodoTitle">
                      Fornavn&#58;
                      <span id="category_error">
                        OBS!! Sjekk at denne er riktig
                      </span>
                    </label>
                    <input
                      ref={(input) => (this.title = input)}
                      type="text"
                      name="lastname"
                      id="firstname"
                      className="input"
                      placeholder="Fornavn"
                      required
                    />

                    <label className="formLabel" htmlFor="newTodoTitle">
                      Etternavn&#58;
                      <span id="category_error">
                        OBS!! Sjekk at denne er riktig
                      </span>
                    </label>
                    <input
                      ref={(input) => (this.title = input)}
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="input"
                      placeholder="Etternavn"
                      required
                    />

                    <label className="formLabel" htmlFor="newTodoTitle">
                      Stilling&#58;
                      <span id="category_error">
                        OBS!! Sjekk at denne er riktig
                      </span>
                    </label>
                    <input
                      ref={(input) => (this.title = input)}
                      type="text"
                      name="position"
                      id="position"
                      className="input"
                      placeholder="Stilling"
                      required
                    />

                    <label className="formLabel" htmlFor="category">
                      Bilde&#58;
                      <span id="category_error">
                        OBS!! Sjekk at denne er riktig
                      </span>
                    </label>
                    <input
                      ref={(input) => (this.picture = input)}
                      type="file"
                      name="picture"
                      className="input"
                      onChange={this.onChangePicture}
                    />
                  </section>
                  <button
                    type="submit"
                    className="button centered big block"
                    onSubmit={(e) => this.createCategory(e)}
                  >
                    Create
                  </button>
                </section>
              </fieldset>
            </form>
          </section>
        </section>
      </>
    );
  }
}

export default NewEmployeeModal;
