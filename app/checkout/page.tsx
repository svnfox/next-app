// app/checkout/page.tsx
export default function CheckoutPage() {
    return (
        <div>
            <h2>结账页面</h2>
            <form>
                <label>
                    姓名：
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    地址：
                    <input type="text" name="address" />
                </label>
                <br />
                <button type="submit">提交订单</button>
            </form>
        </div>
    );
}
