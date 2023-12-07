function userAdmin(){
return(

    <div className="userAdmin">
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

            <aside id="mySidebar">
				<ul>
					<li><a onclick="w3_close()">Đóng &times;</a></li>
					<li><a href="orderAdmin.html">Đơn hàng</a></li>
					<li><a class="active">Người dùng</a></li>
				</ul>
			</aside>
            <section id="main">
                <button id="openNav" class="menu-button" onclick="w3_open()">&#9776; Menu</button>
                <h1>Người Dùng</h1>

                <table>
            
                    <tr class="title">
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Người dùng</th>
                        <th>Email</th>
                        <th>Loại người dùng</th>
                        <th>Chức năng</th> 
                        <th>Khóa người dùng</th>
                    </tr>
      
                    <tr class="user">
                        <td>#1</td>
                        <td/><a href="userDetail.html"><img src="" alt="per1"/></a>
                        <td></td>
                        <td></td>
                        <td>Admin</td>
                        <td>
                            <a href="editUser.html" class="action-button">
                                <i class="fas fa-edit"></i>
                                <div class="action-tooltip">Chỉnh sửa</div>
                            </a>
                            <a class="action-button" onclick="warning(this)">
                                <i class="fas fa-trash-alt"></i>
                                <div class="action-tooltip">Xóa</div>
                            </a>
                        </td>
                        <td>
                            <input type="checkbox"/>
                        </td>
                    </tr>
                    <tr class="user">
                        <td>#2</td>
                        <td/><a href="userDetail.html"><img src="" alt="per1"/></a>
                        <td></td>
                        <td></td>
                        <td>Admin</td>
                        <td>
                            <a href="editUser.html" class="action-button">
                                <i class="fas fa-edit"></i>
                                <div class="action-tooltip">Chỉnh sửa</div>
                            </a>
                            <a class="action-button" onclick="warning(this)">
                                <i class="fas fa-trash-alt"></i>
                                <div class="action-tooltip">Xóa</div>
                            </a>
                        </td>
                        <td>
                            <input type="checkbox"/>
                        </td>
                    </tr>
                    <tr class="user">
                        <td>#3</td>
                        <td/><a href="userDetail.html"><img src="" alt="per1"/></a>
                        <td></td>
                        <td></td>
                        <td>Admin</td>
                        <td>
                            <a href="editUser.html" class="action-button">
                                <i class="fas fa-edit"></i>
                                <div class="action-tooltip">Chỉnh sửa</div>
                            </a>
                            <a class="action-button" onclick="warning(this)">
                                <i class="fas fa-trash-alt"></i>
                                <div class="action-tooltip">Xóa</div>
                            </a>
                        </td>
                        <td>
                            <input type="checkbox"/>
                        </td>
                    </tr>
                </table>

            </section>
    </div>
)
}
export default userAdmin;