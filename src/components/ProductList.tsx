
import { useCart } from '../hooks/useCart';
import { ProducCard } from './ProducCard'


export const ProductList = () => {

    const { products } = useCart();

  return (
    <section className='sm:mx-0 md:mx-5 lg:mt-10 lg:mx-10 col-span-2'>
        <h3 className='text-xl text-gray-950'>Productos disponibles</h3>
        <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                products.map((product)=>(
                    <ProducCard  key={product.id} product={product} />
                ))
            }
        </div>
    </section>
  )
}
