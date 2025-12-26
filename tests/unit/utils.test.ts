import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn() utility', () => {
  it('handles single class', () => {
    expect(cn('foo')).toBe('foo');
  });

  it('merges multiple classes', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes (clsx-style)', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });

  it('handles undefined and null', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });

  it('handles nested arrays', () => {
    expect(cn('foo', ['bar', 'baz'])).toBe('foo bar baz');
  });

  it('handles mixed inputs', () => {
    expect(cn('base', false && 'conditional', ['a', 'b'])).toBe('base a b');
  });

  it('handles Tailwind merge conflicts correctly', () => {
    // When same class appears twice, tailwind-merge should keep the last one
    expect(cn('p-4 p-2')).toBe('p-2');
    expect(cn('text-white text-red-500')).toBe('text-red-500');
  });

  it('handles empty inputs', () => {
    expect(cn()).toBe('');
    expect(cn('')).toBe('');
  });
});
