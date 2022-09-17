
//JSX = Javascript XML
//Needs to return tag
//Strict - only one parent tag

function App() {
  let username = "cdac";
  const id = "id2";
  let ref = { id:1, username:"Pratik",
  id:2, username:"Jadhav",
  id:3, username:"Satara"}
                                    
  let list = ["Pratik", "Patil", "Rahul"];

  const sayHello = (e) =>{
    console.log(e);
  }
  const sum = () =>{
    console.log("I am function");
  }
  return (
    <div>
      <h1>Hello world / Rendered!</h1>
      {/* Interpolation demo with help of interpollatoion we can write any javascript syntax*/ }

      {/*attribute level interpolation*/}
      <h1 id={id}>{username}</h1>
      {/* <h1>{ref.id}</h1>
      <h1>{ref.username}</h1> */}
      <h1>{JSON.stringify(ref)}</h1>
      <h1>{list }</h1>
      <h1>{sum()}</h1>
      <input type="button" value="ok" onClick={sayHello}/>
    </div>
  );
}
// ES6 syntax
export default App;
