import { FaFacebook } from "react-icons/fa";
import { FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { MdOutlineSchedule } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import "../Footer/Footer.scss";
function Footer(){
    return(
    <div className="wrapper">
 <div id="foot">
 <div class="container_footer">
            <div class="topfoot">
                <div class="footmenu">
                    <h4>LIÊN HỆ</h4>
             
                    <p>Email:<a href="">       <span><TfiEmail size={20} style={{paddingRight:5}}></TfiEmail></span>phucly069@gmail.com</a>
                        <a href=""><TfiEmail size={20} style={{paddingRight:5}}></TfiEmail>lenguyenquochunghello@gmail.com </a>
                        <a href=""><TfiEmail size={20} style={{paddingRight:5}}></TfiEmail>nguyenbang.2301@gmail.com</a>
                    </p>
                    <p>Hotline:<a href=""><span><FaPhoneVolume /></span> 1900 633 028</a>
                    </p>
                    <p>Mon-Sun<a href=""><span><MdOutlineSchedule /></span> 09:30 - 21:30</a>
                    </p>
                </div>
                <div class="footmenu">
                    <h4>CỬA HÀNG</h4>
                    <p>273 An Dương Vương,TPHCM <br></br></p>
                    <p>123 Alexander, Toronto, Canada <br></br></p>
                    <p>842 Donald, California, America <br></br></p>
                </div>
                <div class="footmenu">
                    <h4>HỖ TRỢ</h4>
                    <a href="/Policy">Chính sách đổi trả & bảo hành</a>
                </div>
                <div class="footmenu">
                    <h4>MỞ RỘNG</h4>
                    <a href="https://www.facebook.com/"><TfiEmail size={25}></TfiEmail></a>
                    <a href="https://www.instagram.com/"><FaFacebook size={25}/></a>
                    <a href="https://twitter.com/?lang=vi"><FaXTwitter size={25}/></a>
                </div>
                
            </div>
            <div class="botfoot" >
                <p>2022 &#169; Copyright NVIDIA. All Rights Reserved.</p>
            </div>
        </div>
 </div>
    </div>
    )
}
export default Footer;