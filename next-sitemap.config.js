// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://yourdomain.com',  // ✅ 替换为你自己的域名
    generateRobotsTxt: true,            // ✅ 自动生成 robots.txt
    // 可选配置项：
    sitemapSize: 7000,                  // 默认 5000，适合大站点
    changefreq: 'daily',
    priority: 0.7,
    trailingSlash: false,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: 'BadBot', disallow: '/' },
        ],
    },
}
