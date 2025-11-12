
import type { Product } from '../types/product.type';
import { ProducCard } from './ProducCard'

interface Props {
    onAddCart: (product: Product) => void;
    products: Product[]
}

export const ProductList = ({ onAddCart, products }: Props) => {
  return (
    <section className='flex-2'>
        <h3 className='text-xl text-gray-950'>Productos disponibles</h3>
        <div className='grid grid-cols-3 gap-5'>
            {
                products.map((product)=>(
                    <ProducCard  onAddCart={onAddCart} key={product.id} product={product} />
                ))
            }
        </div>
    </section>
  )
}
