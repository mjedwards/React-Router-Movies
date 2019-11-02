import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [movies, setMovies] = useState();
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Route exact path='/' render={props => <MovieList {...props} />} />
      <Route
        path='/movies/:id'
        render={props => <Movie movie={props.movie} {...props} />}
      />
      <SavedList list={savedList} />
    </div>
  );
};

export default App;
