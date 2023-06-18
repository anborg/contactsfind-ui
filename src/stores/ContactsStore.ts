import type { Person } from '@/models/person.model'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

type ContactsState = {
  contacts: Person[]
  isRequestLoading: false
}
export const useContactsStore = defineStore('contacts',()=> {
  const contacts: Ref<Person[]> = ref([])
  const isRequestLoading = ref(false)

    function add(contact: Person) {
      if (!contact) return
      contacts.value.push(contact)
    }
    function setContacts(contactsNew: Person[]) {
      if (!contactsNew) {
        console.warn("Empty result is ok, check if the arry is undefined: " + contactsNew)
      }
      if (contactsNew.length == 0) {
        console.info("Empty results")
      }
      contacts.value = contactsNew 
    }
    return { contacts, isRequestLoading, add, setContacts}
  })
