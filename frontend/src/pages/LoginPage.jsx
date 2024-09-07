import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({email: '', password: '',});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value});};

  const validateForm = () => {
    let formErrors = {};

    if (!formData.email) {formErrors.email = 'El correo electrónico es obligatorio.';}
    if (!formData.password) {formErrors.password = 'La contraseña es obligatoria.';} 
    else if (formData.password.length < 6) {formErrors.password = 'La contraseña debe tener al menos 6 caracteres.';}

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert('Inicio de sesión exitoso');
      setErrors({});
    } else {
      setErrors(formErrors);
      alert('Error: Por favor, revise los campos e intente nuevamente.');
    }
  };

  return (
    <div className='Login'>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com"
            value={formData.email} onChange={handleChange} />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password"
            placeholder="La contraseña debe tener al menos 6 caracteres"
            value={formData.password} onChange={handleChange} />
          {errors.password && <small className="text-danger">{errors.password}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;