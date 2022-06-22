import type { NextPage } from 'next'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { NextImage } from '../components/Next/NextImage'
import { SubTitle } from '../components/Typography/SubTitle'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import { BannerSection, BannerSectionContainer, Container, ForWhomListContainer, ForWhomListItemContainer, ForWhomSection, ForWhomSectionContainer, ForWhomSectionContentContainer, ForWhomSectionImageContainer, IntroductionSection, IntroductionSectionContainer, IntroductionSectionContentContainer, IntroductionSectionImageContainer } from '../styles'
import { MdAirplanemodeActive, MdBook, MdOutlineEmojiEvents, MdOutlineTravelExplore, MdWork } from 'react-icons/md'

const Home: NextPage = () => {

  return (
    <Container>
      <BannerSection id='banner'>
        <BannerSectionContainer>
          <Title
            content='Está cansado de tentar aprender inglês e nunca ter progresso?'
          />
          <SubTitle
            content=' Garanta sua vaga no English Week.'
          />
          <PrimaryButton
            title='Garantir minha vaga'
            onClick={() => { }}
            size='large'
          />
        </BannerSectionContainer>
      </BannerSection>
      <IntroductionSection id='introduction'>
        <IntroductionSectionContainer>
          <IntroductionSectionContentContainer>
            <Title
              content='O que será o Enlgish Week?'
            />
            <Text
              content='O Enlgish Week será um dos mariores eventos gratuitos de ensino da língua inglesa. Aqui você irá realmente aprender inglês de uma vez por todas.'
            />
            <Text
              content='O evento ocorrerá entre os dias 04 e 08 de julho contando com muito conteúdo de alta qualidade e totalmente gratuito.'
            />
            <Text
              content='Um jeito fácil de ensinar para destravar de uma vez por todas seu aprendizado em inglês. Vamos juntos dar um passo em direção à sua fluência!'
            />
          </IntroductionSectionContentContainer>
          <IntroductionSectionImageContainer>
            <NextImage
              height={480}
              width={320}
              imgUrl='/statue.png'
            />
          </IntroductionSectionImageContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <ForWhomSection id='forwhom'>
        <ForWhomSectionContainer>
          <ForWhomSectionImageContainer>
            <NextImage
              height={400}
              width={560}
              imgUrl='/flag.png'
            />
          </ForWhomSectionImageContainer>
          <ForWhomSectionContentContainer>
            <Title
              content='Para quem é o English Week?'
            />
            <ForWhomListContainer>
              <ForWhomListItemContainer>
              <MdOutlineEmojiEvents
                  className='forWhoListIcon'
                />
                <Text
                  content='Para quem já tentou 43587 maneiras de aprender inglês sem sucesso e deseja finalmente aprender inglês.'
                />
              </ForWhomListItemContainer>
              <ForWhomListItemContainer>
                <MdBook
                  className='forWhoListIcon'
                />
                <Text
                  content='Para quem tem interesse em aprender um novo idioma.'
                />
              </ForWhomListItemContainer>
              <ForWhomListItemContainer>
                 <MdWork
                  className='forWhoListIcon'
                />
                <Text
                  content='Para quem precisa do inglês para trabalhar. Se você deseja novas oportunidades, o English Week é para você!'
                />
              </ForWhomListItemContainer>
              <ForWhomListItemContainer>
                 <MdAirplanemodeActive
                  className='forWhoListIcon'
                />
                <Text
                  content='Para quem deseja viajar e conhecer o mundo.'
                />
              </ForWhomListItemContainer>
            </ForWhomListContainer>
          </ForWhomSectionContentContainer>

        </ForWhomSectionContainer>
      </ForWhomSection>
    </Container>
  )
}

export default Home
