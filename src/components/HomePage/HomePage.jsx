import Banner from '../firstpage/components/banner/Banner';
import CategoryProduct from '../firstpage/components/category/CategoryProduct';
import Content from '../firstpage/components/content/Content';
import Footer from '../firstpage/components/footer/Footer';
import Showbar from '../firstpage/components/showBar/Showbar';
import Navlog from './components/Navlog/Navlog';
import ContentBestSeller from '/src/components/firstpage/components/content/ContentBestSeller'

const FirstPage = () => {
  return (
    <section className='relative z-0'>
      <Navlog/>
      <CategoryProduct/>
      
      <div className='bg-grey  p-5 z-10'>
        <Banner />
       
        
      <div className='p-1'>
        <Showbar />
        <div className= 'pb-[2rem] pt-[2rem]'>
          <Content />
        </div>
        <div className= 'pb-[2rem]'></div>
          <ContentBestSeller/>

      </div>
       
        

      </div> 
      <Footer />
     
      <div>

      </div>
    </section>
  )
}

export default FirstPage