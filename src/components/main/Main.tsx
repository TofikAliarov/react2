import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmprtyMain } from "./emptyMain/EmptyMain";
import { FilmsMain } from "./filmsMain/FilmsMain";
import styles from "./Main.module.css";

export const Main = () => {
  const [films, setFilms] = useState([]);
  const [title, setTitle] = useState("");
  const filmsList = useSelector((state: any) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setFilms(filmsList.Search);
  }, [filmsList]);

  async function onSomeButtonClicked(evt) {
    evt.preventDefault();
    await dispatch({ type: "GET_FILMS", title });
  }
  return (
    <div>
      <div className={styles.head}>
        <h2 className={styles.title}>Search your favourite films</h2>
        <form onSubmit={onSomeButtonClicked}>
          <input
            className={styles.input}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          <button className={styles.button}>Search</button>
        </form>
      </div>
      {films.length < 1 ? <EmprtyMain /> : <FilmsMain />}
    </div>
  );
};
