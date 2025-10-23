// Ambient declarations to make VS Code/TypeScript happy when editing Deno functions

// Minimal Deno global used in our functions
declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
};

// Remote HTTP server import from Deno std
declare module "https://deno.land/std@0.168.0/http/server.ts" {
  export function serve(
    handler: (req: Request) => Response | Promise<Response>,
    opts?: { onError?: (error: unknown) => Response | Promise<Response> }
  ): void;
}

// Node crypto shim from Deno std/node
declare module "https://deno.land/std@0.177.0/node/crypto.ts" {
  import type { BinaryLike } from "node:crypto";
  export function createHmac(algorithm: string, key: BinaryLike): {
    update(data: BinaryLike): any;
    digest(encoding: "hex" | "base64" | "latin1"): string;
  };
}

// Supabase JS types proxied via esm.sh – re-export from installed types
declare module "https://esm.sh/@supabase/supabase-js@2" {
  export * from "@supabase/supabase-js";
}
