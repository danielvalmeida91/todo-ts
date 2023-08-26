import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 1rem;



    border-radius: 8px;
    border: 1px solid ${ props => props.theme['gray-500']};
    background: ${ props => props.theme['gray-500']};

    width: 45rem;


    &:hover{
      scale: 1.04;
      transition: scale 0.5s;
    }

    p {
      font-size: 0.875rem;
      font-weight: 400;
    }

    button {
        background: transparent;
        padding: 0;
    }

    button svg:hover {
      fill: ${ props => props.theme.danger};
    }
    
    
    input {
      position: relative;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      appearance: none;
      -webkit-appearance: none;
      opacity: 0;
    }


    label::before {
      content: '';
      width: 24px ;
      height: 24px;
      display: block;

      border: 2px solid ${ props => props.theme.blue};
      border-radius:50%;
    }

    input:hover + label::before{
      background-color: ${ props => props.theme['blue-dark']};
      box-shadow: 0 0 0 2px ${ props => props.theme['blue-dark']};
      opacity: 0.8;
      transition: background-color 0.2s;
    }

    input:checked + label::before {
      content: '✓';
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      color: ${ props => props.theme['gray-100']};
      background-color: ${ props => props.theme['purple-dark']};
      
      border: 0;
      box-shadow: 0 0 0 2px ${ props => props.theme['purple-dark']};
      outline:transparent;

      transition: background-color 0.2s ;
    }

    input:checked:hover + label::before{
      background-color: ${ props => props.theme.purple};
      box-shadow: 0 0 0 2px ${ props => props.theme['purple']};

      transition: background-color 0.1s;
    }

    .checked {
      font-style: unset;
    }

`

export const TaskText = styled.p<{checked: boolean}>`
  font-size: 0.875rem;
  font-weight: 400;

  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`
