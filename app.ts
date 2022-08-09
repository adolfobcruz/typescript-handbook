import { serve } from 'https://deno.land/std@0.151.0/http/server.ts';

function handler(req: Request): Response {
  let a = 'Adolfo';
  let b = 'Cruz';

  return new Response(a + b);
}

serve(handler);