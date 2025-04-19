import { MetadataRoute } from "next";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

// Expanded query to get more data for better sitemap generation
const projectQuery = groq`
  *[_type == "project"] {
    slug,
    _updatedAt,
    categories[]->name
  } 
`;

// Add additional content types if you have them
const serviceQuery = groq`
  *[_type == "service"] {
    slug,
    _updatedAt
  } 
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch all project data
    const projects = await client.fetch(projectQuery);
    
    // Create project entries with smart priorities
    const projectEntries: MetadataRoute.Sitemap = projects.map((project: any) => {
      // Determine priority based on categories or other factors
      // Example: Featured projects get higher priority
      const isFeatured = project.categories?.includes('Featured');
      
      return {
        url: `https://www.webdev-al.com/portfolio/${project.slug.current}`,
        lastModified: project._updatedAt ? new Date(project._updatedAt) : new Date(),
        changeFrequency: 'monthly',
        priority: isFeatured ? 0.9 : 0.7,
      };
    });

    // Try to fetch services if they exist
    let serviceEntries: MetadataRoute.Sitemap = [];
    try {
      const services = await client.fetch(serviceQuery);
      serviceEntries = services.map((service: any) => ({
        url: `https://www.webdev-al.com/services/${service.slug.current}`,
        lastModified: service._updatedAt ? new Date(service._updatedAt) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }));
    } catch (error) {
      // Silently handle if services don't exist
      console.log("No services found or query error");
    }

    // Base pages with optimized priorities
    const basePages: MetadataRoute.Sitemap = [
      {
        url: 'https://www.webdev-al.com',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: 'https://www.webdev-al.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.webdev-al.com/services',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: 'https://www.webdev-al.com/portfolio',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: 'https://www.webdev-al.com/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ];

    // Combine all entries
    return [
      ...basePages,
      ...projectEntries,
      ...serviceEntries,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    
    // Return at least the base pages if there's an error
    return [
      {
        url: 'https://www.webdev-al.com',
        lastModified: new Date(),
        priority: 1.0,
      },
      {
        url: 'https://www.webdev-al.com/about',
        lastModified: new Date(),
        priority: 0.8,
      },
      {
        url: 'https://www.webdev-al.com/services',
        lastModified: new Date(),
        priority: 0.9,
      },
      {
        url: 'https://www.webdev-al.com/contact',
        lastModified: new Date(),
        priority: 0.8,
      },
    ];
  }
}