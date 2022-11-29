import s from './Main.module.css'
import Graph from './Graph/Graph'
import React from 'react'

const Main = () => {

  return(
      <div className={s.container}>
          <Graph/>
      </div>
  )
}

export default Main