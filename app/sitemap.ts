import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ombessa-joseph-darimathee.vercel.app'

  return [
    { url: `${baseUrl}/`,        lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`,   lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/skill`,   lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/projets`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/service`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/cv`, lastModified: new Date(), priority: 0.7 },
  ]
}

