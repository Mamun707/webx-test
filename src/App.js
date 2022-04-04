import Header from './components/header/Index';
import Right from './components/right/Index';
import Left from './components/left/Index';
import data from './data';
import "./App.css"
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([])
  const [count, setCount] = useState(0)
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {

      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )

      );

    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      setCount(count + 1)
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      setCount(count - 1)
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );

    }
  };
  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      setCount(count - 1)
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="container-main">

        <Left
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove} count={count}
          onDelete={onDelete}

        ></Left>
        <Right products={products} onAdd={onAdd} ></Right>
      </div>

    </div>
  );
}

export default App;