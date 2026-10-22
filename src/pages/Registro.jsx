import { useState } from 'react';

const valoresIniciales = {
  nombre: '',
  nickname: '',
  email: '',
  password: '',
  confirmarPassword: ''
};

export function validarRegistro(datos) {
  const errores = {};

  if (!datos.nombre.trim()) {
    errores.nombre = 'Debes ingresar tu nombre.';
  }

  if (!datos.nickname.trim()) {
    errores.nickname = 'Debes ingresar un nickname.';
  }

  if (!datos.email.trim()) {
    errores.email = 'Debes ingresar tu correo.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
    errores.email = 'Ingresa un correo válido.';
  }

  if (datos.password.length < 8) {
    errores.password = 'La contraseña debe tener mínimo 8 caracteres.';
  }

  if (datos.password !== datos.confirmarPassword) {
    errores.confirmarPassword = 'Las contraseñas no coinciden.';
  }

  return errores;
}

export default function Registro() {
  const [datos, setDatos] = useState(valoresIniciales);
  const [enviado, setEnviado] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const errores = validarRegistro(datos);

  function manejarCambio(evento) {
    const { name, value } = evento.target;

    setDatos((anteriores) => ({
      ...anteriores,
      [name]: value
    }));

    setMensaje('');
  }

  function manejarEnvio(evento) {
    evento.preventDefault();
    setEnviado(true);

    if (Object.keys(errores).length > 0) {
      return;
    }

    setMensaje('Cuenta creada correctamente.');
    setDatos({ ...valoresIniciales });
    setEnviado(false);
  }

  const campos = [
    {
      name: 'nombre',
      label: 'Nombre',
      type: 'text',
      placeholder: 'Ej: Daniel',
      autoComplete: 'name'
    },
    {
      name: 'nickname',
      label: 'Nickname',
      type: 'text',
      placeholder: 'Ej: ShadowPlayer',
      autoComplete: 'username'
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      placeholder: 'Ej: jugador@correo.com',
      autoComplete: 'email'
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      placeholder: 'Mínimo 8 caracteres',
      autoComplete: 'new-password'
    },
    {
      name: 'confirmarPassword',
      label: 'Confirmar contraseña',
      type: 'password',
      placeholder: 'Repite tu contraseña',
      autoComplete: 'new-password'
    }
  ];

  return (
    <main className="container-fluid pagina-registro py-5">
      <section className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2>Crear cuenta</h2>
          <p>
            Regístrate para participar en los torneos
            de eSports Arena Manager.
          </p>

          <form onSubmit={manejarEnvio} noValidate>
            {campos.map((campo) => (
              <div className="mb-3" key={campo.name}>
                <label
                  htmlFor={campo.name}
                  className="form-label"
                >
                  {campo.label}:
                </label>

                <input
                  id={campo.name}
                  name={campo.name}
                  type={campo.type}
                  placeholder={campo.placeholder}
                  autoComplete={campo.autoComplete}
                  value={datos[campo.name]}
                  onChange={manejarCambio}
                  aria-invalid={
                    enviado && Boolean(errores[campo.name])
                  }
                  aria-describedby={`${campo.name}-error`}
                  className={`form-control ${
                    enviado && errores[campo.name]
                      ? 'is-invalid'
                      : ''
                  }`}
                  required
                />

                {enviado && errores[campo.name] && (
                  <div
                    id={`${campo.name}-error`}
                    className="invalid-feedback"
                  >
                    {errores[campo.name]}
                  </div>
                )}
              </div>
            ))}

            <button type="submit" className="btn btn-primary">
              Crear cuenta
            </button>

            {mensaje && (
              <div className="alert alert-success mt-3" role="status">
                {mensaje}
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
