//https://pinia.vuejs.org/cookbook/testing.html

import { createPinia, setActivePinia } from "pinia"
import { beforeEach, describe, expect, it } from "vitest"
import { useTodosStore } from "../TodosStore"

describe('Todos Store', async () => {
        beforeEach(()=>{
            setActivePinia(createPinia())
        })//beforeEach

        //add todo
        it('creates-adds', ()=> {
            const todosStore = useTodosStore()
            expect(todosStore.todos.length).toBe(0)
            const todoTxt = "My Todo1"
            todosStore.createAndAdd(todoTxt)
            expect(todosStore.todos.at(0)?.todoTxt).toBe(todoTxt)
        })//creates-adds
    }//anon-describe
)//describe