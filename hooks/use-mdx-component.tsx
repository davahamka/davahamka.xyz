import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

export default function useMdxComponent(code: string) {
  return useMemo(() => getMDXComponent(code), [code]);
}
