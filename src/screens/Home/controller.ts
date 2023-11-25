import { useState } from 'react'
import { Alert } from 'react-native'
import uuid from 'react-native-uuid'

import { TaskType } from './types'

const useHomeController = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [newTask, setNewTask] = useState<string>('')

  const handleAddTask = () => {
    if (newTask === '') {
      return Alert.alert(
        'Empty Task',
        'A task cannot be empty, please enter a valid task.'
      )
    }

    setTasks((prevState) => [
      ...prevState,
      { id: uuid.v4().toString(), title: newTask, isDone: false }
    ])
    setNewTask('')
  }

  const handleFinishedTask = (id: string) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    )

    setTasks(newTasks)
  }

  const handleRemoveTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  const doneTasksCount = tasks.filter((task) => task.isDone).length

  return {
    isFocused,
    setIsFocused,
    tasks,
    newTask,
    setNewTask,
    handleAddTask,
    handleRemoveTask,
    handleFinishedTask,
    doneTasksCount
  }
}

export default useHomeController
