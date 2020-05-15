import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const products = [
    {name: 'Photoshop', price: '$60.00'}, 
    {name:'illustrator', price: '$52.00'}, 
    {name: 'Adove Reader', price: '$20.00'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>React Website</p>
        <Users></Users>
        <Counter></Counter>

        {products.map(product => <Product product={products.name}></Product>)}

        <Product product={products[0].name} price={products[0].price}></Product>
        <Product product={products[1].name} price={products[1].price}></Product>
        <Product product={products[2].name} price={products[2].price}></Product>

        <Person name="Shamsul" job="Athlets"></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

/*Fetch useState*/

function Users (){
const [user, setUsers]= useState([]);
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
}, [])
  return(
    <div>
      <h1>User Data Dynamic</h1>
      <ul>
        {user.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

/*use State*/

function Counter(){
  const [count, setCount] = useState(10);
  const addIncrease = () => setCount(count+1);
  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={addIncrease}>Add</button>
      <button onClick={() => setCount(count-1)}>Minus</button>
    </div>
  )
}

/*product function*/
function Product (props){
  const productStyle ={
    height: '200px', 
    width: '200px', 
    backgroundColor: 'lightgray', 
    color: 'black', 
    float: 'left', 
    margin: '10px', 
    padding: '10px'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product}</h3>
      <p>{props.price}</p>
      <button>Buy Now</button>
    </div>
  )

}

/*person function*/
function Person (props){
  const personStyle = {
    border: '2px solid yellow', 
    margin: '10px',
    width: '400px'
  }
  return (
  <div style={personStyle}>
    <h1>My Name: {props.name}</h1>
    <h3>Profession: {props.job}</h3>
  </div>
  )
}


export default App;
