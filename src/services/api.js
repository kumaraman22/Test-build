// Example API call to backend
export async function getHello() {
  const res = await fetch('http://localhost:8080/');
  return res.text();
}
