import Banner from './components/banner/Banner'
import CategoryProduct from './components/category/CategoryProduct';
import Content from './components/content/Content'
import NavBar from './components/navbar/NavBar';
import Showbar from './components/showBar/Showbar';
import Footer from './components/footer/Footer';

const FirstPage = () => {
  return (
    <section>
      <NavBar/>
      <CategoryProduct/>
      <div className='bg-grey  p-5 '>
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