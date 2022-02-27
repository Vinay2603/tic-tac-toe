import { useEffect, useState } from "react";
import { Square } from "./componrnts/Square";
import "./styles.css";

const intialState =["","","","","","","","",""]
//console.log(intialState)
export default function App() {

  const [game ,setGame]= useState(intialState)
  const [IsX,setIsX]= useState(false)

 const changeValue=(index )=>{
   //console.log(index)
     const string = game
     string[index] = IsX ? "X":"O"
    // console.log(string)
      setGame(string)
      setIsX(!IsX)
 }
// console.log(game,"scs")
const reset =()=>{
  setGame(["","","","","","","","",""])
}

const winner=()=>{
    const lines =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

   for(let i=0 ;i<lines.length ;i++){
       const [a,b,c] = lines[i]
       if(game[a] === game[b] && game[a] === game[c] && game){
         return game[a]
       }
   }
   return null

}

useEffect(()=>{
 // console.log("exit")
    const win = winner()
    if(win ){
      console.log(win)
      alert(`winner is ${win}`)
      reset()
    }
})

  return (
    <div className="App">
     
    <p>simple game app of Tic-Tac-Toe</p>

    <div className="box">
       <div>
        <Square value={game[0]} changeValue={changeValue} index={0} />
        <Square value={game[3]} changeValue={changeValue} index={3} />
        <Square value={game[6]} changeValue={changeValue} index={6}/>
       </div>
       <div>
       <Square value={game[1]} changeValue={changeValue} index={1}/>
       <Square value={game[4]} changeValue={changeValue} index={4}/>
       <Square value={game[7]} changeValue={changeValue} index={7}/>

       </div>
       <div>
       <Square value={game[2]} changeValue={changeValue} index={2}/>
       <Square value={game[5]} changeValue={changeValue} index={5}/>
       <Square value={game[8]} changeValue={changeValue} index={8}/>

       </div>
    </div>
    <button onClick={reset}>Clear game </button>
    </div>
  );
}
