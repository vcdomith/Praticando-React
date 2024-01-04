import Banner from '@/components/Banner/Banner'
import styles from './Favoritos.module.css'
import Titulo from '@/components/Titulo/Titulo'
import videos from '@/json/db.json'
import Card from '@/components/Card/Card'

const Favoritos = () => {

  return (
    <>
      <Banner 
        imagem='favoritos'
      />
      <Titulo>
         <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map( video => {
          return <Card 
            {...video}
            key={video.id}
          />
        })}
      </section>
      
    </>
  )
}

export default Favoritos