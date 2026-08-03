import type React from 'react';

interface OrganizationSchemaProps {
  siteUrl?: string;
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({ siteUrl }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Heqing Laser',
    alternateName: 'HQ Laser',
    url: siteUrl || 'https://www.hqlaser.com',
    logo: `${siteUrl || 'https://www.hqlaser.com'}/images/logo.png`,
    description:
      'Professional laser equipment manufacturer specializing in fiber laser cutting, welding, cleaning, and marking machines.',
    foundingDate: '2019',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Shandong',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      availableLanguage: ['English', 'Chinese'],
    },
    sameAs: [
      'https://www.facebook.com/heqinglaser',
      'https://www.youtube.com/@heqinglaser',
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 200,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Laser Equipment',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Laser Cutting Machines',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Laser Welding Machines',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Laser Cleaning Machines',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Laser Marking Machines',
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
