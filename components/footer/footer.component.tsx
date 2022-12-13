import {
  Container,
  Credentials,
  FooterStyles,
  Navigations,
  Socials,
} from './footer.styles';

export const FooterComponent = () => {
  return (
    <FooterStyles>
      <Container>
        <Credentials>
          <span>© 2021 Vote Sport</span>
          <span>Разработка — Веб Секрет</span>
        </Credentials>
        <Navigations>
          <a href='#'>О нас</a>
          <a href='#'>Правила платформы</a>
          <a href='#'>Помощь</a>
          <a href='#'>Вакансии</a>
        </Navigations>
        <Socials>
          <div className='icons-holder'>
            <a href='#'>
              <img src='/images/svg/bitcoin.svg' alt='bitcoin' />
            </a>
            <a href='#'>
              <img src='/images/svg/visa.svg' alt='visa' />
            </a>
            <a href='#'>
              <img src='/images/svg/mastercard.svg' alt='mastercard' />
            </a>
            <a href='#'>
              <img src='/images/svg/mir.svg' alt='mir' />
            </a>
          </div>
          <div className='separator' />
          <div className='icons-holder'>
            <a href='#'>
              <img src='/images/svg/youtube.svg' alt='youtube' />
            </a>
            <a href='#'>
              <img src='/images/svg/instagram.svg' alt='instagram' />
            </a>
            <a href='#'>
              <img src='/images/svg/telegram.svg' alt='telegram' />
            </a>
          </div>
        </Socials>
      </Container>
    </FooterStyles>
  );
};
