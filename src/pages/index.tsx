import type { NextPage } from 'next'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { NextImage } from '../components/Next/NextImage'
import { SubTitle } from '../components/Typography/SubTitle'
import { Title } from '../components/Typography/Title'
import { BannerSection, BannerSectionContainer, Container } from '../styles'

const Home: NextPage = () => {

  return (
    <Container>
      <BannerSection>
        <BannerSectionContainer>
          <Title
            content='Está cansado de tentar aprender inglês e nunca ter progresso?'
          />
          <SubTitle
            content=' Garanta sua vaga no English Week.'
          />
          <PrimaryButton
          title='Garantir minha vaga'
          onClick={() => {}}
          size='large'
          />
          </BannerSectionContainer>
      </BannerSection>
    </Container>
  )
}

export default Home
