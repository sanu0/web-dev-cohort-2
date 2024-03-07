
import './App.css'
import { RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

/**What happens when the value aren't loaded immediately?
 * Foe example, the TODOs that are coming back from the server?
 * How can we show loader on screen when that happens rather than an empty state?
 */

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   //const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));//Here instead of using useRecoilState() we use this useRecoilStateLoadable()
   const todo = useRecoilValueLoadable(todosAtomFamily(id));
   /**
    * Now after using this , this todo is an object which has few elements 
    * {
    *     content : 
    *     state : This will show wheather or not that promise is resolved in the selector or not
    * }
    */
   if (todo.state === "loading") {
      return <div>loading</div>
   }
   /**Just to make your website look sexy you can show skeleton instead of loading so that it looks kinda sexy! */
   else if(todo.state === "hasValue"){
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
  }
  else if(todo.state === "hasError"){
    return <div>
      Error while getting data from backend!
    </div>
  }
   
}

export default App
