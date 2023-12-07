function orderAdmin(){
<div className="orderAdmin">
<head>
        <header>
            <nav>
                <ul class="navbar-list">
                    <li class="left">
                        <a href="productAdmin.html">
                        <img src=""/>
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
    </head>
<main>
    <aside id="mySidebar">
        <ul>
            <li><a onclick="w3_close()">Đóng &times;</a></li>
            <li><a class="active">Đơn hàng</a></li>
            <li><a href="userAdmin.html">Người dùng</a></li>
        </ul>
    </aside>
    <section id="main">
        <button id="openNav" class="menu-button" onclick="w3_open()">&#9776; Menu</button>
        <h1>Đơn Hàng</h1>

        <div class="filter">
            <div class="date">
                <label for="start">Từ ngày: </label>
                    <input type="date" id="start" name="start" value="2023-11-24" min="2018-01-01" max="2023-12-31"/>
                    <label for="start">đến </label>
                    <input type="date" id="end" name="end" value="2023-11-30" min="2018-01-01" max="2023-12-31"/>
            </div>
            <a href="orderAdmin.html" class="show">Xem</a>
        </div>
        <table>
 
            <tr class="title">
                <th>ID</th>
                <th>Đơn hàng</th>
                <th>Địa chỉ</th>
                <th>Thành tiền</th>
                <th>Trạng thái</th>
            </tr>
        
            <tr class="product">
                <td>#1</td>
                <td>
                    <a href="orderDetail.html">
                    <img src="" alt="lap1"/>
                    <div>
                        <p></p>
                        <p></p>
                        <p class="another">(2 sản phẩm khác)</p>
                    </div>
                    </a>
                </td>
                <td></td>
                <td></td>
                <td class="state"></td>
            </tr>
            <tr class="product">
                <td>#2</td>
                <td>
                    <a href="orderDetail.html">
                        <img src="" alt="lap1"/>
                        <div>
                            <p></p>
                            <p></p>
                            <p class="another">(2 sản phẩm khác)</p>
                        </div>
                    </a>
                </td>
                <td></td>
                <td></td>
                <td class="state">Đã nhận</td>
            </tr>
            <tr class="product">
                <td>#3</td>
                <td>
                    <a href="orderDetail.html">
                        <img src="" alt="lap1"/>
                        <div>
                            <p></p>
                            <p></p>
                            <p class="another">(2 sản phẩm khác)</p>
                        </div>
                    </a>
                </td>
                <td></td>
                <td></td>
                <td class="state">Đã nhận</td>
            </tr>
            <tr class="product">
                <td>#4</td>
                <td>
                    <a href="orderDetail.html">
                        <img src="" alt="lap1"/>
                        <div>
                            <p></p>
                            <p></p>
                            <p class="another">(2 sản phẩm khác)</p>
                        </div>
                    </a>
                </td>
                <td></td>
                <td></td>
                <td class="state">Đã nhận</td>
            </tr>
        </table>
    </section>
</main>
</div>
}
export default orderAdmin;