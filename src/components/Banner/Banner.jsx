import styles from '@/components/Banner/Banner.module.css'


// eslint-disable-next-line react/prop-types
const Banner = ({ imagem }) => {
  return (
    <div 
        className={styles.capa}
        style={{ backgroundImage: `url('/images/banner-${imagem}.png')`}}
    >   
    </div>
  )
}

export default Banner