function loadNewCatImage() {
    // Faz uma requisição GET para a API de gatinhos
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        const catImage = data[0].url;
        // Atualiza a imagem de gatinho na página
        document.getElementById('cat-image').src = catImage;
      })
      .catch(error => console.error(error));
  }
  
  // Event listener para o botão de gerar novo meme
  document.getElementById('new-cat-button').addEventListener('click', loadNewCatImage);
  
  // Carrega uma imagem de gatinho ao carregar a página
  loadNewCatImage();