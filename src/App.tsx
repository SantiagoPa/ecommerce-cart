import { CartList } from './components/CartList';
import { Navbar } from './components/Navbar'
import { ProductList } from './components/ProductList'
import { useCart } from './hooks/useCart';

function App() {
  const { products, cart, query, handleInputChange, onAddCart } = useCart();

  return (
    <main className='mx-10 p-2'>
      <Navbar cart={cart} />
      <section className='bg-gray-50 mx-10 p-2'>
        <input 
          value={query} 
          onChange={({ target }) => handleInputChange(target.value)} 
          type="text" 
          placeholder='buscar productos' 
          className='mx-4 border-2 border-slate-800 rounded-lg px-2 min-w-1/4' 
        />
        <div className='flex flex-row'>
          <ProductList products={products} onAddCart={onAddCart} />
          <CartList cart={cart} />
        </div>
      </section>
    </main>
  )
}

export default App
