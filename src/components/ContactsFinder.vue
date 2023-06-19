<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import TodoButton from './AppButton.vue'
import Table from './AppTable.vue'
import { RestClient } from '../helpers/rest-client.ts'
import { useContactsStore } from '../stores/ContactsStore.ts'
import type { Person } from '../models/person.model.ts'
import { storeToRefs } from 'pinia'
interface _UiState {
  searchBy: string
  searchStr: string
  invalid: boolean
  errorMsg: string
}
const searchUiState: _UiState = reactive({
  searchBy: 'name',
  searchStr: '',
  invalid: false,
  errorMsg: ''
})
// const fields = ['id','name', 'email']
// const url = "https://jsonplaceholder.typicode.com/users"

const fields = ['firstName', 'lastName', 'telephone', 'email', 'jobTitle', 'department', 'commission']
const url = 'contacts/find'
// const url = 'http://localhost:8080/contacts/find'

// const contactsResult: Ref<Person[]> = ref([])
const contactsStore = useContactsStore()
const { contacts, isRequestLoading } = storeToRefs(contactsStore)

const reqPostObject: Record<string, any> = ref({})
watch(searchUiState, () => {
  searchUiState.invalid = (searchUiState.searchStr.length <3) ? true : false
  reqPostObject.value = {}
  reqPostObject.value[searchUiState.searchBy] = searchUiState.searchStr
})


const searchContacts = () => {
  RestClient.post<Person[]>(url, reqPostObject.value)
    .then(
      (result) => {
        let personList :Person[] = result.paresedBody  as Person[]
        contactsStore.setContacts(personList)
        console.log('personList size: ' + personList.length)
      },
      (error) => console.log(error)
    )
    .catch((error) => console.log('Catch: ' + error))
    .finally(() => {
      searchUiState.searchStr = ''
    })
}
</script>

<template>
  <div class="input-wrap" :class="{ 'input-err': searchUiState.invalid }">
    <select name="searchby" v-model="searchUiState.searchBy">
      <option value="name">Name</option>
      <option value="department">Department</option>
      <option value="commission">Commission</option>
      <option value="jobTitle">Job Title</option>
    </select>
    <input type="text" v-model="searchUiState.searchStr" :placeholder="'Search by ' + searchUiState.searchBy" />
    <TodoButton @click="searchContacts()" :isDisabled="searchUiState.invalid">Find</TodoButton>
  </div>
  <p v-if="isRequestLoading">Loading...</p>
  <!-- <p v-else>Number of contacts {{ contacts.length }}</p> -->
  <p class="text-muted">{{ reqPostObject }}</p>
  <p v-show="searchUiState.invalid" class="err-msg">
    {{ searchUiState.errorMsg }}
  </p>
  <Suspense>
    <!-- component with nested async dependencies -->
    <Table :fields="fields" :filteredList="contacts"></Table>
    <!-- loading state via #fallback slot -->
    <template #fallback> Loading... </template>
  </Suspense>
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
