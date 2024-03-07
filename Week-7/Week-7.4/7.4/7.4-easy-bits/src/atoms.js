import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom", //key to uniquely identify the atom
    default: 102 //it's value
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});

/**A selector is something that can be derived from other atoms*/
export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount
    }
})
//What the above code mean is that whenever one of the atom that the selector is getting changes, it will recalculate the return value, similar to useMemo()
//hook. 

/**Selector is better than useMemo() as selector is used for those sort of operation which uses derived atoms. Also
 * You can use this selector result in other selector too in future so it is just slight better than useMemo().
 * coz now if in the future you have some dependencies or some state that depends on this selector as well than you can use this selector their.
 */