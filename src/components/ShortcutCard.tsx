import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { Shortcut } from '../types/shortcut';

interface ShortcutCardProps {
  shortcut: Shortcut;
}

export function ShortcutCard({ shortcut }: ShortcutCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {shortcut.thumbnailUrl && (
        <img 
          src={shortcut.thumbnailUrl} 
          alt={shortcut.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
            {shortcut.category}
          </span>
          {/* <span className="text-sm text-gray-500">
            {shortcut.downloads.toLocaleString()} downloads
          </span> */}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">{shortcut.title}</h3>
        <p className="mt-2 text-gray-600">{shortcut.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">By Yash</span>
          <div className="space-x-2">
            <button 
              onClick={() => window.open(shortcut.downloadUrl)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}