import type React from 'react';

interface ProductSchemaProps {
  siteUrl?: string;
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({ siteUrl }) => {
  const baseUrl = siteUrl || 'https://www.heqingcnc.com';

  const products = [
    {
      name: 'HQ-1530 Fiber Laser Cutting Machine',
      description: 'High-speed fiber laser cutting machine with 1500×3000mm working area. 1500W-6000W power options.',
      category: 'Laser Cutting Machine',
      url: `${baseUrl}/products/hq1530`,
      image: `${baseUrl}/images/products/3015-single-platform-fiber-cutter.jpg`,
    },
    {
      name: 'HQ26 Air-Cooled Laser Welding Machine',
      description: 'Portable air-cooled fiber laser welder. 1000W-2000W power options. No chiller needed.',
      category: 'Laser Welding Machine',
      url: `${baseUrl}/products/hq26a`,
      image: `${baseUrl}/images/products/hq26a-air-cooled-welder.png`,
    },
    {
      name: 'Pulsed Laser Cleaning Machine',
      description: 'Non-contact pulsed laser cleaning with JPT laser source. 100W-300W options.',
      category: 'Laser Cleaning Machine',
      url: `${baseUrl}/products/pulse-cleaning`,
      image: `${baseUrl}/images/products/pulse-laser-cleaner.jpg`,
    },
    {
      name: 'Nitrogen Generator',
      description: 'PSA nitrogen generator for laser cutting assist gas. 99.999% purity.',
      category: 'Supporting Equipment',
      url: `${baseUrl}/products/nitrogen-generator`,
      image: `${baseUrl}/images/products/nitrogen-generator.jpg`,
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        category: product.category,
        url: product.url,
        image: product.image,
        manufacturer: {
          '@type': 'Organization',
          name: 'Heqing Laser',
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductSchema;
