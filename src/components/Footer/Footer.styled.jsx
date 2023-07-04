import styled from 'styled-components';

import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

export const Facebook = styled(FaFacebook)``;
export const Youtube = styled(FaYoutube)``;
export const Twitter = styled(FaTwitter)``;
export const Instagram = styled(FaInstagram)``;

export const FooterWrap = styled.footer`
  margin-top: 122px;
`;

export const Wrapper = styled.div`
  border-top: 1px solid #eaeaea;
  display: flex;
  align-items: flex-end;
  gap: 108px;
  padding: 20px 0;
`;

export const FooterNav = styled.div`
  display: flex;
  min-width: 208px;
  flex-direction: column;
`;

export const Logo = styled.a`
  font-family: 'Ysabeau SC', sans-serif;
  font-weight: 600;
  font-size: 30px;
  color: #000;
`;

export const FooterSocial = styled.div`
  margin-top: 35px;
  display: flex;

  margin-top: 50px;
  p {
    margin-right: 10px;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 15px;
    li {
      height: 16px;
      width: 14px;
      transition: color 0.15s ease-in-out;

      &:hover {
        color: #00ab6b;
      }
    }
  }
`;

export const Copyright = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Icon = styled(AiFillHeart)`
  color: #00ab6b;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 40px;
  background: rgba(0, 171, 107, 0.1);
`;

export const CommercialWrap = styled.div`
  display: flex;
  gap: 24px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  padding: 0 0 16px;
`;

export const Text = styled.p`
  color: #656f79;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;
