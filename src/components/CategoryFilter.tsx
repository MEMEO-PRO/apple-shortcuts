import { ShortcutCategory } from '../types/shortcut';

interface CategoryFilterProps {
  selectedCategory: ShortcutCategory | 'All';
  onSelectCategory: (category: ShortcutCategory | 'All') => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const categories: (ShortcutCategory | 'All')[] = [
    'All',
    'Productivity',
    'Automation',
    'Social',
    'Utility',
    'Entertainment',
    'Health',
    'Uncategorized'
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}