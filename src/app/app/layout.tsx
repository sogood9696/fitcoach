'use client';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setOk(true);
      else window.location.href = '/login';
    })();
  }, []);
  if (!ok) return null;

  return (
    <div className="py-6">
      <div className="wrapper">
        <nav className="flex gap-3 mb-6">
          <Link href="/app" className="btn">Dashboard</Link>
          <Link href="/app/scan" className="btn">Escanear código</Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
