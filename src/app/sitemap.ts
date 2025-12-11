import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add other routes here if you have more pages like /about, /projects, etc.
        // {
        //   url: `${siteConfig.url}/about`,
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
    ]
}
