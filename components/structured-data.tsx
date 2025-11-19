export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://gtiq.gneraitiq.com'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GTiQ',
    url: baseUrl,
    logo: `${baseUrl}/logo png.png`,
    description: 'Control horario inteligente para empresas modernas. Sistema de fichaje con geolocalización que cumple con la normativa española.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-744-769-246',
      contactType: 'Atención al cliente',
      email: 'info@gneraitiq.com',
      areaServed: 'ES',
      availableLanguage: 'Spanish',
    },
    sameAs: [
      'https://www.linkedin.com/company/gnerai/',
      'https://www.instagram.com/_gnerai_/',
    ],
    foundingDate: '2025',
    founder: {
      '@type': 'Organization',
      name: 'GNERAI',
    },
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GTiQ',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '119',
      priceCurrency: 'EUR',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}#pricing-section`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    description: 'Sistema de control horario con geolocalización que cumple con la normativa española de fichaje.',
    featureList: [
      'Fichajes con geolocalización',
      'Informes automáticos',
      'Gestión de ausencias y pausas',
      'Multi-centro y multi-rol',
      'Compatible con normativa española',
      'Acceso desde cualquier dispositivo',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GTiQ',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: baseUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}


