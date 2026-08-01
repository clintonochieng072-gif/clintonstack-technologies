import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      {children}
    </div>
  );
}
