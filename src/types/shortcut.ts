export interface Shortcut {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  thumbnailUrl?: string;
  author: string;
  category: ShortcutCategory;
  createdAt: Date;
  downloads: number;
}

export type ShortcutCategory = 
  | 'Productivity'
  | 'Automation'
  | 'Social'
  | 'Utility'
  | 'Entertainment'
  | 'Health'
  | 'Uncategorized';