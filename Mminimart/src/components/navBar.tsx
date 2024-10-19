import { defineComponent,ref } from 'vue';
import '../style/navBar.css'; 
import Logo from '../assets/Logo.png';
import basket from '../assets/basket.png';


export default defineComponent({
  name: 'navBar',
  setup() {
    const productCount = ref(5);

    return () => (
      <nav class="navBar">
        <div class="navBar-container">
          <img src={Logo} alt="Brand Logo" class="logo" />
          <div class="search-container">

            <input type="text" class="searchBar" placeholder="ค้นหาสินค้า..." />
            <button class="searchButton">ค้นหา</button>
          </div>

          <div class="basket-container">
            <img src={basket} alt="Basket" class="basket-logo" />
              {productCount.value > 0 && (
              <span class="product-count-badge">{productCount.value}</span>
            )}
          </div>
              <button class="loginButton">
              เข้าสู่ระบบ
            </button>
          </div>
          
      </nav>
    );
  }
});
