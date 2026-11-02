    export async function catalogusApi() {
      await fetch("http://localhost:8080/catalogus")
     .then(response => response.json())
     .then(data => console.log(data));
    };