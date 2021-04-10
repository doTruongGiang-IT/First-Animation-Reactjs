import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import PlanetOne from '../images/jupiter.svg';
import PlanetTwo from '../images/neptune.svg';
import PlanetThree from '../images/planet.svg';

const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131313;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3px calc((100vw - 1300px)/2);

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 2rem;

    h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;

const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
    cursor: pointer;
`;

const ColumnRight = styled.div`
    display: flex;
    justify: center;
    align-items: center;
    position: relative;
    padding: 2rem;

    ${Image}:nth-child(1) {
        top: 10px;
        left: 10px;
    }

    ${Image}:nth-child(2) {
        top: 170px;
        right: 0;
    }

    ${Image}:nth-child(3) {
        bottom: 10px;
        left: 150px;
    }
`;

const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    background: transparent;
    color: #fff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
`;

const Planets = () => {
    const fadeLeft = {
        hidden: {opacity: 0, x: -100},
        visible: {opacity: 1, x: 0}
    };

    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                        Welcome to space
                    </motion.h1>
                    <motion.p variants={fadeLeft} initial='hidden' animate='visible' transition={{duration: 1}}>
                        Journey to the "Knowhere"
                    </motion.p>
                    <Button initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.5}}} whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95, backgroundColor: '#67F6E7', border: 'none', color: '#000'}}>
                        Get started
                    </Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={PlanetOne} alt='planet1' whileTap={{scale: 0.95}} drag={true} 
                            dragConstraints={{left: 0, right: 250, top: 0, bottom: 80}}
                            initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0, transition: {duration: 1}}} />
                    <Image src={PlanetTwo} alt='planet2' whileTap={{scale: 0.95}} drag={true} 
                            dragConstraints={{left: 120, right: 0, top: 0, bottom: 100}}
                            initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0, transition: {duration: 1}}} />
                    <Image src={PlanetThree} alt='planet3' whileTap={{scale: 0.95}} drag={true} 
                            dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                            initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0, transition: {duration: 1}}} />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Planets;
