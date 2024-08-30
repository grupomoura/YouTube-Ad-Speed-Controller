// Função para verificar se o vídeo atual é um anúncio
function isAdPlaying() {
  const adIndicator = document.querySelector('.ad-showing'); // Indicador de anúncio no YouTube
  return adIndicator !== null;
}

// Função para alterar a velocidade do vídeo
function setVideoSpeed(speed) {
  const video = document.querySelector('video');
  if (video) {
    video.playbackRate = speed;
  }
}

// Função para mutar ou desmutar o vídeo
function muteVideo(mute) {
  const video = document.querySelector('video');
  if (video) {
    video.muted = mute;
  }
}

// Variável para rastrear se estamos em um anúncio
let adWasPlaying = false;

// Observador de mutação para monitorar alterações na página
const observer = new MutationObserver(() => {
  const video = document.querySelector('video');
  
  if (video) {
    if (isAdPlaying()) {
      setVideoSpeed(4.0); // Ajusta a velocidade para 4x durante anúncios
      muteVideo(true); // Muta o áudio durante anúncios
      adWasPlaying = true;
    } else if (adWasPlaying) {
      setVideoSpeed(1.0); // Retorna à velocidade normal de 1x após anúncios
      muteVideo(false); // Desmuta o áudio após anúncios
      adWasPlaying = false;
    }
    // Após o anúncio terminar, o usuário pode ajustar a velocidade manualmente sem interferência adicional
  }
});

// Iniciar o observador de mutação
observer.observe(document, {
  childList: true,
  subtree: true
});
