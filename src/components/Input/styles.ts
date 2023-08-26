import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 8px;


    label{
        position: absolute;
    }
    input {
        position: relative;
        z-index: 999;
        width: 638px;
        text-align: start;
        padding: 1rem 0 1rem 1rem;

        color: ${ props => props.theme['gray-100']};
        background: ${props => props.theme['gray-500']};

        border: none;
        border-radius: 8px;

        &:placeholder{
            color: ${ props => props.theme['gray-300']};
        }
    }
`