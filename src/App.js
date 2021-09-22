import { useState } from "react";
import "./styles.css";
const movies = [
  {
    name: "Tenet",
    description:
      "The film follows a secret agent who learns to manipulate the flow of time to prevent an attack from the future that threatens to annihilate the present world.",
    rating: "5/5",
    genre: "action"
  },
  {
    name: "Extraction",
    description:
      "The film is about an Australian black ops mercenary whose mission to rescue an Indian drug lords kidnapped son in Dhaka",
    rating: "5/5",
    genre: "action"
  },
  {
    name: "Anna",
    description:
      "a young Russian beauty who has been the victim of domestic abuse, will do anything to escape the life she is trapped in",
    rating: "3.5/5",
    genre: "action"
  },
  {
    name: "Jumaji",
    description:
      "The story focuses on a group of teenagers who come across Jumanji—now transformed into a video game—twenty-one years after the events of the 1995 film.",
    rating: "4/5",
    genre: "comedy"
  },
  {
    name: "Tag",
    description:
      "The film is based on a true story that was published in The Wall Street Journal about a group of grown men",
    rating: "3.9/5",
    genre: "comedy"
  },
  {
    name: "Work It",
    description:
      'Quinn discovers a former champion of the "Work It" competition, Jake Taylor, who stopped competing after a knee injury two years prior. Quinn approaches him at the dance studio where he now works and asks him to be a choreographer for her team.',
    rating: "4.5/5",
    genre: "comedy"
  },
  {
    name: "Shining",
    description:
      "The Shining is set in Colorado in the 1970s. It centres on the Torrance family: husband Jack, wife Wendy, and their five-year-old son, Danny. ",
    rating: "5/5",
    genre: "horror"
  },
  {
    name: "Annabelle",
    description:
      "The film was inspired by a story of a doll named Annabelle told by Ed and Lorraine Warren.",
    rating: "4/5",
    genre: "horror"
  },
  {
    name: "Oxygen",
    description:
      "A woman awakens in an airtight medical cryogenic unit, and discovers that she is trapped and that the units oxygen levels are falling rapidly. ",
    rating: "4.5/5",
    genre: "horror"
  }
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
              <div>{mov.description}</div>
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
