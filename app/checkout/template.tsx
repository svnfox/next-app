// app/checkout/template.tsx
export default function CheckoutTemplate({ children }: { children: React.ReactNode }) {
    const now = new Date().toLocaleString();

    return (
        <div>
            <header>
                <h1>欢迎进入结账流程</h1>
                <p>当前时间：{now}</p>
            </header>
            <hr />
            <main>{children}</main>
        </div>
    );
}
