import Banner from '@/components/Banner/Banner'
import styles from './Favoritos.module.css'
import Titulo from '@/components/Titulo/Titulo'
import Card from '@/components/Card/Card'
import { useFavoritoContext } from '@/contextos/Favoritos'

const Favoritos = () => {

  const { favorito } = useFavoritoContext()

  return (
    <>

      <Banner 
        imagem='favoritos'
      />
      <Titulo>
         <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map( fav => {
          return <Card {...fav} key={fav.id} />


        })}
      </section>
      
    </>
  )
}

export default Favoritos