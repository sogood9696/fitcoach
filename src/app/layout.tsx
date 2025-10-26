import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FitCoach',
  description: 'Modern training & nutrition tracker for coaches and clients.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-gray-900">{children}</body>
    </html>
  );
}
