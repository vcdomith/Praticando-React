import Banner from '@/components/Banner/Banner'
import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Card from '@/components/Card/Card'
import Rodape from '@/components/Rodape/Rodape'
import Titulo from '@/components/Titulo/Titulo'
import '@/pages/Inicio/Inicio.module.css'
import styles from './Inicio.module.css'
import { useEffect, useState } from 'react'


const Inicio = () => {

  const [videos, setVideos] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      try {
       
        const resposta = await fetch('https://my-json-server.typicode.com/vcdomith/cinetag-api/videos')

        const dados = await resposta.json()
  
        setVideos(dados) 
        
      } catch (error) {

        console.error('Erro ao requisitar dados', error)

      }
    }

    fetchData()
  }, [])

  return (
    <>
    <Banner imagem='home' />
    <Titulo >
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
    </Titulo >
    <section className={styles.container}>
        {videos.map((video) => {
            return <Card 
                {...video} 
                key={video.id}
            />
        })}
    </section>
    </>
  )
}

export default Inicio