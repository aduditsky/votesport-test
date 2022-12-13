import { Container, HeaderStyles, Logo, Navigation } from './header.styles';

export const HeaderComponent = () => {
  return (
    <HeaderStyles>
      <Container>
        <Logo>
          <img src='/logo.png' alt='logo' />
        </Logo>
        <Navigation>
          <a href='#'>ММА</a>
          <a href='#'>Календарь событий</a>
          <a href='#'>Рейтинги</a>
        </Navigation>
      </Container>
    </HeaderStyles>
  );
};
