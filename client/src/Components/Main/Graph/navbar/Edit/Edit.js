import s from './Edit.module.css'
import Elements from './Elements/Elements'

const Edit = () => {
  return(
      <div className={s.container}>
          <div className={s.title}>
              <h4>Список узлов:</h4>
          </div>
          <div className={s.elements}></div>
      </div>
  )
}

export default Edit