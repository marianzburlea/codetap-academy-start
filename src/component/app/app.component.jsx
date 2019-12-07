import React, { useState, useRef, useEffect } from 'react'
// import Video from '@u-wave/react-vimeo'
import { StyledPlayButton, StyledSuperNicePlayer, StyledSuperNicePlayerWrapper, StyledButtonWrapper } from './app.style'
import { LanguageSelect } from '../language-select/language-select.component'

// 1. stop la 20 de secunde
// 2. autoplay
const stopTimeList = [19, 29, 39, 49, 59]



const CodetapAcademyStart = () => {
  const [paused, setPaused] = useState(true)
  const [language, setLanguage] = useState('')
  const [start, setStart] = useState(0)

  const [videoId, setVideoId] = useState('')

  const snpRef = useRef()

  const amFacutProgres = ({ playedSeconds }) => {
    console.log(~~playedSeconds)
    if (stopTimeList.includes(~~playedSeconds)) {
      // stop
      setPaused(true)
    } else {
      setPaused(false)
    }
  }

  const buttonTimeList = stopTimeList
    .filter((v, k) => k + 1 !== stopTimeList.length)
  console.log(buttonTimeList)

  const playVideoAt = time => {
    // ii zicem lui nenea video sa inceapa de aici
    setStart(time)
    console.log(start)
    setPaused(false)
    console.log(snpRef.current.seekTo(time, 'sceconds'))
  }

  useEffect(() => {
    (() => {
      const languageCollection = {
        'en': '373031112',
        'ro': '375741078',
      }

      return setVideoId(languageCollection[language] || '')
    })()
  }, [language])

  return (
    <div>
      <StyledSuperNicePlayerWrapper>
        <LanguageSelect setLanguage={setLanguage} />
        videoId: {videoId}
        {videoId && <StyledSuperNicePlayer
          url={`https://vimeo.com/${videoId}`}
          controls={true}
          ref={snpRef}
          onProgress={amFacutProgres}
          playing={!paused}
          width="100%"
          height="100%"
        />}
        <StyledButtonWrapper>
          {buttonTimeList.map(time => <StyledPlayButton onClick={() => playVideoAt(time + 1)}>Play at {time + 1}</StyledPlayButton>)}
        </StyledButtonWrapper>
      </StyledSuperNicePlayerWrapper>

    </div>
  )
}

export { CodetapAcademyStart }
