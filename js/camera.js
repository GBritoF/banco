const botaoInicialCamera = document.querySelector('[data-video-botao]')
const campoCamera = document.querySelector("[data-camera]")
const videoCamera = document.querySelector("[data-video]")
const tirarFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas")
const mensagem = document.querySelector("[data-mensagem]")
const botaoEnviarFoto = document.querySelectorr("[data-enviar]")

let imagemUrl = ""

botaoInicialCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({video: true, audio: false})

    botaoInicialCamera.style.display = "none";
    campoCamera.style.display = "block";

    vidoe.srcObject = iniciarVideo;
})

tirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.heigth);

    imagemUrl = canvas.toDataURL("image/jpeg");

    campoCamera.style.display = "none"
    mensagem.style.display = "block"
})

botaoEnviarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno =  JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemUrl

    localStorage.setItem('cadastro', json.stringify(converteRetorno))

    window.location.href = "./abrir-conta-form-3.html";
})