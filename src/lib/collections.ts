import { getCollection } from 'astro:content';

const collectionNames = ['emulators', 'shells', 'configs', 'themes', 'tools', 'fonts'] as const;

export type CollectionName = (typeof collectionNames)[number];

export const collectionMeta: Record<CollectionName, { label: string; description: string }> = {
  emulators: { label: '终端模拟器', description: '各平台终端模拟器的详细介绍和对比' },
  shells: { label: 'Shell', description: '主流 Shell 的特性对比与选型指南' },
  configs: { label: '经典配置', description: '精选终端配置文件分享和最佳实践' },
  themes: { label: '主题美化', description: '终端主题、配色方案和提示符美化工具' },
  tools: { label: 'CLI 工具', description: '精选现代命令行工具，让你的终端体验更上一层楼' },
  fonts: { label: '编程字体', description: '适合终端和编程的等宽字体推荐' },
};

export async function getAllEntriesByTag(tag: string) {
  const results: { collection: CollectionName; entry: any }[] = [];
  for (const name of collectionNames) {
    const entries = await getCollection(name);
    for (const entry of entries) {
      if (entry.data.tags.includes(tag)) {
        results.push({ collection: name, entry });
      }
    }
  }
  return results;
}

export async function getAllTags() {
  const tagSet = new Set<string>();
  for (const name of collectionNames) {
    const entries = await getCollection(name);
    for (const entry of entries) {
      entry.data.tags.forEach((t: string) => tagSet.add(t));
    }
  }
  return [...tagSet].sort();
}
