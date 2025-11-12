import { CartList } from "./components/CartList";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { useCart } from "./hooks/useCart"

export const AppEcommerce = () => {

    const { query, handleInputChange } = useCart();
  return (
    <main className='mx-10 px-2'>
      <Navbar />
      <section className='bg-gray-50 mx-10 p-2'>
        <input 
          value={query} 
          onChange={({ target }) => handleInputChange(target.value)} 
          type="text" 
          placeholder='buscar productos...' 
          className='mx-4 border-2 border-slate-800 rounded-lg px-2 min-w-1/4' 
        />
        <div className='flex flex-row'>
          <ProductList />
          <CartList  />
        </div>
      </section>
    </main>
  )
}
