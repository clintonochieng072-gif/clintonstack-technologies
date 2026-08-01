import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://clintonstack.com';
  const pages = ['/', '/portfolio'];
  const portfolioSlugs = ['smartchems-cleaning', 'albright-ventures', 'sashmu-limited', 'hiltech-repairs'];

  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${baseUrl}${p}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n');

  const portfolioUrls = portfolioSlugs
    .map(
      (s) => `  <url>
    <loc>${baseUrl}/portfolio/${s}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${portfolioUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
