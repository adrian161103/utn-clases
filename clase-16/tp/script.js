document.getElementById("card-form").addEventListener(
  "submit",
  function (
    event // aca declaramos un parametro llamado evento (event)
  ) {
    event.preventDefault();
    // evitamos que el formulario se recargue y pueda ejecutar la accion sin reinicar la pagina

    //traemos valores del formulario
    //con el .value obtenemos el valor de cada uno
    const title = document.getElementById("card-title").value;
    const description = document.getElementById("card-description").value;
    const imageUrl =
      document.getElementById("card-image").value ||
      "https://picsum.photos/200";
    // usamos || (o) ya que en caso de que la persona no brinde ninguna url, la misma consola genere una imagen a partir de la url brindada
    const bgColor = document.getElementById("card-bg-color").value;
    const borderColor = document.getElementById("card-border-color").value;

    //motrar por consola los valores del formulario
    console.log({
      title: title,
      description: description,
      imageUrl: imageUrl,
      bgcolor: bgColor,
      borderColor: borderColor,
      // se  puede poner simplemente ej title, si coincide con el valor  se completa clave y valor
    });
    //crear nueva card
    const cardContainer = document.getElementById("card-container");
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.backgroundColor = bgColor;
    newCard.style.borderColor = borderColor;

    //maquetar la card
    newCard.innerHTML = `<img src="${imageUrl}" alt="card image">
    <div class="card-content">
     <p>${title}</p>
     <p>${description}</p>
    </div>`;

    //agregar la nueva card al contenedor
    //append es similar al push o add (añadimos un hijo)
    cardContainer.appendChild(newCard);

    //limpiar los datos del campo del formulario  (.reset)
    document.getElementById("card-form").reset()

  });
