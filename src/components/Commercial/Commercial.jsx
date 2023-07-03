import { Container } from '../Container/Container';

import {
  Wrapper,
  CommercialWrap,
  IconWrap,
  Icon,
  Title,
  Text,
} from './Commercial.styled';

export const Commercial = () => {
  return (
    <Wrapper>
      <Container>
        <CommercialWrap>
          <IconWrap>
            <Icon />
          </IconWrap>
          <div>
            <Title>Free media you can use anywhere</Title>
            <Text>
              Pixelstock is a vibrant community of creatives, sharing
              royalty-free images. All content is released by Pixelstock under
              the Content License, which makes it safe to use without asking for
              permission or giving credit to the artist - even for certain
              commercial purposes.
            </Text>
          </div>
        </CommercialWrap>
      </Container>
    </Wrapper>
  );
};
