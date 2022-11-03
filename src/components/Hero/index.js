import React, {useState} from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItems, HeroH1,HeroP, HeroBtn, } from './HeroElements';

const Hero = ( ) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <HeroContainer>
            <Navbar toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroP>Let us feed your family tonight</HeroP>
                    <HeroH1><a href="tel:7152462633">(715)-246-2633</a> </HeroH1>
                    <HeroBtn onClick= {() => window.open("https://petespizzanr.hrpos.heartland.us/menu")}>Order Online!</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};



export default Hero;