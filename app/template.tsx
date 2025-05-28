// app/template.tsx
export default function GlobalTemplate({ children }: { children: React.ReactNode }) {
    const now = new Date().toLocaleTimeString();

    return (
        <div style={{ padding: "1rem", border: "2px dashed #999" }}>
            <header>
                <h1>🌀 全局模板（template.tsx）</h1>
                <p>当前时间：{now}（每次访问页面都会更新）</p>
            </header>
            <main>{children}</main>
        </div>
    );
}
