import Logo from './assets/logo.svg'
import { ClipboardText, PlusCircle } from '@phosphor-icons/react'
import { defaultTheme } from './styles/themes/default'

import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react'

import { Container, Header, Main, Wrapper, Form } from './styles/index'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Task, TaskType } from './components/Task'

export function App() {
  const [ tasks, setTasks ] = useState<TaskType[]>([]);
  const [ newTask, setNewTask ] = useState('')
  const [ selectedTask, setSelectedTask ] = useState(0)
  
  useEffect(() =>{
    const completedTasks = tasks.filter(task => task.checked)
    setSelectedTask(completedTasks.length)
  }, [tasks] )

  function handleSelectTask (index: number) {
    const updatedTasks = tasks.map((task, i) => {
      if( i === index){
        return { ...task, checked: !task.checked}
      }
      return task
    })

    const sortedTasks = updatedTasks.sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? 1 : -1))
    console.log(sortedTasks)
    setTasks(updatedTasks)
    
  }

  function handleInsertTask(event : FormEvent){
    event.preventDefault();

    const task = {
      checked: false,
      text: newTask, 
    }

    setTasks([ ... tasks, task])
    setNewTask('')
    
  }

  function handleNewTaskChange( event : ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid  ( event : InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function handleDeleteTask( taskToDelete: string){
    const filteredTasks = tasks.filter( task => {
      return task.text !== taskToDelete
    })

    setTasks(filteredTasks)

  }

  return(
    <>
      <Container>
        <Header>
          <img src={Logo} alt="Logo ToDo List" />
        </Header>
        <Main>

          <Form onSubmit={handleInsertTask}>
            <Input 
              type='text'
              placeholder='Adicione uma nova tarefa'
              value={newTask}
              onChange={handleNewTaskChange}
              onInvalid={handleNewTaskInvalid}
              required
            />
            <Button>
              Criar
              <PlusCircle />
            </Button>
          </Form>
          
          <Wrapper>
            <header>
              <p>Tarefas Criadas <span>{tasks.length}</span></p>
              <p>Concluídas <span>{selectedTask}</span></p>
            </header>
            <main>
              {
                tasks && tasks.map(
                  (task, index) => {
                    if(index === 0 && task.text === ''){
                      return null;
                    }
                    return <Task task={task} taskToDelete={handleDeleteTask} selectTask={() => handleSelectTask(index)} key={task.text} /> 
                  }
                )
              }
              {
                (tasks.length === 0) && 
                <div className="emptyTasks">
                  <ClipboardText fill={defaultTheme['gray-400']} size={56}/>
                  <div className="emptyTasksText">
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                  </div>
              
                </div>
              }
              
            </main>
            
          </Wrapper>
        </Main>
      </Container>
    </>
  )
}
