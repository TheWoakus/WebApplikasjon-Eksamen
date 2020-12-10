import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';

import { upload, download } from '../utils/imageService';
import { list, create } from '../utils/categoryService';
import { create as articleCreate } from '../utils/articleService';

import NewCategoryButton from './NewCategoryButton.jsx';
import NewCategoryModal from './NewCategoryModal.jsx';

const ArticleForm = () => {
  const [loaded, setLoaded] = useState(false);

  const [title, setTitle] = useState(null);
  const [ingress, setIngress] = useState(null);
  const [content, setContent] = useState(null);
  const [picture, setPicture] = useState(null);
  const [category, setCategory] = useState(null);
  const [role, setRole] = useState('user');
  const [author, setAuthor] = useState('Lars Larsen');

  const [categories, setCategories] = useState([]);

  const [error, setError] = useState(null);

  const alert = useAlert();
  const history = useHistory();

  useEffect(async () => {
    const { data } = await list();

    setCategories(data.data);
    setLoaded(true);
  }, []);

  const createCategory = async (inputCategory) => {
    const { data } = await create(inputCategory);
    if (!data.success) {
      setError('Kunne ikke opprette kategori');
    }

    setCategories([...categories, data.data]);
  };

  const addCategory = () => {
    console.log('Wat');
    // TBA
  };

  useEffect(() => {
    if (error) {
      alert.show(error, { type: 'error' });
      setError(null);
    }
  }, [error]);

  const onSubmit = async () => {
    event.preventDefault();

    const information = {
      title,
      ingress,
      content,
      picture,
      category,
      role,
      author,
    };

    if (
      information.title === null ||
      information.ingress === null ||
      information.content === null ||
      information.picture === null ||
      information.category === null ||
      information.role === null ||
      information.author === null
    ) {
      setError('Ikke alle felt er fylt ut');
      console.log(error);
      return;
    }

    if (!error) {
      let imageID = '';

      const { data } = await upload(picture);
      if (!data.success) {
        setError(data.message);
        return;
      }

      imageID = data.data._id;

      const imgData = await download(imageID);

      if (!imgData.data.success) {
        setError(imgData.data.message);
        return;
      }

      const articleDetails = {
        title,
        ingress,
        content,
        picture: imageID,
        category,
        role,
        author,
        imgSrc: imgData.data.data.imagePath,
      };

      const articleData = await articleCreate(articleDetails);
      if (!articleData.data.success) {
        setError(articleData.data.message);
        return;
      }

      history.push(`/article/${articleData.data.data._id}`);
    }
  };

  return (
    <>
      {loaded && (
        <div>
          <NewCategoryModal addCategory={createCategory} />
          <form onSubmit={onSubmit}>
            <fieldset>
              <label className="formLabel" htmlFor="title">
                Tittel
              </label>
              <input
                type="text"
                name="title"
                className="input"
                placeholder="Skriv en passende tittel"
                onChange={(e) => setTitle(e.target.value)}
              />

              <label className="formLabel" htmlFor="ingress">
                Ingress
              </label>
              <textarea
                name="ingress"
                cols="30"
                rows="5"
                className="input"
                placeholder="En liten ingress"
                onChange={(e) => setIngress(e.target.value)}
              ></textarea>

              <label className="formLabel" htmlFor="content">
                Innhold
              </label>
              <textarea
                name="content"
                cols="30"
                rows="5"
                className="input"
                placeholder="Fortell en historie"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>

              <label className="formLabel" htmlFor="category">
                Bilde
              </label>
              <input
                type="file"
                name="picture"
                className="input"
                onChange={(e) => setPicture(e.target.files[0])}
              />

              <label className="formLabel" htmlFor="category">
                Kategori
              </label>
              <select
                defaultValue="DEFAULT"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option className="default" value="DEFAULT" disabled>
                  Velg en kategori
                </option>
                {categories.map((categoryItem) => (
                  <option key={categoryItem._id} value={categoryItem._id}>
                    {categoryItem.name}
                  </option>
                ))}
              </select>

              <NewCategoryButton />

              <label className="formLabel" htmlFor="role">
                Klarering
              </label>
              <select onChange={(e) => setRole(e.target.value)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="super">Super</option>
              </select>
              <label className="formLabel" htmlFor="author">
                Forfatter
              </label>
              <select onChange={(e) => setAuthor(e.target.value)}>
                <option value="Lars Larsen">Lars Larsen</option>
                <option value="Gunn Gundersen">Gunn Gundersen</option>
                <option value="Simen Simensen">Simen Simensen</option>
              </select>

              <button type="submit" className="button centered big">
                Publiser
              </button>
            </fieldset>
          </form>
        </div>
      )}
    </>
  );
};

export default ArticleForm;
