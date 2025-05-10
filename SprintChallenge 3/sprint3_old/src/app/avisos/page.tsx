'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AvisosPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login'); // redireciona se não estiver logado
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Bem-vindo à Página de Avisos!</h1>
    </div>
  );
}
