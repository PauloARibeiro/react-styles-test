import styled from 'styled-components'

const ButtonStyles = styled.button`
    color: white;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;

    :hover {
        background: lightblue;
    }

    ${props => (props.toggle ? 'background: green' : 'background: red')}
`
export default ButtonStyles
