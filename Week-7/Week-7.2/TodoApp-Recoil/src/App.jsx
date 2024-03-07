
import {useRecoilValue , useRecoilState, useSetRecoilState, RecoilRoot} from 'recoil'
import { InputContext, TodoContext } from './Context';
import { InputAtom, TodoAtom , FilteredTodo } from './store/atom/todo';



function App() {
  const setIp = useSetRecoilState(InputAtom)
  return (
    <RecoilRoot>
      <div>
      <input onChange={function(e){
        setIp(e.target.value);
      }} type="text" placeholder='Write the filtering word here' />
      <br /><br />
      <Todos />
      <br />
      <br />
      <FilteredTodo />

    </div>

    </RecoilRoot>
    
  )
}

function Todos(){
  const todo = useRecoilValue(TodoAtom);
  return (
    <div>
      {todo.map(function(todo){
        return <Todo id = {todo.id} title={todo.title} description = {todo.description}></Todo>
      })}
    </div>
  )
}

function Todo({id,title,description}){
  return(
    <div>
      <b>{id}</b><br />
      <b>
          {title}
      </b>
      <br /><br />      
      <b>
          {description}
      </b>
      <br />
      <b>----------------------------------------------------------</b>
    </div>
  )
}
function FilterTodo(){
  const ftodo = useRecoilValue(FilteredTodo);
  return (
    <div>
      {ftodo.map(function(todo){
        return <Todo id = {todo.id} title={todo.title} description = {todo.description}></Todo>
      })}
    </div>
  )
}

export default App
