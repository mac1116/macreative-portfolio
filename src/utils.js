export function imageUrl(path, width = 900) {
 if (path.endsWith('.svg')) return path;
 if (import.meta.env.DEV) return path;
 return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&fm=webp&q=85`;
}
