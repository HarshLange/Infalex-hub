/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. Next.js 15 currently has a circular dependency bug
    // with eslint-config-next.
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://*.google-analytics.com",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: '/blog/stop-sending-resume-into-black-hole', destination: '/blog/ats-rejection-fix', permanent: true },
      { source: '/blog/ultimate-guide-best-ats-resume-format', destination: '/blog/best-ats-resume-format', permanent: true },
      { source: '/blog/best-resume-format-bca-students', destination: '/blog/best-resume-format-bca-students-india', permanent: true },
      { source: '/blog/7-resume-mistakes', destination: '/blog/common-resume-mistakes', permanent: true },
      { source: '/blog/how-long-should-resume-be', destination: '/blog/how-long-should-a-resume-be', permanent: true },
      { source: '/blog/resume-vs-cv-differences', destination: '/blog/resume-vs-cv-difference-guide', permanent: true },
      { source: '/blog/top-resume-keywords', destination: '/blog/top-resume-keywords-recruiters-look', permanent: true },
      { source: '/blog/welcome', destination: '/blog/welcome-to-infalex', permanent: true },
    ];
  },
};

module.exports = nextConfig;
