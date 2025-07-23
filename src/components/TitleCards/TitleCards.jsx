import "./TitleCards.css";
import card_data from "../../assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTExYWEzZDBmMzEzMzUzNjBiMmY4NTQyNjc0YmUxNyIsIm5iZiI6MTc1MzE4NjQ0My4yMDEsInN1YiI6IjY4N2Y4MDhiZWU2M2YyZGExMTE2YTc5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gYCdmALmx_ra3B7IPDaTEpKk3Ju7KRiV0EwCHYPXWZQ'
    }
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
      scrollBehavior: "smooth";
    });
    // Fetching data from the API if category is provided
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} key={index} className="card">
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.title} />
              <h3>{card.original_title}</h3>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default TitleCards