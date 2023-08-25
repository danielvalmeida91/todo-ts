import { SVGAttributes } from 'react'
import { Container } from './styles'

export function Button({children}: SVGAttributes<SVGElement>){
    return(
        <Container>
            {children}
        </Container>
    )
}