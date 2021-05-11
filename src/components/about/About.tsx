import React from 'react'
import styles from "./About.module.css"

export const About =()=>{


    return(
        <div>
        <h2 className={styles.title}>This page about team</h2>
        <p className={styles.text}>Sometime there will be a huge text about team and how all of this thinks was doing but now there will be some cute images:)</p>
        <div className={styles.imgBlock}>
<img className={styles.img} src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9" alt="kitty" />
<img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmx7h5rxh1VBkAWUUc02XwLYapa9HzRmJZAg&usqp=CAU" alt="kitty" />
<img className={styles.img} src="https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg" alt="kitty" />
<img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tL7NZVRgEIdjmK7kCg-HuLq5EOMERO0Pyw&usqp=CAU" alt="kitty" />
<img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Pia31MHkdochSVtOiP2P_k8rjBPtGl0Uvg&usqp=CAU" alt="kitty" />
<img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9ACbd1faXc9bncXW49rWIptOY6Ls2pobZA&usqp=CAU" alt="kitty" />


        </div>
    </div>)
}