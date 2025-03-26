import './App.css'

function App() {

  const hamburgers = [
    { id: 1, name: 'Classic Cheeseburger', price: '$8.99' },
    { id: 2, name: 'BBQ Bacon Burger', price: '$9.49' },
    { id: 3, name: 'Mushroom Swiss Burger', price: '$8.79' },
    { id: 4, name: 'Veggie Burger', price: '$7.99' },
    { id: 5, name: 'Double Decker Burger', price: '$10.99' },
  ];

  return (
    <ul>
      {hamburgers.map(hamburger => (
        <li key={hamburger.id}>
          <h3>{hamburger.name}</h3>
          <p>Price: {hamburger.price}</p>
        </li>
      ))}
    </ul>
  );
}

export default App
