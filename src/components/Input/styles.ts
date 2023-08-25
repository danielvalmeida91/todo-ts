import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 8px;

    > input {
        width: 638px;
        text-align: start;
        padding: 1rem 0 1rem 1rem;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        background: ${({theme}) => theme.COLORS.GRAY_500};

        border: none;
        border-radius: 8px;

        &:placeholder{
            color: ${({ theme }) =>  theme.COLORS.GRAY_300};
        }
    }
`