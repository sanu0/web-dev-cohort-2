import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: function(id){
       return async ({get}) => {
        const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return res.data.todo;
      }},
  })
});

/**
 * 
 * export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key : "networkAtomSelector",
        get : async ()=>{
            //await new Promise(r => setTimeout(r,3000)) // sleep for 5 sec
            const res =await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

    So we ought to use selector when we needed the async or fetch request in atoms but for the same in atomfamily we use selector family.
 */