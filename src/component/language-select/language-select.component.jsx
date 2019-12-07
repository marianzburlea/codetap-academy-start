import React from 'react'

const LanguageSelect = ({ setLanguage }) => {
  return (
    <div>
      <button onClick={() => setLanguage('en')}>EN</button>
      <button onClick={() => setLanguage('ro')}>RO</button>
    </div>
  )
}

export { LanguageSelect }
