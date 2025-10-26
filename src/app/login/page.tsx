'use client';
import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const r = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setMsg(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setMsg(error.message);
    else r.push('/app');
  }

  return (
    <main className="py-16">
      <div className="wrapper max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>
        <form onSubmit={onLogin} className="card">
          <input className="w-full border rounded-xl px-3 py-2 mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="w-full border rounded-xl px-3 py-2 mb-3" placeholder="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="btn" disabled={loading}>{loading ? 'Entrando…' : 'Entrar'}</button>
          {msg && <p className="text-red-600 mt-3">{msg}</p>}
        </form>
      </div>
    </main>
  );
}
