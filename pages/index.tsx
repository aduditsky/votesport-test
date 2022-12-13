import Head from 'next/head';
import Image from 'next/image';

//Components
import { FooterComponent } from 'components/footer/footer.component';
import { HeaderComponent } from 'components/header/header.component';
import { MainComponent } from 'components/main/main.component';

// Styles
import { PageStyles } from 'styles/index.styles';

//Template Data
import { data } from 'data';

export default function Home() {
  return (
    <PageStyles>
      <Head>
        <title>VoteSport App</title>
        <meta name='description' content='Test task' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeaderComponent />
      <MainComponent fighter={data} />
      <FooterComponent />
    </PageStyles>
  );
}
