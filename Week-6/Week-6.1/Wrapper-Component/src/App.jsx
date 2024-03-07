import { useState } from 'react'

import './App.css'
//----------------------------------------------------------------To get understanding----------------------------------------------------------------------
// function App() {
//   return(
//     <div>
//       <CardWrapper innerComponent = {<TextComponent/>}></CardWrapper>
//       <CardWrapper innerComponent = {<TextComponent/>}></CardWrapper>
//       <CardWrapper innerComponent = {<TextComponent/>}></CardWrapper>
//     </div>
//   )
    
// }
// function TextComponent(){
//   return(
//     <div>
//       Love is so powerful!
//     </div>
//   )
// }
// function CardWrapper({innerComponent}){
//   //It needs to accept some react component as input and needs to render it inside some extra styles.

//   return(
//     <div style={{border : "2px solid black",padding : "15px" ,backgroundColor : "grey",margin : "5px"}}>
//       {innerComponent}
//     </div>
//   )

// }
//--------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------Actual way of doing------------------------------------------------------
function App() {
  return(
    <div>
      <CardWrapper>
        Here you will write your logic and it will be handlied by the component as you have given children as the input to the component.
        Here you can also define a new CardWrapper itself or new Components that you made as well!
      </CardWrapper>
    </div>
  )
    
}
function CardWrapper({children}){
  //It needs to accept some react component as input and needs to render it inside some extra styles.

  return(
    <div style={{border : "2px solid black",padding : "10px" ,backgroundColor : "grey",margin : "5px"}}>
      {children}
    </div>
  )

}
//--------------------------------------------------------------------------------------------------------------------------------------

export default App
