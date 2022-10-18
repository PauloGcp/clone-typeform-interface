import { motion, useScroll, useTransform,  } from 'framer-motion';
import { ReactNode } from 'react';
import { Sticky } from '../../styles';

interface FirstAndSecondProps {
  children: ReactNode;
}

export function FirstAndSecond({ children }: FirstAndSecondProps) {
  //pega o progresso do scroll
  const {scrollYProgress} = useScroll()
  
  //entre 19.6% do scroll e 19.8%:
  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0,1])
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8])
  return (
    <Sticky className="second">
      <First/>
      <motion.div style={{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        height:'100vh',
        borderRadius:'4px',
        border: '4px solid #fff',
        opacity:frameOpacity,
        scale:frameScale
      }}/>
    </Sticky>

  );
}

const First: React.FC = () =>{
  const {scrollYProgress} = useScroll()

  const firstScale = useTransform(scrollYProgress, 
    //entre 19% e 26%, o quadro vai diminuir do seu tamanho total para metade de seu valor,
    //de 55% até 67% do scroll, o quadro vai voltar ao tamanho origial
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  )

  const firstRadius = useTransform(scrollYProgress, 
    [0.198, 0.264, 0.558, 0.627],
    [0, 15, 15, 0]
  )

  const lefSideHeight = useTransform(scrollYProgress, 
    [0, 0.058],
    ['20vh', '100vh']
  )

  const rightSideScale = useTransform(scrollYProgress, 
    [0.047, 0.093],
    [0, 0.5]
  )

  const rightSideY = useTransform(scrollYProgress, 
    [0.047, 0.093],
    ['58vh', '0vh']
  )

  const offSetY = useTransform(scrollYProgress, 
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%']
  )

  return(
    <Sticky 
      className='first'
      style={{
        scale: firstScale,
        borderRadius:firstRadius
      }}>
      <motion.div className='offset' style={{
        y: offSetY
      }}>
        <div className="a">
          <motion.div
            className='left-side'
            style={{
              height: lefSideHeight,
            }}  
          />
          <div className="right-side">
            <motion.div 
              className='right-image'
              style={{
                y: rightSideY,
                scale: rightSideScale
              }}
            />
          </div>
        </div>
        <div className="b"></div>
        <div className="c"></div>
      </motion.div>
    </Sticky>
  )
}
