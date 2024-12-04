import React, { useState, useEffect, useCallback } from 'react';
import { Shortcut, ShortcutCategory } from './types/shortcut';
import { shortcuts } from './data/shortcuts';
import { ShortcutCard } from './components/ShortcutCard';
import { CategoryFilter } from './components/CategoryFilter';
import { Apple, Search } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<ShortcutCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loadedShortcuts, setLoadedShortcuts] = useState<Shortcut[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // To check if there are more items to load

  // Function to load more items
  const loadMoreShortcuts = useCallback(() => {
    if (loading || !hasMore) return; // Prevent loading if already loading or no more data

    setLoading(true);

    // Simulate loading (you can replace this with a real API call or more data)
    setTimeout(() => {
      const filteredShortcuts = shortcuts.filter((shortcut) => {
        const matchesCategory =
          selectedCategory === 'All' || shortcut.category === selectedCategory;
        const matchesSearchQuery =
          shortcut.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          shortcut.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearchQuery;
      });

      // Load more items based on the current length of loadedShortcuts
      const nextItems = filteredShortcuts.slice(loadedShortcuts.length, loadedShortcuts.length + 10);

      setLoadedShortcuts((prev) => [...prev, ...nextItems]);

      // Update loading state and check if there are more items to load
      setLoading(false);
      if (loadedShortcuts.length + nextItems.length >= filteredShortcuts.length) {
        setHasMore(false); // No more items to load
      }
    }, 1000); // Simulated delay for loading data
  }, [loading, hasMore, selectedCategory, searchQuery, loadedShortcuts]);

  // Handle scroll event to trigger load more when near bottom
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    loadMoreShortcuts();
  };

  useEffect(() => {
    // Initial load of shortcuts
    loadMoreShortcuts();
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, loadMoreShortcuts]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Apple className="w-8 h-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Apple Shortcuts</h1>
            </div>

            {/* Search input */}
            <div className="flex items-center space-x-2">
              <Search className="w-6 h-6 text-gray-600" />
              <input
                type="text"
                placeholder="Search Shortcuts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loadedShortcuts.map((shortcut) => (
            <ShortcutCard key={shortcut.id} shortcut={shortcut} />
          ))}
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Loading more shortcuts...</p>
          </div>
        )}

        {!hasMore && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No more shortcuts to load.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
