import { Toast } from "./components/Alert";
import { CartList } from "./components/CartList";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { useCart } from "./hooks/useCart"

export const AppEcommerce = () => {

    const { toast, query, handleInputChange } = useCart();
  return (
    <main className='sm:mx-0 md:mx-5 lg:mx-10 px-2'>
      <Toast isActive={toast.isActive} variant={toast.variant}  title={toast.title} description={toast.description} />
      <Navbar />
      <section className='bg-gray-50 sm:mx-0 md:mx-5 lg:mx-10 p-2'>
        <input 
          value={query} 
          onChange={({ target }) => handleInputChange(target.value)} 
          type="text" 
          placeholder='buscar productos...' 
          className='mx-4 border-2 border-slate-800 rounded-lg px-2 min-w-1/4' 
        />
        <div className='grid sm:grid-cols-1 lg:grid-cols-3'>
          <ProductList />
          <CartList  />
        </div>
      </section>
    </main>
  )
}
