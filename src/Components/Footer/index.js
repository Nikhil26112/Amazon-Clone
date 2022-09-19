import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,

} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer id="footer">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems onClick={toggleHome}>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                                <FooterLink to='/'>How it works</FooterLink>
                                <FooterLink to='/'>Testimonials</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                                <FooterLink to='/'>Investors</FooterLink>
                                <FooterLink to='/'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems onClick={toggleHome}>
                            <FooterLinkTitle>Contact US</FooterLinkTitle>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Support</FooterLink>
                                <FooterLink to='/'>Destination</FooterLink>
                                <FooterLink to='/'>Sponsorship</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems onClick={toggleHome}>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to='/'>Submit Videos</FooterLink>
                                <FooterLink to='/'>Ambassadors</FooterLink>
                                <FooterLink to='/'>Agency</FooterLink>
                                <FooterLink to='/'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems onClick={toggleHome}>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Amazon</SocialLogo>
                        <WebsiteRights>Amazon © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink to="/" target="_blank" area-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink to="/" target="_blank" area-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="//https://www.youtube.com/channel/UCyKnEiBp1yyhErfwY8BMbcg" target="_blank" area-label="Youtube"><FaYoutube /></SocialIconLink>
                            <SocialIconLink to="/" target="_blank" area-label="Twitter"><FaTwitter /></SocialIconLink>
                            <SocialIconLink to="/" target="_blank" area-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
