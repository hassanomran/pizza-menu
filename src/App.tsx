import "./App.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
    return (
        <div className="container">
          <Header/>
          <Menu/>
          <Footer/>
        </div>
    );
}
function Header(){
  // const Style={color:"red",fontSize:"48px",texttransform:"uppercase"};
  const Style={};

  return <header  className="header footer">  <h1 style={Style}>Fast React Pizza Co.</h1>
</header>
}
function Menu(){
  const pizzas = pizzaData;
  const availablepizza = pizzas.length;
  return <main className="menu">
    <h2>Our Menu</h2>
    {availablepizza > 0 ?(
        <ul className="pizzas">{pizzaData.map((pizza) =>(<Pizza pizzaObj={pizza} key={pizza.name}/>))}  
        </ul>
        ) :(<p>we're still working on pur menu . please come back later.</p>)

    }
  </main>
}
function Footer(){
  const hour = new Date().getHours();
  const opendhour = 12;
  const closedhour = 22;
  const isOpen = opendhour <= hour && closedhour >=hour;
  return <footer className="footer">
    {isOpen &&(
    <div className="order">
      <p>
       We're currentlu Open untill {closedhour}:00. come visit us or order.
      </p>
      <button className="btn">order</button>
    </div>
    )}
   </footer>
}

function Pizza(Props:any) {
  console.log(Props.pizzaObj);
  return (
      <li className="pizza">
              <div key={Props.pizzaObj.name}>
                <img src={Props.pizzaObj.photoName} alt={Props.pizzaObj.name}  />
                  <h3>{Props.pizzaObj.name}</h3>
                  <p>{Props.pizzaObj.ingredients}</p>
                  <p>Price: ${Props.pizzaObj.price}</p>
                  
              </div>
      </li>
  );
}

export default App;
