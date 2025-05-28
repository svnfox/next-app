import type { Metadata } from "next";

// 导出页面特有的元数据对象
export const metadata: Metadata = {
    title: '关于我们 - My Awesome Next.js App', // 这会覆盖父级（root layout）的title
    description: '了解我们公司、我们的使命和团队。',
    keywords: ['关于', '公司', '团队', '使命'],
    // 其他关于此页面的元数据
};

export default function Login() {
    return (
        <div>
            <h2>登录页面</h2>
            <form>
                <label>
                    用户名：
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    密码：
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">登录</button>
            </form>
        </div>
    )
}
