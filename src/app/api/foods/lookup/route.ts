import { NextResponse } from 'next/server';

// Placeholder: in Phase 2 swap to Supabase query.
// For demo, just echoes the barcode and a fake not-found.
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const barcode = searchParams.get('barcode') || '';
  return NextResponse.json({ found: false, barcode });
}
