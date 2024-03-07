import { useEffect, useState } from 'react'
import axios from 'axios'

//custom hook


/**Implement this hook in a way that it repolls the backend after every n seconds and it take n as an input argument*/
function useTodos(n){
  const [todos, setTodos] = useState([])
  const[loading , setLoading] = useState(true)

  //-----------data fetching logic------------------------------

  //Whenever you fetch something then for a split of a second we see some blank page as at that time the backend is taking time to send response
  //Wouldn't it be perfect if the user see some loader for that time!!! let us render this loader while the data get fetch.
  useEffect(() => {
    const val = setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
    } , n*1000);

    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      //This is to stopb to prev clock
      return ()=>{
        clearInterval(val);
      }
  }, [n])

  return {todos, loading};
  //--------------------------------------------------------------
}

function App() {
 
  const {todos,loading} = useTodos(5);
  

  if(loading){
    return <div> loading ... </div>
  }
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

//This is how the same thing has been done in swr library ->------------------------------------------

// import useSWR from 'swr'

// function App(){
//   return(
//     <div>
//       <Profile/>
//     </div>
//   )
// }

// // const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async function(url) {
//   const data = await fetch(url);
//   const json = await data.json();
//   return json;
// };

// function Profile() {
//   const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello, you have {data.todos.length} todos!</div>
// }

export default App
