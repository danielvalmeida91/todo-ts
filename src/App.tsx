import Logo from './assets/logo.svg'
import { PlusCircle } from '@phosphor-icons/react'
import { Container, Header, Main, Wrapper, Form } from './styles/index'
import { Input } from './components/Input'
import { Button } from './components/Button'


export function App() {
  return(
    <>
      <Container>
        <Header>
          <img src={Logo} alt="Logo ToDo List" />
        </Header>
        <Main>

          <Form>
            <Input placeholder='Adicione uma nova tarefa'/>
            <Button >
              Criar
              <PlusCircle />
            </Button>
          </Form>
          
          <Wrapper>
            <header>
              <p>Tarefas Criadas <span>0</span></p>
              <p>Concluídas <span>0</span></p>
            </header>
          </Wrapper>

        </Main>
      </Container>
    </>
  )
}
