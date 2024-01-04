/* eslint-disable react/prop-types */
import styles from './Titulo.module.css'

const Titulo = ({ children }) => {

  return (
    <>
        {children

            ? <div 
                className={styles.texto}
            >
                {children}
            </div>

            : null
        }
    </>
  )
}

export default Titulo