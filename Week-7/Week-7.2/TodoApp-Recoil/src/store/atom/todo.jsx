import {atom, selector} from "recoil"

export const TodoAtom = atom({
    key : "TodoAtom",
    default : [{
        id : 1,
        title : "Go to morning gym",
        description : "Go to the gym between 7 am to 9 am"
    },{
        id : 2,
        title : "Go to school",
        description : "Go to the gym between 10 am to 3 pm" 
    },{
        id : 3,
        title : "Go to evening gym",
        description : "Go to the gym between 7 pm to 9 pm"
    }]
});

export const InputAtom = atom({
    key : "InputAtom",
    default : ""
});

export const FilteredTodo = selector({
    key : "FilteredTodo",
    get : ({get}) => {
        const todo = get(TodoAtom);
        const filter = get(InputAtom);

        return todo.filter((x => x.title.includes(filter) || x.description.includes(filter)));
    }
})

