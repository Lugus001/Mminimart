import { defineComponent } from 'vue'
import banner from '../assets/Banner.png'
import '../style/banner.css'
export default defineComponent({
  name: 'banner',
  setup() {
    return () => (
      <nav class="banner">
        <div class="banner-container">
          <img src={banner} alt="banner" class="logo-bn" />
          
        </div>
      </nav>
    )
  }
})
