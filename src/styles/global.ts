import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{

    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 1px ${({theme}) => theme.COLORS.PURPLE_DARK};
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }

    body {
        background: ${({theme}) => theme.COLORS.GRAY_600};
        color: ${({theme}) => theme.COLORS.GRAY_300};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: ${({theme}) => theme.FONTS.INTER_16_REGULAR};
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
` 