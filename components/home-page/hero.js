import Image from 'next/image'
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src="/images/site/harrie.jpg" 
          alt="An image showing Timi" 
          width={300} 
          height={300}
        />
      </div>
      <h1>Hi, I'm Timi</h1>
      <p>I blog about web development - especially about frameworks like Ruby on rails or React.</p>
    </section>
  )
}

export default Hero;