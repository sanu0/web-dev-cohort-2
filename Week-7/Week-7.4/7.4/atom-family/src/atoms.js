import { atomFamily } from "recoil";
import { TODOS } from "./todos";

/**U can definetely do this as well
 * export const todosAtomFam = atom({
 *    key : 'todosAtomFam'
 *    default : TODOS
 * })
 * Now you just made state as the whole array and now you can also use this and it is perfect but it is not optimized as whenever a single todo in this
 * changes the whole div component in the app component gets re rendered but using the atom family only the required ones will be rerendered and not the
 * unneccesary ones.
 */

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {//So now the dafault value is not just a value but a function
    return TODOS.find(x => x.id === id)
    /**let foundTodo = null;
     * for(let i=0;i<TODOS.length;i++){
     *    if(TODOS[i].id === id){
     *       foundTodo = TODOS[i];
     *    }
     * }
     * return foundTodo;
     */
  },
});

/**What the function is doing here is that it basically running through the hard coded todo list which we have imported and get that specific todo.*/

/**
 * NOTE --> If the same atom in the family with the same id is asked multiple time than rather than finding it using the fuunction alll the time
 * It cache its value and return it so not to unnecessarily increase the complexity. Only the first time it is run and the other time it is just a
 * Cache value.
 */

/**
 * Imagine you're building a to-do list app with Recoil. You have two components:

Main List: displays all to-do items and allows adding new ones.
Item Detail: shows details and lets you edit/mark complete a specific item.
Using different atoms:

You might create separate atoms for the entire list of items and each individual item. This works, but it becomes cumbersome:
You need to manually keep the list and individual item states in sync.
Adding/removing items requires updating both atoms, adding potential for error.
Performance might be impacted with numerous redundant state updates.
Using atom family:

Here, atomFamily shines! You can define a single family for "to-do items":
Each item in the list is represented by a unique instance of the family, identified by its ID.
State updates (editing, marking complete) only affect the specific item's atom, not the entire list.
The list component reads the family values dynamically, automatically reflecting changes.
Benefits of using atom family in this case:

Simpler state management: One family handles all item-related state, reducing boilerplate and potential for inconsistencies.
Improved performance: Only relevant atomic updates occur, minimizing unnecessary re-renders and state changes.
Component isolation: Components only access their specific item's atom, isolating their state concerns.
Flexibility: Adding or removing items seamlessly adapts the family, updating the list automatically.
Overall, atomFamily offers a cleaner, more performant, and more maintainable approach for managing collections of dynamic state in Recoil compared to using multiple individual atoms. This is especially true when dealing with lists, tabs, or any scenario where you have independent instances with similar state needs.

Remember, if your state is truly global and shared across the entire application, a single atom might be sufficient. However, for dynamic collections of locally scoped state, atomFamily is a powerful and convenient tool in your Recoil toolkit.

I hope this use case clarifies the advantages of using atomFamily over multiple atoms!
 */