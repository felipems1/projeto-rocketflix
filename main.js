const url = "https://api.b7web.com.br/cinema/";

async function loadFilmes() {
  let novoValor = Math.floor(Math.random() * 30);

  document.querySelector("#filme").innerHTML = "Carregando...";
  document.querySelector("#avatar").src = "";

  try {
    let req = await fetch(url);
    let json = await req.json();
    document.querySelector("#filme").innerHTML =
      json[JSON.stringify(novoValor)].titulo;
    document.querySelector("#avatar").src =
      json[JSON.stringify(novoValor)].avatar;
  } catch {
    document.querySelector("#filme").innerHTML =
      'Ops! Houve um problema, clique em "Encontrar filme" novamente.';
  }
}

document.querySelector("section button").addEventListener("click", loadFilmes);
