function App() {
  let list = [

    { id: 1, username: "Pratik" },
    { id: 2, username: "Rahul" },
  ];
  
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.id} and {item.username}
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default App;