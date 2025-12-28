import Loader from '../components/Loader'
import HeroText from './HeroText'
import ParallaxBackgrounds from './parallaxBackgrounds'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { Astronaut } from '../components/Astronaut'
import { useMediaQuery } from 'react-responsive'
import { easing } from 'maath'
import { Suspense } from 'react'


const Hero = () => {
 const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className='flex items-start justify-center md:items-start
    md:justify-start min-h-screen overflow-hidden 
      bg-midnight '>
      <HeroText />
      <ParallaxBackgrounds />
      <figure className='absolute inset-0 z-50  '
        style={{
          width: '100vw',height: '100vh',
        }}
      >
        
        <Canvas camera={{position:[0,1,3]}}>
          <Suspense fallback={<Loader/>}>
            <Astronaut
           scale={isMobile ? 1:1.45} 
           position={isMobile ?[0,-1.2,0]:[1.4,-1.2,0]} 
           

          />
           <Rig />
          </Suspense>
          
        </Canvas>
      </figure>
    </section> 
  )
};

function Rig(){
  return useFrame((state,delta)=>{
    easing.damp3(
     state.camera.position,
     [state.mouse.x/10,1+state.mouse.y/10,3],
     0.5,
     delta
    );
  });
}

export default Hero
