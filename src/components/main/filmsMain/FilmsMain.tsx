import React from 'react'
import {useState, useEffect} from 'react'

import { FilmsItem } from './filmsItem/FilmsItem'
import styles from "./FilmsMain.module.css"
import { useSelector} from "react-redux";



export const FilmsMain =()=>{
const [films, setFilms] = useState <any[]>([])
const filmsList = useSelector((state:any) => state.Search)

useEffect(() => {
    setFilms(filmsList)
}, [filmsList])

 function sortByYear() {
    const sorted = [...films].sort((a, b) => a.Year - b.Year);

    setFilms(sorted);
  }

 

    return(
        <div>
        <button className={styles.button} onClick={sortByYear}>sort by year</button>
<div className={styles.filmList}>
        
            {films.map(el=> (
                
                
            <FilmsItem film={el} key={el.imdbID}/>))}
     </div>   
    </div>)
}