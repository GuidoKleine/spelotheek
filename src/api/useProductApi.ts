export async function getProduct() {
  // TODO - set category in url e.g. catalogus/:catgegory/:id OR as query parameters catalogus?category=Buiten Speelgoed/id="0"
  await fetch("http://localhost:8080/catalogus")
  .then(response => response.json())
  .then()
}