import { useState, useMemo } from "react";

export default function Paragraph(){
    const text = "sint qui sunt fugiat consequat elit ex aliquip dolore laborum aute irure ex sint quis incididunt officia ipsum sint eiusmod excepteur aute enim voluptate consequat incididunt nostrud quis proident nisi voluptate reprehenderit ex et esse cupidatat labore nostrud consequat esse veniam aute laboris qui enim ad labore enim laborum ad pariatur pariatur nulla eiusmod reprehenderit consectetur esse laboris aliquip cillum incididunt veniam quis consectetur est et aute amet ipsum fugiat ex consequat consequat pariatur dolor excepteur ea sint culpa aliquip magna amet ad quis occaecat duis amet velit reprehenderit non ex non non fugiat exercitation dolore ullamco nostrud est elit sint qui sunt fugiat consequat elit ex aliquip dolore laborum aute irure ex sint quis incididunt officia ipsum sint eiusmod excepteur aute enim voluptate consequat incididunt nostrud quis proident nisi voluptate reprehenderit ex et esse cupidatat labore nostrud consequat esse veniam aute laboris qui enim ad labore enim laborum ad pariatur pariatur nulla eiusmod reprehenderit consectetur esse laboris aliquip cillum incididunt veniam quis consectetur est et aute amet ipsum fugiat ex consequat consequat pariatur dolor excepteur ea sint culpa aliquip magna amet ad quis occaecat duis amet velit reprehenderit non ex non non fugiat exercitation dolore ullamco nostrud est elit sint qui sunt fugiat consequat elit ex aliquip dolore laborum aute irure ex sint quis incididunt officia ipsum sint eiusmod excepteur aute enim voluptate consequat incididunt nostrud quis proident nisi voluptate reprehenderit ex et esse cupidatat labore nostrud consequat esse veniam aute laboris qui enim ad labore enim laborum ad pariatur pariatur nulla eiusmod reprehenderit consectetur esse laboris aliquip cillum incididunt veniam quis consectetur est et aute amet ipsum fugiat ex consequat consequat pariatur dolor excepteur ea sint culpa aliquip magna amet ad quis occaecat duis amet velit reprehenderit non ex non non fugiat exercitation dolore ullamco nostrud est elit sint qui sunt fugiat consequat elit ex aliquip dolore laborum aute irure ex sint quis incididunt officia ipsum sint eiusmod excepteur aute enim voluptate consequat incididunt nostrud quis proident nisi voluptate reprehenderit ex et esse cupidatat labore nostrud consequat esse veniam aute laboris qui enim ad labore enim laborum ad pariatur pariatur nulla eiusmod reprehenderit consectetur esse laboris aliquip cillum incididunt veniam quis consectetur est et aute amet ipsum fugiat ex consequat consequat pariatur dolor excepteur ea sint culpa aliquip magna amet ad quis occaecat duis amet velit reprehenderit non ex non non fugiat exercitation dolore ullamco nostrud est elit sint qui sunt fugiat consequat elit ex aliquip dolore laborum aute irure ex sint quis incididunt officia ipsum sint eiusmod excepteur aute enim voluptate consequat incididunt nostrud quis proident nisi voluptate reprehenderit ex et esse cupidatat labore nostrud consequat esse veniam aute laboris qui enim ad labore enim laborum ad pariatur pariatur nulla eiusmod reprehenderit consectetur esse laboris aliquip cillum incididunt veniam quis consectetur est et aute amet ipsum fugiat ex consequat consequat pariatur dolor excepteur ea sint culpa aliquip magna amet ad quis occaecat duis amet velit reprehenderit non ex non non fugiat exercitation dolore ullamco nostrud est elit sint qui sunt fugiat consequat elit ex aliquip dolore laborum aute irure ex sint quis incididunt officia ipsum sint eiusmod excepteur aute enim voluptate consequat incididunt nostrud quis proident nisi voluptate reprehenderit ex et esse cupidatat labore nostrud consequat esse veniam aute laboris qui enim ad labore enim laborum ad pariatur pariatur nulla eiusmod reprehenderit consectetur esse laboris aliquip cillum incididunt veniam quis consectetur est et aute amet ipsum fugiat ex consequat consequat pariatur dolor excepteur ea sint culpa aliquip magna amet ad quis occaecat duis amet velit reprehenderit non ex non non fugiat exercitation dolore ullamco nostrud est elit sint qui sunt fugiat consequat elit ex aliquip dolore laborum aute irure ex sint quis incididunt officia ipsum sint eiusmod excepteur aute enim voluptate consequat incididunt nostrud quis proident nisi voluptate reprehenderit ex et esse cupidatat labore nostrud consequat esse veniam aute laboris qui enim ad labore enim laborum ad pariatur pariatur nulla eiusmod reprehenderit consectetur esse laboris aliquip cillum incididunt veniam quis consectetur est et aute amet ipsum fugiat ex consequat consequat pariatur dolor excepteur ea sint culpa aliquip magna amet ad quis occaecat duis amet velit reprehenderit non ex non non fugiat exercitation dolore ullamco nostrud est elit"; // (Your entire Lorem Ipsum text)

    // Convert the text into an array of words
    const wordsArray = text.split(' ');

    const [input, setInput] = useState(0);
    //const [words, setWords] = useState("");

    console.log(input);
    const generate = useMemo(()=>{
        let words = "";
        for(let i = 0; i<input ; i++){
            words = (words+" "+wordsArray[i]);
        }
        return words;
    },[input])

    return <div>
        <input id="inp" placeholder="Enter Number of words" type="number" ></input>
        <button onClick={()=>{
            setInput(document.getElementById("inp").value);
        }} style={{backgroundColor : "black", color : "white", marginLeft: "10px"}}>Generate</button>
        <div>{generate}</div>
    </div>
}

function Input(){
    return <div>
        
    </div>
}