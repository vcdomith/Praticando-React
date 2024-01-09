import Banner from '@/components/Banner/Banner'
import styles from './Player.module.css'
import Titulo from '@/components/Titulo/Titulo'
import videos from '@/json/db.json'
import { useParams } from 'react-router-dom'
import NaoEncontrada from '../NaoEncontrada/NaoEncontrada'
import { useEffect, useState } from 'react'

const Player = () => {

    const [video, setVideo] = useState()
    const [carregando, setCarregando] = useState(true)
    const parametros = useParams()

    useEffect(() => {

        const fetchData = async () => {

            try {
             
              const resposta = await fetch(`https://my-json-server.typicode.com/vcdomith/cinetag-api/videos?id=${parametros.id}`)
      
              const dados = await resposta.json()
        
              setVideo(...dados)
              setCarregando(false) 
              
            } catch (error) {
                
                console.error('Erro ao requisitar dados', error)
                setCarregando(false) 
                
            }
          }

          fetchData()
    }, [])

    if (carregando) return <p>Carregando seu vídeo...</p>

    if (!video) return <NaoEncontrada />

    return (
        <>
            <Banner
                imagem='player'
            />
            <Titulo>
                <h1>{parametros.id}</h1>
            </Titulo>
            <section className={styles.container}></section>
            <iframe
                width="100%"
                height="100%"
                src={video.link}
                title={video.titulo}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            >
            </iframe>
        </>
    )
}

export default Player