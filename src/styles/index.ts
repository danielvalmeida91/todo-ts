import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    `

export const Header = styled.header`
    flex: 1;
    height: 200px;
    display: flex;
    justify-content: center;
    padding: 4.5rem 0 5rem 0;
    
    > img {
        height: 48px;
        width: 126px;
    }
    
    background: ${({ theme }) => theme.COLORS.GRAY_700};

`

export const Main = styled.main`
    display: flex ;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 4rem;

    margin-top: -27px;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    > button {
        background: ${({ theme }) => theme.COLORS.BLUE_DARK};
        font: ${({ theme }) => theme.FONTS.INTER_14_REGULAR};

        transition: background-color 0.1s ;

        &:hover{
            background: ${({ theme }) => theme.COLORS.BLUE};
        }

        > svg {
            font-size: 16px;
        }
    }
`

export const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 46rem;

    > header {
        flex: 1;
        display: flex ;
        align-items: flex-start;
        justify-content: space-between;

        > p {
            color: ${({ theme }) => theme.COLORS.BLUE};
            font: ${({ theme }) => theme.FONTS.INTER_14_REGULAR};
        }
        
        > p + p {
            color: ${({ theme }) => theme.COLORS.PURPLE};
            font: ${({ theme }) => theme.FONTS.INTER_14_REGULAR};
        }

        span {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
            font: ${({ theme }) => theme.FONTS.INTER_12_BOLD};
            border-radius: 50%;
            padding: 2px 8px;
            background: ${({ theme }) => theme.COLORS.GRAY_400};
        }
    }

    
`