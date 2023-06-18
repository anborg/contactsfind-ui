import { defineStore } from 'pinia'
// import todos from '../data/todos.json'
import type { Todo } from '@/models/todo.model'
import { uid } from 'uid'
import { ref, type Ref } from 'vue'
// var todojson = require('../data/todos.json')

type TodoState = {
  todos: Todo[]
  isRequestLoading: false
}
export const useTodosStore = defineStore(
  'todos',
  () => {
    const todos: Ref<Todo[]> = ref([])
    const isRequestLoading = ref(false)

    function setTodo(newTodoList: Todo[]) {
      if (!newTodoList) {
        console.warn('Empty result is ok, check if the arry is undefined: ' + newTodoList)
      }
      if (newTodoList.length == 0) {
        console.info('Empty results')
      }
      todos.value = newTodoList
    }
    function createAndAdd(newTodoTxt: string) {
      console.log('TodoStore.createAndAdd:' + newTodoTxt)
      todos.value.push({
        // Note: Absense of "this." created bug
        id: uid(),
        todoTxt: newTodoTxt,
        isCompleted: false,
        isEditMode: false
      })
    } //createAndAdd

    function toggleEdit(todoPos: number) {
      todos.value[todoPos].isEditMode = !todos.value[todoPos].isEditMode
      if (todos.value[todoPos].isEditMode) {
        console.log('EditMode-ON TodoPos', todoPos)
      } else {
        console.log('EditMode-OFF TodoPos', todoPos)
      }
    }//ToggleEdit
    function toggleComplete(todoPos: number) {
      todos.value[todoPos].isCompleted = !todos.value[todoPos].isCompleted
      if (todos.value[todoPos].isCompleted) {
        console.log('Completed-true TodoPos', todoPos)
      } else {
        console.log('Completed-false TodoPos', todoPos)
      }
    }//toggleComplete
    function deleteTodo(todoId: string) {
      console.log('Delete Todo-ID', todoId)
      const newTodos = todos.value.filter((todo) => todo.id !== todoId)
      todos.value = newTodos
    }
    function update(todoPos: number, todoVal: string) {
      console.log('Update TodoPos', todoPos)
      todos.value[todoPos].todoTxt = todoVal
    }

    return { todos, isRequestLoading, createAndAdd, toggleEdit,toggleComplete, update ,deleteTodo}
  }

  //getters
)
