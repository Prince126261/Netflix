import './Player.css'
import icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const { id } = useParams()
  const [apiData, setApiData] = useState({
    name: '',
    published_at: '',
    typeof: '',
    key: ""
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTExYWEzZDBmMzEzMzUzNjBiMmY4NTQyNjc0YmUxNyIsIm5iZiI6MTc1MzE4NjQ0My4yMDEsInN1YiI6IjY4N2Y4MDhiZWU2M2YyZGExMTE2YTc5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gYCdmALmx_ra3B7IPDaTEpKk3Ju7KRiV0EwCHYPXWZQ'
    }
  };
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => { setApiData(res.results[0]) })
      .catch(err => console.error(err));
  }, []);

  
  return (
    <div className='player'>
      <img src={icon} alt="" onClick={() => navigate(-2)} />
      <iframe width="1905" height="782" title='Trailer' frameBorder='0' allowFullScreen={true} src={`https://youtube.com/embed/${apiData.key}`}></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player