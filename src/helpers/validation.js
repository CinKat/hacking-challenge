export function validationForm(form) {
  let errors = {};
  let matchDni = /^\d{8}$/;
  let matchCelular = /^\d{9}$/;
  let matchPlaca = /^([A-Z]{3}\-[0-9]{3})$/;

  if (!form.dni.trim()) {
    errors.dni = "El campo DNI es requerido";
  } else if (!matchDni.test(form.dni.trim())) {
    errors.dni = "El campo DNI debe contener 8 digitos";
  }

  if (!form.celular.trim()) {
    errors.celular = "El campo Celular es requerido";
  } else if (!matchCelular.test(form.celular.trim())) {
    errors.celular = "El campo DNI debe contener 9 digitos";
  }
  if (!form.placa.trim()) {
    errors.placa = "El campo Placa es requerido";
  } else if (!matchPlaca.test(form.placa.trim())) {
    errors.placa = "El numero de placa no es correcto";
  }

  return errors;
}
