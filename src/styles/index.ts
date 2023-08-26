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
    
    background: ${ props => props.theme['gray-700']};

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
        background: ${props => props.theme['blue-dark']};

        transition: background-color 0.1s ;

        &:hover{
            background: ${props => props.theme.blue};
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
    flex-direction: column;
    gap: 8px;

    width: 46rem;

    > header {
        display: flex ;
        align-items: flex-start;
        justify-content: space-between;
        
        width: 100%;
        margin-bottom: 25px;

        font-size: 0.875rem;
        font-weight: 700;
        line-height: normal;


        > p {
            color: ${ props => props.theme.blue };
        }
        
        > p + p {
            color: ${ props => props.theme.purple };
        }

        span {
            color: ${props => props.theme['gray-200']};
            border-radius: 50%;
            padding: 2px 8px;
            background: ${ props => props.theme['gray-400']};
        }
    }

    main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 0.75rem;

        .emptyTasks {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 1rem;

            padding: 4rem 1.5rem;

            width: 45rem;

            border-top: 1px solid ${props => props.theme['gray-400']};
            border-radius: 8px;
            

        }

        .emptyTasksText {
            color: ${ props => props.theme['gray-300']};
        }

    }

    
`