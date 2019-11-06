import React, { useState, useEffect } from "react";
import axios from "axios";

const Movie = props => {
  const [film, setMovie] = useState();
  useEffect(() => {
    const id = parseInt(props.match.params.id, 10);
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    const getMovie = () => {
      axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          // console.log(film);
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getMovie();
  }, [parseInt(props.match.params.id, 10)]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie);
  // };

  if (!film) {
    return <div>Loading movie information...</div>;
  } else if (film) {
    console.log(film);
    return <MovieDetail key={film.id} film={film} />;
  }
};

function MovieDetail({ film }) {
  const { title, director, metascore, stars, id } = film;

  console.log(stars);
  return (
    <div className='save-wrapper'>
      <div className='movie-card'>
        <h2>{title}</h2>
        <div className='movie-director'>
          Director: <em>{director}</em>
        </div>
        <div className='movie-metascore'>
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        <div>
          {stars.map(star => (
            <div key={star} className='movie-star'>
              {star}
            </div>
          ))}
        </div>
      </div>
      <div className='save-button'>Save</div>
    </div>
  );
}

export default Movie;
