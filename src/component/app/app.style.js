import styled from 'styled-components'
import SuperNicePlayer from 'react-player'

export const StyledSuperNicePlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`

export const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const StyledSuperNicePlayer = styled(SuperNicePlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const StyledPlayButton = styled.button`
  margin: 1rem;
  border-radius: 60px;
  font-size: 2.5rem;
  background-color: #d52027;
  color: #fff;
  padding: 2rem 4rem;
  opacity: 0.75;
`
