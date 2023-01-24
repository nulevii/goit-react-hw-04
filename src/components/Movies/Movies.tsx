import React from 'react'
import { Link } from 'react-router-dom'
import { Result } from '../../utilities/interfaces'
import styles from './style.module.css'
function Movies ({ filmsArr }: { filmsArr: Result[] }): JSX.Element {
  return (
    <section className={styles.filmsSection}>
      {filmsArr.map(({ original_title: originalTitle, poster_path: posterPath, id }) => (
      <Link className={styles.film} to={ `/movies/${id}` } key={id}>
        <img
          className={styles.filmImg}
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={originalTitle}
        />
        <h4 className={styles.filmTitle}>{originalTitle}</h4>
      </Link>
      ))}
    </section>
  )
}

export default Movies
