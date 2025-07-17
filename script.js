function toggleEstado(element) {
  const estados = ['pendiente', 'cursando', 'aprobada'];
  let current = estados.findIndex(e => element.classList.contains(e));
  element.classList.remove(...estados);
  let next = (current + 1) % estados.length;
  element.classList.add(estados[next]);
}
