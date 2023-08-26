import { Button } from '../Button'
import { Input } from '../Input'
import { Container, TaskText } from './styles'

import { Trash } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default';

export interface TaskType {
    checked: boolean,
    text: string
}

interface TaskProps {
    task: TaskType,
    taskToDelete: ( task: string) => void;
    selectTask: ( checked: boolean ) => void;
}

export function Task( { task, taskToDelete, selectTask }: TaskProps){
    
    function handleTaskToDelete(){
        taskToDelete(task.text)
    }

    function handleSelectTask(){
        selectTask(task.checked)
    }

    return(
        <Container>
            <Input type='checkbox' checked={task.checked} onChange={handleSelectTask} />
            {/* <p>{task.text}</p> */}
            <TaskText checked={task.checked}>{task.text}</TaskText>
            <Button onClick={handleTaskToDelete}>
                <Trash color={defaultTheme['gray-300']} size={24}/>
            </Button>
        </Container>
    )
}