import { CartList } from './components/CartList';
import { Navbar } from './components/Navbar'
import { ProductList } from './components/ProductList'
import { useCart } from './hooks/useCart';

function App() {
  const { products, cart, query, handleInputChange, onAddCart } = useCart();

  return (
    <main>
      <Navbar cart={cart} />
      <input value={query} onChange={({ target }) => handleInputChange(target.value)} type="text" placeholder='buscar productos' className='mx-4 border-zinc-100' />
      <div className='flex flex-row'>
        <ProductList products={products} onAddCart={onAddCart} />
        <CartList cart={cart} />
      </div>
    </main>
  )
}

export default App
