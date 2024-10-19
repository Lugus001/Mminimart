import { defineComponent } from 'vue'
import FB from '../assets/FB.png'
import skincare from '../assets/skincare.png'
import tooth from '../assets/tooth.png'
import shirt from '../assets/shirt.png'
import plug from '../assets/plug.png'
import excer from '../assets/excer.png'
import kids from '../assets/kids.png'
import drug from '../assets/drug.png'
import other from '../assets/other.png'
import '../style/catagory.css'

export default defineComponent({
  name: 'catagory',
  setup() {
    return () => (
      <nav class=".catagory-container">
        <div class="catagory">
          <div class="headText-container">
            <span class="headText">หมวดหมู่ทั้งหมด</span>
          </div>
          <div class="main-container">
            <img src={FB} alt="FB" class="logo-cata" />
            <div class="mainText-container">
              <span class="text">อาหารและเครื่องดื่ม</span>
              <div class='rightPi-container' style="margin-left: 25px">
                 <i class='pi pi-angle-right' /*onClick={}*/></i>
              </div>
            </div>
          </div>
          <div class="main-container">
            <img src={skincare} alt="skincare" class="logo-cata" />
            <div class="mainText-container">
              <span class="text">ของใช้ส่วนตัว</span>
              <div class='rightPi-container' style="margin-left: 60px">
                 <i class='pi pi-angle-right ' /*onClick={}*/></i>
              </div>
            </div>
          </div>
          <div class="main-container">
            <img src={tooth} alt="tooth" class="logo-cata" />
            <div class="mainText-container">
              <span class="text">ของใช้ในบ้าน</span>
              <div class='rightPi-container' style="margin-left: 65px">
                 <i class='pi pi-angle-right ' /*onClick={}*/></i>
              </div>
            </div>
          </div>
          <div class="main-container">
            <img src={shirt} alt="tooth" class="logo-cata" />
            <div class="mainText-container">
              <span class="text">เสื้อผ้า</span>
              <div class='rightPi-container' style="margin-left: 109px">
                 <i class='pi pi-angle-right ' /*onClick={}*/></i>
              </div>
            </div>
          </div>
          <div class="main-container">
            <img src={plug} alt="plug" class="logo-cata" />
            <div class="mainText-container">
              <span class="text">อุปกรณ์อิเล็กทรอนิกส์</span>
              <div class='rightPi-container' style="margin-left: 5px">
                 <i class='pi pi-angle-right ' /*onClick={}*/></i>
              </div>
            </div>
          </div>
          <div class="main-container">
            <img src={excer} alt="excer" class="logo-cata" />
            <div class="mainText-container">
              <span class="text">กีฬาและสันทนาการ</span>
              <div class='rightPi-container' style="margin-left: 27px">
                 <i class='pi pi-angle-right ' /*onClick={}*/></i>
              </div>
            </div>
          </div>
          <div class="main-container">
            <img src={kids} alt="kids" class="logo-cata" />
            <div class="mainText-container">
              <span class="text">สินค้าสำหรับเด็ก</span>
              <div class='rightPi-container' style="margin-left: 40px">
                 <i class='pi pi-angle-right ' /*onClick={}*/></i>
              </div>
            </div>
          </div>
          <div class="main-container">
            <img src={drug} alt="drug" class="logo-cata" />
            <div class="mainText-container">
              <span class="text">ยาและเวชภัณฑ์</span>
              <div class='rightPi-container' style="margin-left: 45px">
                 <i class='pi pi-angle-right ' /*onClick={}*/></i>
              </div>
            </div>
          </div>
          <div class="main-container">
            <img src={other} alt="other" class="logo-cata" />
            <div class="mainText-container">
              <span class="text">สินค้าอื่นๆ</span>
              <div class='rightPi-container' style="margin-left: 78px">
                 <i class='pi pi-angle-right ' /*onClick={}*/></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
})
