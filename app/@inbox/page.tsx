// app/@inbox/page.tsx
import Link from 'next/link';

const emails = [
    { id: '1', subject: '欢迎使用邮箱应用！', sender: '系统管理员' },
    { id: '2', subject: '项目会议纪要', sender: '张三' },
    { id: '3', subject: '重要通知：您的账户更新', sender: '李四' },
];

export default function InboxList() {
    return (
        <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-4">收件箱</h3>
            <ul>

                {emails.map(email => (
                    <li key={email.id} className="border-b last:border-b-0 py-2">
                        <Link href={`/email/${email.id}`} className="block hover:bg-gray-50 p-2 rounded -mx-2">
                            <p className="font-medium">{email.sender}</p>
                            <p className="text-gray-700 text-sm">{email.subject}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
