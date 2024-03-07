import { atom, selector } from "recoil";
import axios from "axios";

/** Consolidated all of them into a single atom */
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key : "networkAtomSelector",
        get : async ()=>{
            //await new Promise(r => setTimeout(r,3000)) // sleep for 3 sec, you can have a loader here. 
            const res =await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});
/**This is how you would write your atom when the default value of the atom comes from a asynchronous call */

/**Now with this async function inside the atom the flash will not be visible.
 * Now the thing is that you can ask that fetch will take some time and then hiw we do not see a flash then it is because now the
 * flash which is happening is the white screen itself and the data directly gets loaded there without first set to default val as before.
 * You can also verify it by introducing the an artificial delay. 
 * 
 * So it looks very ugly now when we use timeout we can set a loadable value while it is loaded.
 * How i put a loader in there! we will see now!!!!
*/

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})