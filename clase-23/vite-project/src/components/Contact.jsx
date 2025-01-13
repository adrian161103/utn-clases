import HeaderRoute from './layout/headerRoute'
function Contact() {
  const links =[
    {
    url:"/",
    name:"pagina principal",
  },
  {
    url:"/contacto",
    name:"Contacto",
  },
  {
    url:"/productos",
    name:"Productos",
  }
]

  return (
  <>
    <HeaderRoute navLinks={links}/>
    <div>contacto</div>
    </>
  )
}

export default Contact