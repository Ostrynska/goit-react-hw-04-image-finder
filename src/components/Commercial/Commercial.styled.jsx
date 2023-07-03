import styled from 'styled-components';

import { AiFillHeart } from 'react-icons/ai';

export const Wrapper = styled.section`
  ${'' /* margin-top: 80px; */}
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 80px 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
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
