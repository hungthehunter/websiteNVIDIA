import "../Customer/CustomerOrderDetail.scss";
function CustomerOrderDetail(){
return(
    <div className="CustomerOrderDetail">
         <header>
        <nav>
            <ul class="navbar-list">
              
                <li class="left">
                    <a href="productAdmin.html">
                    <img src="../../img/thegioididong.png"/>
                    </a>
                </li>
                <div class="right">
                    <li>
                        <input type="text" placeholder="Tên sản phẩm..."/> 
                        <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                    </li>
                    <li>
                        <i class="fa-solid fa-circle-user"></i> Admin
                    </li>
                </div>
            </ul>
    </nav>
    </header>
    <main>
        <aside id="mySidebar">
            <ul>
                <li><a onclick="w3_close()">Đóng &times;</a></li>
                <li><a href="orderAdmin.html">Đơn hàng</a></li>
                <li><a href="userAdmin.html">Người dùng</a></li>
            
            </ul>
        </aside>
        <section id="main">
            <button id="openNav" class="menu-button" onclick="w3_open()">&#9776; Menu</button>
            <h2>Chi Tiết Đơn Hàng</h2>
            <h1>Danh sách sản phẩm</h1>
            <hr/>
            <table>

            <tr class="title">
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Tổng</th>
            </tr>
            <tr class="product">
                <td><a href=""><img src="" alt="lap1"/></a></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="product">
                <td><a href="productDetail.html"><img src="" alt="lap1"/></a></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="product">
                <td><a href=""><img src="" alt="lap2"/></a></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
        <div id="main_infor"> 
            <h1>Chi tiết đơn hàng</h1>
            <hr/>
                <form action="#">
                    <div class="info"> 
                        <label for="product_brand">Họ tên</label>
                        <input type="text" value="" disabled/>
                    </div>
                    <div class="info">
                        <label for="product_price">Điện thoại</label>
                        <input type="text" value="" disabled/>
                    </div>
                    <div class="info">
                        <label for="product_ram">Địa chỉ</label>
                        <input type="text" value="" disabled/>
                    </div>
                    <div class="option">
                        <label for="product_quantity">Trạng thái</label>
                        <label for="option1">Chưa xử lý</label>
                        <input type="radio" id="option" name="option" value="chuaXuLy" checked/>
                        <label for="option2">Đã xử lý</label>
                        <input type="radio" id="option" name="option" value="daXuLy"/>
                    </div>
                    
                    <div class="buttons">
                        <a href="orderAdmin.html"><i class="fa-solid fa-x"></i>Đóng</a>
                        <a onclick="warning()"><i class="fa-solid fa-download"></i>Lưu</a>
                    </div>
                </form>
                </div>
        </section> 
    </main>
    </div>
)
}
export default CustomerOrderDetail;