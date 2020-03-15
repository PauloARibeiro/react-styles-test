import React from 'react'

import ButtonInline from './ButtonInline/Button'
import ButtonModule from './ButtonModule/Button'
import ButtonStyled from './ButtonStyled/Button'

const App = () => {
    return (
        <div>
            <h1>Inline</h1>
            <ButtonInline />
            <h1>Module</h1>
            <ButtonModule />
            <h1>Styled</h1>
            <ButtonStyled />
        </div>
    )
}

export default App
