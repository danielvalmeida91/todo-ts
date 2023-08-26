import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{

    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 1px ${ props => props.theme['purple-dark']};
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }

    body {
        background: ${ props => props.theme['gray-600']};
        color: ${ props => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-size: 1rem;
        font-weight: regular;
        line-height: 140%;
        font-family: 'Inter', sans-serif;

        color: ${ props => props.theme['gray-100']}
    }
` 