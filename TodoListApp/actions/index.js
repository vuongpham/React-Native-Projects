import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from './action'

// Action: add new task
export const addNewTask = () => {
  return {
    type: ADD_NEW_TASK,
    taskID: newTaskID++,
    taskName: inputTaskName
  }
}

// Action: togge 1 task to complete/incomplete

export const toogleTask = (taskID) => {
  return {
    type: TOGGLE_ONE_TASK,
    taskID: taskID
  }
}
