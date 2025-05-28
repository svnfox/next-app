// app/layout.tsx
import './globals.css'; // 假设有全局 CSS
import Link from 'next/link';
import localFont from 'next/font/local'
import React from "react";

// 配置本地字体
const alibabaFont = localFont({
    src: '../public/fonts/AlibabaPuHuiTi-3-65-Medium.woff2',
    weight: '500', // 根据字体定义填写（例如 Medium 可写 500）
    style: 'normal',
    variable: '--font-alibaba',
    display: 'swap',
})

export default function RootLayout({
                                     children,
                                     inbox, // 对应 @inbox 并行路由槽
                                   }: {
  children: React.ReactNode;
  inbox: React.ReactNode;
}) {
  return (
      <html lang="zh-CN" className={alibabaFont.variable}>
      <body>
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-100 p-4 border-r">
          <h2 className="text-2xl font-bold mb-4">邮箱导航</h2>
          <nav>
            <ul>
              <li><Link href="/" className="block py-2 text-blue-600 hover:underline">收件箱</Link></li>
              <li><Link href="/settings" className="block py-2 text-blue-600 hover:underline">设置</Link></li>
            </ul>
          </nav>
          <div className="mt-8">
            {/* 这里渲染 @inbox 并行路由的内容 */}
            {inbox}
          </div>
        </aside>
        <main className="flex-1 p-8">
          {children} {/* 这里的 children 将是 /app/page.tsx 或 /app/email/[id]/default.tsx 的内容 */}
        </main>
      </div>
      </body>
      </html>
  );
}
