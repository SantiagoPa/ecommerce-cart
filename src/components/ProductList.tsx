
import { useCart } from '../hooks/useCart';
import { ProducCard } from './ProducCard'


export const ProductList = () => {

    const { products } = useCart();

  return (
    <section className='flex-2 mt-10 mx-10'>
        <h3 className='text-xl text-gray-950'>Productos disponibles</h3>
        <div className='grid grid-cols-3 gap-5'>
            {
                products.map((product)=>(
                    <ProducCard  key={product.id} product={product} />
                ))
            }
        </div>
    </section>
  )
}
