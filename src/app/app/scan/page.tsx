'use client';
import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';

export default function ScanPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [barcode, setBarcode] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [lookup, setLookup] = useState<any>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    let canceled = false;
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) videoRef.current.srcObject = stream;
        await new Promise(r => videoRef.current?.addEventListener('loadedmetadata', r, { once: true }));
        while (!canceled) {
          const result = await codeReader.decodeOnceFromVideoElement(videoRef.current!);
          if (result?.getText()) { setBarcode(result.getText()); break; }
        }
      } catch (e:any) { setError(e.message || 'Camera error'); }
    })();
    return () => {
      canceled = true;
      (videoRef.current?.srcObject as MediaStream | null)?.getTracks().forEach(t => t.stop());
    };
  }, []);

  async function handleLookup() {
    setLookup(null);
    try {
      const res = await fetch(`/api/foods/lookup?barcode=${encodeURIComponent(barcode)}`);
      const data = await res.json();
      setLookup(data);
    } catch (e:any) {
      setLookup({ error: e.message });
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <section className="card">
        <h1 className="text-xl font-semibold mb-2">Escanear Código</h1>
        <video ref={videoRef} autoPlay playsInline className="w-full rounded-xl border" />
        <p className="mt-2">{barcode ? `Detectado: ${barcode}` : (error || 'Apunta la cámara al código…')}</p>
        <button className="btn mt-2" disabled={!barcode} onClick={handleLookup}>Buscar producto</button>
      </section>

      <section className="card">
        <h2 className="font-semibold mb-2">Resultado</h2>
        <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(lookup, null, 2)}</pre>
      </section>
    </div>
  );
}
