
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  /**This is how we would have done it without Recoil*/
  //const[notification, setNotification] = useState({})

  // useEffect(() => {
  //   // fetch
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //       //setNotification(res.data)
  //     })
  // }, [])

  /**This approach of using useEffect hook has an issue and the issue is that when you refresh the page then you will see a flash of the default values
   * Which we have set, now when the page is reloaded till the fetch occurs untill then the default value gets rendered and you see only that
   * This should be fixed now. Only if the place of default in atom if we can only fetch there already then this would not have happened, but the issue 
   * is that atom does not support async requests!! and that is an issue!
   * 
   * There is a way to write the default value when it is a selector and it then fetch the asyn value.
   */

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
