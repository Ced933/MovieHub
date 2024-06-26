import React from 'react';
import './HeaderMovie.scss'
import { Link } from 'react-router-dom';


export default function HeaderMovie({headMovie}) {
  console.log(headMovie)
  return (
    <div>
         <header className='header' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${headMovie.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat:'no-repeat' }}>       
       </header>
       <div className='content'>
       </div>

       <div className='header-details'>
        <h1>{headMovie.title}</h1>
        <p className='header-movie-p'>{headMovie.overview}</p>
        <Link to={`/profil/${headMovie.id}`}>More details</Link> 
       </div>
    </div>
  )
}
