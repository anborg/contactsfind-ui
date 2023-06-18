<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { uid } from 'uid'
import { Icon } from '@iconify/vue'
import type { Todo } from '../models/todo.model'
import TodoCreator from '../components/TodoCreator.vue'
import TodoItem from '../components/TodoItem.vue'

import { useTodosStore } from '../stores/TodosStore.ts'
import { storeToRefs } from 'pinia'
const todosStore = useTodosStore()
const { todos, isRequestLoading } = storeToRefs(todosStore)
//const todoList: Ref<Todo[]> = ref([]) //reactive(items: [])
const toggleTodoComplete = (todoPos: number) => {
  todosStore.toggleComplete(todoPos)}

const toggleEditTodo = (todoPos: number) => {
  todosStore.toggleEdit(todoPos)

}

//TODO unused
const updateTodo = (todoPos: number, todoVal: string) => {
  todosStore.update(todoPos,todoVal)
}
const deleteTodo = (todoId: string) => {
  todosStore.deleteTodo(todoId)
  }
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <!-- <TodoCreator @todo-create="addToList" /> -->
    <TodoCreator />
    <ul class="todo-list" v-if="todos.length > 0">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        @todo-toggle-iscomplete="toggleTodoComplete"
        @todo-edit="toggleEditTodo"
        @todo-update="updateTodo"
        @todo-delete="deleteTodo"
      />
    </ul>
    <p class="todos-msg" v-else>
      <Icon icon="noto-v1:sad-but-relieved-face" width="22" />
      <span>You have no todo's to complete! Be active, add one!</span>
    </p>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }
  .todo-msg {
    text-shadow: 0cap;
  }
}
</style>
