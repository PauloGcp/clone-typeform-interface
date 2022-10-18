import React from 'react';
import GlobalStyles from './styles/global'
import {Main, Section, Sticky} from './styles/index'
import { FirstAndSecond } from './components/FirstAndSecond/index';

function App() {
  return (
    <>
      <GlobalStyles/>
      {/*Main comporta todos os containers animados.
      Possui +/- 16x o tamanho da tela por conta da grande quantidade de scroll  */}
      <Main style={{height:'1610vh'}}>
        {/*cada section representa uma animação */}
        <Section style= {{height:'72.7%' }}>
          {/*O conteúdo do first aparece primeiro, mas o second é o seu pai, ja que fica ao redor dele */}
          <FirstAndSecond>

          </FirstAndSecond>
        </Section>

        <Section style= {{height:'9.7%'}}>
          <Sticky className="third"/>
         
        </Section>

        <Section style= {{height:'10.1%'}}>
          <Sticky className="fourth"/>
        </Section>
      </Main>
    </>
  );
}

export default App;
