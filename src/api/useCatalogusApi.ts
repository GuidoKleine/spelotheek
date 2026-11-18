export async function getCatalogus() {
  return await fetch('http://localhost:8080/catalogus').then((response) => {
    return response.json().then((data) => {
      return data;
    });
  });
}
