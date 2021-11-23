import styled, { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 44px;
    color: #030303;
  }

html, body {
  background: #F5D04D;
  height: 100%;
}

#root {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
}
`


export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 15px;
`

export const Main = styled.main`
   flex: 1 1 auto;
`

export const Section = styled.section`
  padding-top: 0px;
`

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection || ''};
    align-items: ${({alingItems}) => alingItems || ''};
    flex-wrap: ${({flexWrap}) => flexWrap || 'nowrap'};
    justify-content: ${({justifyContent}) => justifyContent || ''};
    align-content: ${({alingContent}) => alingContent || ''};
`

export const Button = styled.a`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  background: ${({bg}) => bg || '#F5F884'};
  border-radius: 4px;
`

export const Input = styled.input`
  margin-right: ${({marginRight}) => marginRight || '10px'};
  max-width: 235px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  background: #FFFFFF;
  padding: 10px 15px 10px 15px;
  border: 1px solid #BDBDBD;
  border-radius: 4px;
  &::placeholder {
    color: #030303;
  }
  @media (max-width: 910px) {
    width: 100%;
    max-width:100%;
    margin-bottom: 5px;
  }
`

export const Img = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 20px;
  height: 20px;
`

export default GlobalStyle;