const sendButton = document.getElementById(`snd-nota`);

sendButton.addEventListener(`click`, () => {
  let resultado, mensaje;
  try {
    prevRes = parseInt(document.getElementById(`nota`).value);
    if (isNaN(prevRes)) {
      throw `Gracioso`;
    }
    resultado = verificarAprobacion(8, 5, mensaje);
    mensaje = definirMensaje(resultado);
  } catch (e) {
    resultado = `¿SOS GRACIOSO?`;
    mensaje = `He descubierto que intentaste hackear el sitio`;
  }
  abrirModal(resultado, mensaje);
});

const definirMensaje = (pr) => {
  let resultado;
  switch (pr) {
    case 1:
      resultado = `No podés ser tan HDP`;
      break;
    case 2:
      resultado = `Sos malísimo para mi materia`;
      break;
    case 3:
      resultado = `No sabés casi nada`;
      break;
    case 4:
      resultado = `Muy mal`;
      break;
    case 5:
      resultado = `Mal`;
      break;
    case 6:
      resultado = `Regular`;
      break;
    case 7:
      resultado = `Bien, pero puede mejorar`;
      break;
    case 8:
      resultado = `¡Muy bien!`;
      break;
    case 9:
      resultado = `¡Excelente!`;
      break;
    case 10:
      resultado = `¡Insuperable hdp!`;
      break;
    default:
      resultado = null;
  }
  return resultado;
};

const verificarAprobacion = (nota1, nota2, prevRes) => {
  let promedio = (nota1 + nota2 + prevRes) / 3;
  if (promedio >= 7) {
    return `<span class="green">APROBADO</span>`;
  }
  return `<span class="red">DESAPROBADO</span>`;
};

const abrirModal = (res, msg) => {
  document.querySelector(`.resultado`).innerHTML = res;
  document.querySelector(`.mensaje`).innerHTML = `Tu prueba: ` + msg;
  let modal = document.querySelector(`.modal-background`);
  modal.style.display = `flex`;
  modal.style.animation = `aparecer 1s forwards`;
};
