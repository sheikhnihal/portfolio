import { motion } from  'framer-motion';

import { styles  } from '../styles';
import { ComputersCanvas } from './canvas';
import ParticleContainer from './ParticleContainer';

import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from 'react-fade-in';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl mx-auto flex 
      flex-row items-start gap-5`}>
        <div className="flex flex-col 
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#019afa]"/>
            <div className="w-1 sm:h-80 h-45 
            blue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white z-10`}
          >Hi, I'm <span 
          className='text-[#019afa]'>Nihal</span></h1>
          <p className={`${styles.heroSubText} mt-2 
          text-white-100 z-10`}>
            Computer Engineer from Pune University.<br className="sm:block hidden"/>
            <span>
              <TypeAnimation sequence={[
                'Full-Stack Developer',
                2000,
                'Cloud Engineer',
                2000,
                'DevOps Engineer',
                2000,
              ]}
                speed={50}
                className='text-[#019afa]'
                wrapper='span'
                repeat={Infinity}
              />
            </span> 
          </p>
        </div>
      </div>
        <ParticleContainer />
        <ComputersCanvas />

    </section>
  )
}

export default Hero