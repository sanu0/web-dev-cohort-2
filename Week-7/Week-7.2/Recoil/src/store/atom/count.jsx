/**We have to define the atom here!
 * 1. Dont have conflicting key or key with same name of two diff state.
*/
import {atom, selector} from "recoil"

export const countAtom = atom({
    key : "countAtom", //tis is how you uniquely identify your atom as in large project their will be many atoms/state vars
    default : 0
});

export const EvenSelector = selector({
    key : "evenSelector",
    get : ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
})