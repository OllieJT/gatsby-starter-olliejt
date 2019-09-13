import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyle from "../utility/GlobalStyles"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  align-items: stretch;
  justify-content: space-between;

  ${props =>
    props.theme && props.theme.primary && props.theme.primary["050"]
      ? `--colour-primary-050: ${props.theme.primary["050"]}`
      : null};
  ${props =>
    props.theme && props.theme.primary && props.theme.primary["100"]
      ? `--colour-primary-100: ${props.theme.primary["100"]}`
      : null};
  ${props =>
    props.theme && props.theme.primary && props.theme.primary["200"]
      ? `--colour-primary-200: ${props.theme.primary["200"]}`
      : null};
  ${props =>
    props.theme && props.theme.primary && props.theme.primary["300"]
      ? `--colour-primary-300: ${props.theme.primary["300"]}`
      : null};
  ${props =>
    props.theme && props.theme.primary && props.theme.primary["400"]
      ? `--colour-primary-400: ${props.theme.primary["400"]}`
      : null};
  ${props =>
    props.theme && props.theme.primary && props.theme.primary["500"]
      ? `--colour-primary-500: ${props.theme.primary["500"]}`
      : null};
  ${props =>
    props.theme && props.theme.primary && props.theme.primary["600"]
      ? `--colour-primary-600: ${props.theme.primary["600"]}`
      : null};
  ${props =>
    props.theme && props.theme.primary && props.theme.primary["700"]
      ? `--colour-primary-700: ${props.theme.primary["700"]}`
      : null};
  ${props =>
    props.theme && props.theme.primary && props.theme.primary["800"]
      ? `--colour-primary-800: ${props.theme.primary["800"]}`
      : null};
`
const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 0;
`

const Layout = ({ children, theme }) => (
  <PageContainer theme={theme}>
    <GlobalStyle />
    <ContentContainer>{children}</ContentContainer>
  </PageContainer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
