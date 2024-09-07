
import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({email: '', password: '', confirmPassword: ''});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({...formData, [id]: value });};

  const validateForm = () => {
    let formErrors = {};

    if (!formData.email) {formErrors.email = 'El correo electrónico es obligatorio.';}
    if (!formData.password) {formErrors.password = 'La contraseña es obligatoria.';} 
    else if (formData.password.length < 6) {formErrors.password = 'La contraseña debe tener al menos 6 caracteres.';}

    if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = 'Las contraseñas no coinciden.'; }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert('Formulario enviado exitosamente');
      setErrors({});} 
    else {
      setErrors(formErrors);
      alert('Hubo un error en el formulario. Por favor, revisa los campos. Aparecerá indicado en color rojo el error bajo el campo a corregir');}};

  return (
    <div className='Register'>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com"
            value={formData.email} onChange={handleChange}/>
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" placeholder="La contraseña debe tener al menos 6 caracteres"
            value={formData.password} onChange={handleChange}/>
          {errors.password && <small className="text-danger">{errors.password}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="La contraseña y la confirmación de la contraseña deben ser iguales"
            value={formData.confirmPassword} onChange={handleChange}
          />
          {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;