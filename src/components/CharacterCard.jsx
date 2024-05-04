import { useState } from "react"

export const CharacterCard = ({ name, image, status, specie, location,liked=false }) => {
  const [ favorites,setFavorites ] = useState(liked)
  function handleClick(){
    setFavorites(!favorites)
  }
  const styleHeart = favorites?'fill-grayMain stroke-redHeart visible':'invisible scale-0'
  let circle
  if (status == 'Dead') {
    circle = 'bg-red-500'
  } else if (status == 'Alive') {
    circle = 'bg-green-500'
  } else circle = 'bg-gray-200'
  return (
    <article className="group/item relative flex flex-col bg-grayMain text-white mx-auto rounded-md overflow-hidden shadow-2xl">
      <div className="w-full overflow-hidden h-60">
        <img loading="lazy" width='auto' height='200px' src={image} alt={name} />
      </div>
      <div className="p-2 flex flex-col flex-1">
        <h2 className="text-2xl font-medium">{name}</h2>
        <span className="font-light text-grayText">Last known location:</span>
        <span className="text-lg">{location}</span>
        <div className="flex gap-2 items-center mt-auto">
          <span className={`h-3 w-3 ${circle} rounded-full`}></span>
          <span>{status} - {specie}</span>
        </div>
      </div>
      <svg onClick={handleClick} className={`${styleHeart} hover:fill-grayMain stroke-grayMain group/edit group-hover/item:scale-100 group-hover/item:visible w-10 h-10 absolute top-0 left-0 transition m-1`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>

    </article>
  )
}
