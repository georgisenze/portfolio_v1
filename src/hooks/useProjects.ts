import { useScopedI18n } from "@/locales/client";
import { Project } from "@/data/projects";

export function useProjects(): Project[] {
  const scopedT = useScopedI18n('project');
  
  const rawItems = scopedT('items' as any);
  
  return Array.isArray(rawItems) 
    ? rawItems.map((item: any) => ({
        slug: item.slug,
        title: item.title,
        desc: item.desc,
        longDescription: item.longDescription,
        tech: item.tech,
        img: item.img,
        images: Array.isArray(item.images) ? item.images : [],
        link: item.link,
      }))
    : [];
}