function LoginForm() {
  return (
        <form className="formLayout">
          <h4 className="Formtitle">login</h4>
          
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="password">contraseña</label>
          <input type="password" name="password" />
    
          <div className="buttonLayout">
            <button type="submit">enviar</button>
            <button type="reaset">borrar</button>
          </div>
        </form>
      );
    }
    
 


export default LoginForm