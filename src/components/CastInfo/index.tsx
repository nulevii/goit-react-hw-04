import React from 'react'
import { Cast } from '../../utilities/interfaces'
import style from './style.module.css'
function CastInfo ({ cast }: { cast: Cast[] | null }): JSX.Element {
  if (cast === null || cast === undefined) {
    return <div>Cast not found.</div>
  }

  return (
    <section className={style.castSection}>
      {cast.map(({ id, name, profile_path: profilePath }) => {
        const profileImg = (profilePath === null)
          ? 'https://assets.mycast.io/actor_images/actor-an-unknown-actor-465215_large.jpg?1656098263'
          : `https://image.tmdb.org/t/p/w500/${profilePath as string}`
        return (<article className={style.castCard} key={id}>
          <img
            className={style.castImg}
            src={ profileImg}
            alt={name}
          />
          <h4>{name}</h4>
        </article>)
      })}

    </section>
  )
}

export default CastInfo
