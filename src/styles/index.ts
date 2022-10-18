import styled from 'styled-components';
// eslint-disable-next-line
import {motion} from 'framer-motion';

export const Main = styled.main`
    .first{
        background: red;
        //hidden possibilita que o elemento vá aparecendo a medida que o scroll seja utilizado
        overflow: hidden;
        .offset{
            height: 100%;
            width: 100%;
        }
        .a{
            background: #f5f1ea;
            height: 100%;
            display: flex;
            align-items: flex-end;

            .left-side {
                width: 60%;
                height: 100%;
                background: #7dbb91;
            }
            .right-side{
                width: 40%;
                height: 100%;
                
                .right-image{
                    background: #7dbb91;
                    height: 100%;
                    width: 100%;
                }
            }
        }
        .b{
            background: #582534;
            height: 100%;
            width: 100%;
        }
        .c{
            background: #0a7397;
            height: 100%;
            width: 100%;
        }
        
    }
    .second{
        background: green;
    }

    .third{
        background: yellow;
    }

    .fourth{
        background: blue;
    }



`
export const Section = styled.section`
    position: relative;

` 

export const Sticky = styled(motion.div)`
    position:sticky;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
`

