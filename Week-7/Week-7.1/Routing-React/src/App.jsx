import { useState , lazy, Suspense, startTransition } from 'react'
import './App.css'
import {BrowserRouter ,Routes ,Route, useNavigate} from 'react-router-dom'

const Dashboard =  lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

// import { Landing } from './components/Landing'
// import { Dashboard } from './components/Dashboard'

{/**First create two components for DashBoard as well as Landing page both
Also structure it very well. */}
// function App() {

//   {/**We can do this to ensure routing has been introduced in our website frontend But
//     When linkedIn or any other website do this then you will notice that there is a navbar on the top and it does not changed it remain static kinda!!!
//     So how do we add a top bar that does not change as we change the routes and so it can be done easily!!*/}
//   return (
//     <div>
//       <div style={{background : "black", color : "white" , margin : 20}}>
//         <button style={{padding : 20}} onClick={()=>{


//           window.location.href = "/";


//           //------------------------------------------------------------------------------------------------------------------------------------------
//           /**Now the problem with this approach is that when you look at the network page you will see that when you click the landing page or dashboard
//            * Button it will again re fetch the pages even though we didnt wanted that! Also you will see a reloading on the top bar of our web browser
//            * Which again tell that this is not the good way to do this.
//            * So it is like the fetching html page again which is not optimal way.
//            * 
//            * So we will gonna use a new React hook called useNavigate which lets u not do the hard reload even though you wanna change the page or say 
//            * Route
//            
//            When using window.location.href for navigation in a React application, it triggers a full page reload, which is not desirable in 
//            client-side routing. A full page reload involves fetching the HTML, CSS, and other assets again, leading to a slower and less 
//            efficient user experience.
 
//            To address this issue, React Router DOM provides a solution in the form of the useNavigate hook. 
//            This hook is designed for programmatic navigation within a React component without triggering a full page reload. 
//            By using useNavigate, you can ensure smoother transitions between different views in a single-page application (SPA) without 
//            unnecessary overhead.
//
//
//           //------------------------------------------------------------------------------------------------------------------------------------------
//         }}>Landing page</button>
//         <button style={{padding : 20}} onClick={()=>{

//           window.location.href = "/dashboard"


//         }}>Dashboard</button>
//       </div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/dashboard' element = {<Dashboard/>}></Route>
//           <Route path = '/' element={<Landing/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
    
    
//   )
// }

//------------------------------------------------------useNavigate() hook -----------------------------------------------------------------------

/**
 * The problem with the useNavigate() hook is that is expects that it is initialized where its parent must be <BrowserRouter> and if it is used
 * outside that component that is provided by the react-router-dom, will not work or say the app will break.
 */


// function App(){

//   return(
//       <BrowserRouter>
//         <Appbar/>
//         <Routes>
//           <Route path='/dashboard' element = {<Dashboard />}></Route>
//           <Route path = '/' element={<Landing />}></Route>
//         </Routes>
//       </BrowserRouter>
//   )
// }

// function Appbar(){
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div style={{background : "black", color : "white" , margin : 20}}>
//         <button style={{padding : 20}} onClick={()=>{

//           startTransition(()=>{
//             navigate("/");
//           })
          


//         }}>Landing page</button>
//         <button style={{padding : 20}} onClick={()=>{

//           startTransition(()=>{
//             navigate("/dashboard");
//           })
          
//         }}>Dashboard</button>
//       </div>
//     </div>

//   )
// }

/**And this is how you solve every issue now and make a client side routing in React */

//-----------------------------------------------------------------Lazy- Loading-----------------------------------------------------------------

/**
 * Lazy loading in React refers to a technique where you delay the loading of certain components or assets until they are actually needed. 
 * This can help improve the initial loading time of your application by only loading the necessary resources when they are required, 
 * rather than loading everything upfront.
 * In React, lazy loading is typically achieved using the React.lazy() function, which allows you to load a component lazily as a separate chunk
 * 
 * So now when you fetch or rtefresh may be only landingpage comes and you at that time dont have access to dashboard page, for that you hae to fetch 
 * that dashboard page asynchronously. For this purpose we use suspense.
 */

function App(){
  return(
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/dashboard' element = { <Suspense fallback= {"loading..."}> <Dashboard/> </Suspense> }></Route>

          <Route path='/' element = { <Suspense fallback= {"loading..."}> <Landing/> </Suspense> }></Route>
        </Routes>
      </BrowserRouter>
      )
}
/**
 * 
 * What suspense do here is that jab tak loading page ya koi aur page aa raha ai it may take 5 or 10 or 100 sec depending upon your internet connection
 * Tab talak ky dikhae janta ko? To jab tak wo aa raha hai page tab talak suspended state me hai site to uss dauraan loading... dikha sakte hain.
 */

function Appbar(){
    const navigate = useNavigate();
    return (
      <div>
        <div style={{background : "black", color : "white" , margin : 20}}>
          <button style={{padding : 20}} onClick={()=>{
  
            startTransition(()=>{
              navigate("/");
            })
            
  
  
          }}>Landing page</button>
          <button style={{padding : 20}} onClick={()=>{
  
  
            startTransition(()=>{
              navigate("/dashboard");
            })
  
  
  
          }}>Dashboard</button>
        </div>
      </div>
  
    )
  }


export default App
