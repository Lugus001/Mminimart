import { defineComponent, ref } from "vue";
import "../style/tabbar.css";
import CatagoryPro from "../components/catagoryPro";
export default defineComponent({
    name: 'tabbar',
    setup() {
      const showCategoryPro = ref(false);

      const handleClick = () => {
        showCategoryPro.value = !showCategoryPro.value;
      }
        return () => (
            <nav class='catalog-container'>
                <div class='text-container'>
        
                    <text class='text'>หมวดหมู่สินค้า</text>
                </div>
                    <div class='pi-container'>
                        <i class='pi pi-angle-right' onClick={handleClick}></i>
                    </div>
                    {showCategoryPro.value && <CatagoryPro />}
    
                
            </nav>

        )
    }
});