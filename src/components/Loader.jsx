import { Html,useProgress } from '@react-three/drei'

const Loader = () => {
    const progress = useProgress(); 
  return (
   
        <Html className='text-3xl text-white font-mono font-normal 
        text-center z-80'>
            {progress}% Loading...
        </Html>
   
  )
}

export default Loader
