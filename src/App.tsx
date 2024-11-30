import React, { useState } from 'react';
import { Shortcut, ShortcutCategory } from './types/shortcut';
import { shortcuts } from './data/shortcuts';
import { ShortcutCard } from './components/ShortcutCard';
import { CategoryFilter } from './components/CategoryFilter';
import { Apple, Share } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<ShortcutCategory | 'All'>('All');

  const filteredShortcuts = shortcuts.filter(
    (shortcut) => selectedCategory === 'All' || shortcut.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Apple className="w-8 h-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Apple Shortcuts
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShortcuts.map((shortcut) => (
            <ShortcutCard key={shortcut.id} shortcut={shortcut} />
          ))}
        </div>

        {filteredShortcuts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No shortcuts found in this category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;