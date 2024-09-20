import Banner from '../firstpage/components/banner/Banner';
import CategoryProduct from '../firstpage/components/category/CategoryProduct';
import Content from '../firstpage/components/content/Content';
import Footer from '../firstpage/components/footer/Footer';
import Showbar from '../firstpage/components/showBar/Showbar';
import Navlog from './components/Navlog/Navlog';

const FirstPage = () => {
  return (
    <section className='relative'>
      <Navlog/>
      <div className='z-10'>
        <CategoryProduct/>
      </div>
      <div className='bg-grey  p-5 z-0'>
        <Banner />
        <Showbar />
        <Content />
       
        

      </div> 
      <Footer />
     
      <div>

      </div>
    </section>
  )
}

export default FirstPage