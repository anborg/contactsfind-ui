<script setup lang="ts">
import { reactive, watch } from 'vue'
import TodoButton from './AppButton.vue'
import { useTodosStore } from '../stores/TodosStore.ts'


interface _UiState {
  todoText: string
  invalid: boolean
  errorMsg: string
}
const uiState: _UiState = reactive({
  todoText: '',
  invalid: true,
  errorMsg: ''
})

watch(uiState, () => {
  uiState.invalid = (uiState.todoText.length <3) ? true : false
})
// const emit = defineEmits(['todo-create'])

const todosStore = useTodosStore()

const createTodo = () => {
  if (uiState.todoText !== '') {
    // emit("todo-create", uiState.todoText);
    todosStore.createAndAdd(uiState.todoText)
    uiState.todoText = ''
    return
  }
  // uiState.invalid = true
  uiState.errorMsg = 'Todo value can not be empty'
}
</script>

<template>
  <div class="input-wrap" :class="{ 'input-err': uiState.invalid }">
    <input type="text" v-model="uiState.todoText" />
    <TodoButton @click="createTodo()" :isDisabled="uiState.invalid">Create</TodoButton>
  </div>
  <p>{{ uiState.todoText }}</p>
  <p v-show="uiState.invalid" class="err-msg">{{ uiState.errorMsg }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-err {
    border-color: red;
  }
  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>
