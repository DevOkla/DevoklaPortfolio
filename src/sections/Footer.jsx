import React from "react";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Footer = (theme) => {
  return (
    <FooterConatiner>
      <Logo>
        <pre> &lt;/DevOkla&gt; </pre>
      </Logo>
      <Contact>
        <Link href="mailto:maamoun.okla@icloud.com">
          <FiMail /> maamoun.okla@icloud.com
        </Link>
        <Link>
          <HiOutlineLocationMarker /> Sweden
        </Link>
        <Link
          href="https://www.linkedin.com/in/maamoun-okla-283120235/"
          target="_blank"
        >
          <AiOutlineLinkedin /> Linkedin
        </Link>
        <Link href="https://github.com/DevOkla" target="_blank">
          <AiFillGithub /> Github
        </Link>
      </Contact>
      <CopyRight>Powered by &copy; DevOkla</CopyRight>
    </FooterConatiner>
  );
};
const FooterConatiner = styled.div`
  border-top: ${({ theme }) => theme.footerborder};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 0 1rem 0;
  background: ${({ theme }) => theme.footerBackground};
`;
const Logo = styled.div`
  font-size: 4rem;
  height: fit-content;

  background: ${({ theme }) => theme.logoBackground};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  -webkit-background-clip: text;
  background-clip: text;
  color: ${({ theme }) => theme.text};
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 2rem;
`;
const CopyRight = styled.h3`
  width: 95%;
  margin-top: 2rem;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  text-align: left;
  color: ${({ theme }) => theme.text};
`;

export default Footer;
