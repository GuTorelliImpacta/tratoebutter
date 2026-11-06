export function Drop({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 0c1 5 8 9 8 18a8 8 0 0 1-16 0c0-4 2-6 4-8-.5 3 1 4 2 4 2-3 1-9 2-14Z" />
    </svg>
  );
}
