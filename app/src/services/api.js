export function getCocktails() {
  return fetch('http://localhost:3000/api/cocktails', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}