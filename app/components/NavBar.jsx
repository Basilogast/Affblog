"use client";

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            <Image src="/assets/img/logonhen.png" alt="Logo" width={60} height={60} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['home', 'about', 'work', 'testimonial'].map((link) => (
              <Nav.Link 
                href={`#${link}`} 
                className={activeLink === link ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink(link)} 
                key={link}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hungcaoduy/"><Image src="/assets/img/nav-icon1.svg" alt="LinkedIn" width={30} height={30} /></a>
              <a href="https://www.facebook.com/caoduyhung.nguyen/"><Image src="/assets/img/nav-icon2.svg" alt="Facebook" width={30} height={30} /></a>
              <a href="https://github.com/Basilogast"><Image src="/assets/img/nav-icon3.svg" alt="GitHub" width={30} height={30} /></a>
            </div>
            <Link href="#connect" passHref>
              <button className="vvd"><span>Let’s Connect</span></button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
