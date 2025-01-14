
import Page from "../layout/Page";

function Contact() {
 
  return (
    <Page>
      
      <section className="sectionForm">
        <div>Contact</div>
        <h4>escribinos para consultarnos</h4>
        <form className="formLayout">
          <label htmlFor="nombre">nombre</label>
          <input type="text" name="nombre" />

          <label htmlFor="fecha de nacimiento">fecha de nacimiento</label>
          <input type="date" name="fecha de nacimiento" />

          <label htmlFor="reason">Motivo de contacto</label>
          <select name="reason">
            <option value="getinfo">obtener informacion</option>
            <option value="error">Problema</option>
            <option value="work">Trabaja con nosotros</option>
          </select>
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message"rows={(7)} placeholder="escribe tu consulta"/>
          <div className="buttonLayout">
          <button type="submit">enviar</button>
          <button type="reaset">borrar</button>
          </div>
        </form>
      </section>
    
    </Page>
  );
}

export default Contact;
