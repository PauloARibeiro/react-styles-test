import React, { useState } from 'react'

const ButtonInline = () => {
    const [background, setBackground] = useState('red')

    // const styles = {
    //     background: 'red',
    //     color: 'white',
    //     border: 'none',
    //     padding: '0.5rem 2rem',
    //     cursor: 'pointer',
    // }

    const onClick = () => {
        setBackground('green')
    }

    return (
        <button
            onClick={onClick}
            style={{
                background: background,
                color: 'white',
                border: 'none',
                padding: '0.5rem 2rem',
                cursor: 'pointer',
            }}
        >
            Im Inline
        </button>
    )
}

export default ButtonInline
