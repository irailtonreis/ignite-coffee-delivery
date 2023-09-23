import styled from 'styled-components'
import bannerBackground from "../../assets/banner-background.png"

export const LayoutContainerFull = styled.div`
  background-image: url(${bannerBackground});
  max-width: 100%;
`
export const LayoutContainer = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`