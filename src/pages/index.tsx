import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import {
  MdAirplanemodeActive,
  MdBook,
  MdOutlineEmojiEvents,
  MdWork
 } from 'react-icons/md'

import {
  BannerSection,
  BannerSectionContainer,
  Container,
  ForWhomListContainer,
  ForWhomListItemContainer,
  ForWhomSection,
  ForWhomSectionContainer,
  ForWhomSectionContentContainer,
  ForWhomSectionImageContainer,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionImageContainer,
  SubscribeSectionContainer,
  SubscribeSection,
  TimerContainer,
  TimerItemContainer,
  TimerNumberContainer
} from '../styles'

import { RevealFade } from '../components/Animations/RevealFade'
import { RevealZoom } from '../components/Animations/RevealZoom'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { NextImage } from '../components/Next/NextImage'
import { SubTitle } from '../components/Typography/SubTitle'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'


const Home: NextPage = () => {

  let [seconds, setSeconds] = useState(59)
  let [minutes, setMinutes] = useState(59)
  let [hours, setHours] = useState(23)

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(myInterval)
          } else {
            setHours(hours - 1);
            setMinutes(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Container>
      <Head>
        <title>English Week | PabloSilvaDev</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão" />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages " />
        <meta name='author' content='Pablo Silva' />
      </Head>
      <BannerSection id='banner'>
        <BannerSectionContainer>
          <Title
            content='Está cansado de tentar aprender inglês e nunca ter progresso?'
          />
          <RevealFade bottom>
            <SubTitle
              content=' Garanta sua vaga no English Week.'
            />
          </RevealFade>
          <RevealFade bottom>
            <PrimaryButton
              title='Garantir minha vaga'
              onClick={() => { }}
              size='large'
            />
          </RevealFade>
        </BannerSectionContainer>
      </BannerSection>
      <IntroductionSection id='introduction'>
        <IntroductionSectionContainer>
          <IntroductionSectionContentContainer>
            <RevealFade>
              <Title
                content='O que será o Enlgish Week?'
              />
            </RevealFade>

            <RevealFade>
              <Text
                content='O Enlgish Week será um dos mariores eventos gratuitos de ensino da língua inglesa. Aqui você irá realmente aprender inglês de uma vez por todas.'
              />
            </RevealFade>
            <RevealFade>
              <Text
                content='O evento ocorrerá entre os dias 04 e 08 de julho contando com muito conteúdo de alta qualidade e totalmente gratuito.'
              />
            </RevealFade>
            <RevealFade>
              <Text
                content='Um jeito fácil de ensinar para destravar de uma vez por todas seu aprendizado em inglês. Vamos juntos dar um passo em direção à sua fluência!'
              />
            </RevealFade>
          </IntroductionSectionContentContainer>
          <IntroductionSectionImageContainer>
            <RevealZoom>
              <NextImage
                height={480}
                width={320}
                imgUrl='/statue.png'
              />
            </RevealZoom>
          </IntroductionSectionImageContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <ForWhomSection id='forwhom'>
        <ForWhomSectionContainer>
          <ForWhomSectionImageContainer>
            <RevealZoom>
              <NextImage
                height={400}
                width={560}
                imgUrl='/flag.png'
              />
            </RevealZoom>
          </ForWhomSectionImageContainer>
          <ForWhomSectionContentContainer>
            <Title
              content='Para quem é o English Week?'
            />
            <RevealFade>
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
            </RevealFade>
          </ForWhomSectionContentContainer>
        </ForWhomSectionContainer>
      </ForWhomSection>
      <SubscribeSection id='subscribe'>
        <SubscribeSectionContainer>
          <Title
            content='Increva-se agora mesmo e garanta sua vaga!'
          />
          <Text
            content='Faltam apenas'
          />
          <TimerContainer>
            <TimerItemContainer>
              <TimerNumberContainer>

                <Title
                  content='03'
                />
              </TimerNumberContainer>
              <Text
                content='dias'
              />
            </TimerItemContainer>
            <TimerItemContainer>
              <TimerNumberContainer>

                <Title
                  content={hours < 10 ?
                    String('0' + hours) :
                    String(hours)}
                />
              </TimerNumberContainer>
              <Text
                content='horas'
              />
            </TimerItemContainer>
            <TimerItemContainer>
              <TimerNumberContainer>

                <Title
                  content={minutes < 10 ?
                    String('0' + minutes) :
                    String(minutes)}
                />
              </TimerNumberContainer>
              <Text
                content='minutos'
              />
            </TimerItemContainer>
            <TimerItemContainer>
              <TimerNumberContainer>

                <Title
                  content={seconds < 10 ?
                    String('0' + seconds) :
                    String(seconds)}
                />
              </TimerNumberContainer>
              <Text
                content='segundos'
              />
            </TimerItemContainer>


          </TimerContainer>
          <Text
            content='para o evento começar'
          />
          <RevealFade bottom>
            <PrimaryButton
              title='Garantir minha vaga'
              onClick={() => { }}
              size='large'
            />
          </RevealFade>
        </SubscribeSectionContainer>
      </SubscribeSection>
    </Container>
  )
}

export default Home
