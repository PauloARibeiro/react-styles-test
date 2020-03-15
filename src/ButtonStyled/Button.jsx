import React, { useState } from 'react'
// import styled from 'styled-components'
import ButtonStyles from './ButtonStyle'

// const ButtonStyles = styled.button`
//     color: white;
//     border: none;
//     padding: 0.5rem 2rem;
//     cursor: pointer;

//     :hover {
//         background: lightblue;
//     }

//     ${props => (props.toggle ? 'background: green' : 'background: red')}
// `

const ButtonStyled = () => {
    const [isActive, setActive] = useState(false)

    const onClick = () => {
        setActive(!isActive)
    }

    return (
        <ButtonStyles toggle={isActive} onClick={onClick}>
            Im Styled
        </ButtonStyles>
    )
}

export default ButtonStyled
