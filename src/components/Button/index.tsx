import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'


export function Button({...props}: ButtonHTMLAttributes<HTMLButtonElement>
    ){
    return(
        <Container {...props}/>
            
    )
}