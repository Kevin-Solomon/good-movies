import { useState } from "react";
import "./styles.css";
const movies = [
  { name: "Tenet", rating: "5/5", genre: "action" },
  { name: "Extraction", rating: "5/5", genre: "action" },
  { name: "Anna", rating: "3.5/5", genre: "action" },
  { name: "Jumaji", rating: "4/5", genre: "comedy" },
  { name: "Tag", rating: "3.9/5", genre: "comedy" },
  { name: "Work It", rating: "4.5/5", genre: "comedy" },
  { name: "Shining", rating: "5/5", genre: "horror" },
  { name: "Annabelle", rating: "4/5", genre: "horror" },
  { name: "Oxygen", rating: "4.5/5", genre: "horror" }
];
export default function App() {
  const [movie, setMovies] = useState(movies);
  function clickHandler(movie, genre) {
    setMovies(movie.filter((movie) => movie.genre === genre));
  }
  return (
    <div className="App">
      <h1>🎥 gooodmovies</h1>
      <small>Checkout my favorite movies. Select a genre to get started</small>
      <br></br>
      <button
        onClick={() => clickHandler(movies, "action")}
        style={{
          padding: "0.5rem 1rem",
          margin: "1rem",
          borderRadius: "0.5rem",
          fontSize: "0.9rem"
        }}
      >
        Action
      </button>
      <button
        onClick={() => clickHandler(movies, "comedy")}
        style={{
          padding: "0.5rem 1rem",
          margin: "1rem",
          borderRadius: "0.5rem",
          fontSize: "0.9rem"
        }}
      >
        Comedy
      </button>
      <button
        onClick={() => clickHandler(movies, "horror")}
        style={{
          padding: "0.5rem 1rem",
          margin: "1rem",
          borderRadius: "0.5rem",
          fontSize: "0.9rem"
        }}
      >
        Horror
      </button>
      <hr></hr>
      <div>
        {movie.map((mov, idx) => (
          <span
            key={idx}
            style={{
              display: "block",
              textAlign: "left",
              maxWidth: "200px",
              margin: "1rem auto",
              border: "1px solid black",
              borderRadius: "1rem",
              padding: "1rem"
            }}
          >
            {mov.name}
            <div>
              <small
                style={{
                  display: "block",
                  textAlign: "left"
                }}
              >
                {mov.rating}
              </small>
            </div>
          </span>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-header">contact me</div>
        <ul className="social-links list-non-bullet ">
          <li className="list-item-inline">
            <a
              className="link"
              href="https://github.com/Kevin-Solomon"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/kevin-solomon-8b2b2b1a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://twitter.com/kevinsolomon777"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
