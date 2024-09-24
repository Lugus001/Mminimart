import Banner from '../firstpage/components/banner/Banner';
import CategoryProduct from '../firstpage/components/category/CategoryProduct';
import Footer from '../firstpage/components/footer/Footer';
import Showbar from '../firstpage/components/showBar/Showbar';
import Navlog from './components/Navlog/Navlog';
import BasketCard from './components/ฺbasket/BasketCard';
import { CartProvider } from './components/ฺbasket/context/CartContext';
const HomePage = () => {
  return (
    <CartProvider>
    <section className='relative z-0'>
      <Navlog/>
      <CategoryProduct/>
      
      <div className='bg-grey  p-5 z-10'>
        <Banner />
       
        
      <div className='p-1'>
        <Showbar />
        <div className='pb-[2rem] pt-[2rem]'>
        <BasketCard/>
          </div>
        <div className= 'pb-[2rem]'></div>

      </div>
       
        

      </div> 
      <Footer />
     
      <div>

      </div>
    </section>
    </CartProvider>

  )
}

export default HomePage