export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function sortByDate(a: string, b: string, direction: 'newest' | 'oldest'): number {
  const dateA = new Date(a).getTime();
  const dateB = new Date(b).getTime();
  
  return direction === 'newest' 
    ? dateB - dateA // Newest first
    : dateA - dateB; // Oldest first
}
