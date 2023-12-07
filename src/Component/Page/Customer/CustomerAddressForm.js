import "./CustomerAddressForm.scss";
function CustomerAddressForm(){
return(
    <div className="CustomerAddressForm">
        <section>
        <h1>Địa Chỉ</h1>
        <form action="address.html">
            <div class="input-field">
                <label for="name">Họ Tên:</label>
                <input type="text" id="name" name="name" placeholder="Nhập tên của bạn" required=""/>
            </div>
            <div class="input-field">
                <label for="phone">Số Điện Thoại:</label>
                <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại của bạn" required=""/>
            </div>
            <div class="input-field">
                <label for="address">Địa Chỉ:</label>
                <input type="text" id="address" name="address" placeholder="Nhập địa chỉ của bạn" required=""/>
            </div>
            <button>HOÀN THÀNH</button>
        </form>
    </section>
    </div>
)
}
export default CustomerAddressForm;