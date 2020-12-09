import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import NewCategoryButton from './NewCategoryButton.jsx';
import NewCategoryModal from './NewCategoryModal.jsx';

class ArticleForm extends React.Component {
  constructor() {
    super();

    this.addCategory = this.addCategory.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeIngress = this.onChangeIngress.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);

    this.state = {
      author: 'Lars Larsen',
      role: 'user',
      categories: '',
    };
  }

  addCategory(categoryDetails) {
    const categories = { ...this.state.categories };
    const timestamp = Date.now();
    categories[`category-${timestamp}`] = categoryDetails;
    this.setState({ categories });
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeIngress(event) {
    this.setState({ ingress: event.target.value });
  }

  onChangeContent(event) {
    this.setState({ content: event.target.value });
  }

  onChangePicture(event) {
    this.setState({ picture: event.target.value });
  }

  onChangeCategory(event) {
    this.setState({ category: event.target.value });
  }

  onChangeRole(event) {
    this.setState({ role: event.target.value });
  }

  onChangeAuthor(event) {
    this.setState({ author: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const articleDetails = {
      title: this.title.value,
      ingress: this.ingress.value,
      content: this.content.value,
      picture: this.picture.value,
      category: this.category.value,
      role: this.state.role,
      author: this.state.author,
    };

    axios
      .post(
        `${process.env.BASE_URL}${process.env.API_VERSION}/nyartikkel`,
        articleDetails
      )
      .then((res) => {
        console.log(res.data);
        this.articleForm.reset();
        this.props.history.push(`/article/${res.data._id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const allChoices = Object.values(this.state.categories).map((data) => (
      <option
        key={new Date()}
        ref={(input) => (this.category = input)}
        name="category"
        defaultValue={data.title}
      >
        {data.title}
      </option>
    ));

    return (
      <>
        <NewCategoryModal addCategory={this.addCategory} />
        <form
          ref={(input) => (this.articleForm = input)}
          onSubmit={(event) => this.onSubmit(event)}
        >
          <fieldset>
            <label className="formLabel" htmlFor="title">
              Tittel&#58;
              <span id="title_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <input
              ref={(input) => (this.title = input)}
              type="text"
              name="title"
              className="input"
              placeholder="Skriv en passende tittel"
              onChange={this.onChangeTitle}
            />

            <label className="formLabel" htmlFor="ingress">
              Ingress&#58;
              <span id="ingress_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <textarea
              ref={(input) => (this.ingress = input)}
              name="ingress"
              cols="30"
              rows="5"
              className="input"
              placeholder="En liten ingress"
              onChange={this.onChangeIngress}
            ></textarea>

            <label className="formLabel" htmlFor="content">
              Innhold&#58;
              <span id="content_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <textarea
              ref={(input) => (this.content = input)}
              name="content"
              cols="30"
              rows="5"
              className="input"
              placeholder="Fortell en historie"
              onChange={this.onChangeContent}
            ></textarea>

            <label className="formLabel" htmlFor="category">
              Bilde&#58;
              <span id="category_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <input
              ref={(input) => (this.picture = input)}
              type="file"
              name="picture"
              className="input"
              onChange={this.onChangePicture}
            />

            <label className="formLabel" htmlFor="category">
              Kategori&#58;
              <span id="category_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <select defaultValue="DEFAULT">
              <option className="default" value="DEFAULT" disabled>
                Velg en kategori
              </option>
              {allChoices}
              {this.props.articles &&
                this.props.articles.map((article) => (
                  <option>{article.category}</option>
                ))}
            </select>

            <NewCategoryButton />

            <label className="formLabel" htmlFor="role">
              Klarering&#58;
              <span id="role_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <select onChange={this.onChangeRole} defaultValue={this.state.role}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="super">Super</option>
            </select>
            <label className="formLabel" htmlFor="author">
              Forfatter&#58;
              <span id="author_error">OBS!! Sjekk at denne er riktig</span>
            </label>
            <select
              onChange={this.onChangeAuthor}
              defaultValue={this.state.author}
            >
              <option value="Lars Larsen">Lars Larsen</option>
              <option value="Gunn Gundersen">Gunn Gundersen</option>
              <option value="Simen Simensen">Simen Simensen</option>
            </select>

            <button type="submit" className="button centered big">
              Publiser
            </button>
          </fieldset>
        </form>
      </>
    );
  }
}

ArticleForm.propTypes = {
  history: PropTypes.object.isRequired,
  articles: PropTypes.array,
};
export default withRouter(ArticleForm);
