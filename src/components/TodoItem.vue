<script lang="ts">
interface _UiProps {// just grouping
  todo: Todo //todo and index are passed from parent TodosView
  index: Number
}
</script>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Todo } from '../models/todo.model'
import { ref, watch } from 'vue'
//uiProps
// const { modelValue : _UiProps } = defineModel<_UiProps>()
const  uiState  = defineProps<_UiProps>()
const emit = defineEmits<{
  // (e:'todo-toggle-iscomplete', itemIndex: Number): void,
  // (e:'todo-edit', itemIndex: Number): void,
  // (e: 'todo-update', itemIndex: Number): void,
  (e: 'todo-delete', itemId: string): void
}>()

//Ui disable/enable based on invalid input
const invalidInput = ref(true)
watch(uiState, () => {
  invalidInput.value = uiState.todo.todoTxt.length < 3 ? true : false
})

const toggleEditMode = (itemIndex: Number) => {
  uiState.todo.isEditMode = !uiState.todo.isEditMode
  //emit('todo-edit', itemIndex)
}
const toggleTaskComplete = (itemIndex: Number) => {
  uiState.todo.isCompleted = !uiState.todo.isCompleted
  //emit('todo-toggle-iscomplete', uiState.index)
}
</script>
<template>
  <li>
    <input type="checkbox" :checked="uiState.todo.isCompleted" @input="toggleTaskComplete(uiState.index)" />
    <div class="todo">
      <div v-if="uiState.todo.isEditMode" class="input-wrap" :class="{ 'input-err': invalidInput }">
        <input v-model="uiState.todo.todoTxt" id="todoEditField" type="text"  />
      </div>
      <span v-else :class="{ 'completed-todo': uiState.todo.isCompleted }">{{ uiState.todo.todoTxt }} </span>
    </div>
    <div class="todo-actions">
      <!--
                Display this button, so once edit-DONE, user can click 
                When this check-circle is clicked Editing is done. toggle isEditing -->
      <!-- eligible to save edits: -->
      <Icon
        v-if="uiState.todo.isEditMode == true && invalidInput == false"
        icon="ph:check-circle"
        class="icon"
        color="green"
        width="22"
        @click="toggleEditMode(uiState.index)"
      />
      <!-- 
                Display Edit-pencil button so users can edit in text -->
      <Icon
        v-if="uiState.todo.isEditMode == false"
        icon="ph:pencil-fill"
        class="icon"
        color="green"
        width="22"
        @click="toggleEditMode(uiState.index)"
      />

      <Icon icon="ph:trash" class="icon" color="f95e5e" width="22" @click="$emit('todo-delete', uiState.todo.id)" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  background-color: #f1f1f1;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

  &:hover {
    .todo-actions {
      opacity: 1;
    }
  }

  input[type='checkbox'] {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    &:checked {
      background-color: #41b080;
    }
  }
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

  .todo {
    flex: 1;

    .completed-todo {
      text-decoration: line-through;
    }

    input[type='text'] {
      width: 100%;
      padding: 2px 6px;
      border: 2px solid #41b080;
    }
  }

  .todo-actions {
    display: flex;
    gap: 6px;
    opacity: 0;
    transition: 150ms ease-in-out;

    .icon {
      cursor: pointer;
    }
  }
}
</style>
