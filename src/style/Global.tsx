import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    zoom: 1; 
     background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    filter:(2px);

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .fgATKS {}

  .fGZAiX {
    background: transparent;
  }

  .QEwmS {
    background: transparent;
  }

  .fWZqCT {
    background-image: url('/images/collections/pancake-squad-banner-lg.png')!important;
  }
 
  .UhtbF {
    background-image: url('/images/collections/pancake-squad-avatar.png')!important;
  }
  .dEztRk {display:none!important}
  .crMNLM {display:none!important}
  
  .hyiQNP {display:none!important}
  .desktop-icon {display:none!important}
  .mobile-icon {display:none!important}
  .kDWlca {display:none!important}
  .fngDZl {display:none!important}
  .cpSNcO {    background: transparent url(/images/bg-farm.png) right center no-repeat;  }
   .cjDcHz {    background: transparent url(/images/bg-farm.png) right center no-repeat!important;  }
  .csYxCV {display:none}
  .eKAiPs {display:none!important}
  .eEDEHF {display:none!important}
  .fOIjHO {  background: transparent url(/images/menu-bg.png) right center no-repeat ; }
  .cBoHoo {  background: transparent url(/images/menu-bg.png) right center no-repeat ; }
`

export default GlobalStyle
