import React from 'react';

const SITE_URL = 'https://clintonstack.com';

export default function Head() {
  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ClintonStack Technologies',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: [
      'https://www.linkedin.com/in/clinton-ochieng-706263351',
      'https://www.instagram.com/clintonstack',
      'https://github.com/clintonstack',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+254768524480',
        contactType: 'customer service',
      },
    ],
  };

  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ClintonStack Technologies',
    telephone: '+254768524480',
    url: SITE_URL,
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0B3D91" />
      <link rel="icon" href="/favicon.svg" />
      <link rel="canonical" href={SITE_URL} />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(jsonLdOrganization)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdLocalBusiness)}</script>
    </>
  );
}
