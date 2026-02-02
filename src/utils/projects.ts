import { Project } from "@/data/projects";

export function loadProjectsFromTranslations(scopedT: any): Project[] {
  const projectsData: Project[] = [];
  
  for (let i = 0; i < 10; i++) { // Augmentez si vous avez plus de projets
    try {
      const slug = scopedT(`items.${i}.slug` as any);
      if (!slug || slug.includes('items.')) {
        break; // Plus de projets
      }

      // Charger les images
      const images: string[] = [];
      for (let j = 0; j < 10; j++) { // Max 10 images par projet
        try {
          const image = scopedT(`items.${i}.images.${j}` as any);
          if (image && !image.includes('images.')) {
            images.push(image);
          } else {
            break;
          }
        } catch {
          break;
        }
      }

      projectsData.push({
        slug,
        title: scopedT(`items.${i}.title` as any),
        desc: scopedT(`items.${i}.desc` as any),
        longDescription: scopedT(`items.${i}.longDescription` as any),
        tech: scopedT(`items.${i}.tech` as any),
        img: scopedT(`items.${i}.img` as any),
        images,
        link: scopedT(`items.${i}.link` as any),
      });
    } catch (e) {
      break;
    }
  }

  return projectsData;
}