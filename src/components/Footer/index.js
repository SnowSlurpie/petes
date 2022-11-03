import React from 'react';
import {FaFacebook,} from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, Hours  } from './footerElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <Hours>
              <p>Wednesday 3:30pm-7:30pm </p>
              <p>Thursday 3:30pm - 7:30pm</p>
              <p>Friday: 3pm - 8pm</p>
              <p>Saturday: 3pm - 8pm</p>
              <p>Sunday: 3pm - 7pm</p>
              <p>Monday & Tuesday: CLOSED</p>
            </Hours>
            <SocialLogo> &copy;Pete's Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/petespizzanewrichmond' target='_blank' aria-label='Facebook'> 
                <FaFacebook />
                <p>Like us on Facebook!</p>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;