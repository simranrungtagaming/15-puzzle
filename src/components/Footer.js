import React from 'react';
import styled from 'styled-components';

const FooterContent = styled.div`
  flex:none;
  background-color: rgb(232, 232, 232);
  color: rgb(0, 0, 0);
  padding-top: 10px;
  text-align: center;

  & .footerheart {
    color: #D4726A;
  }

  & .footerlink {
    text-decoration: none;
    color: #226666;
  }
`;

const Footer = () => (
  <FooterContent>
    <p>
      Made with{' '}
      <span className="footerheart">♥</span>
      {' '}by{' '}
      <a
        className="footerlink"
        rel="noopener noreferrer"
        target="_blank"
      >
        {' '}Simran Rungta
      </a>
    </p>
  </FooterContent>
);

export default Footer;
