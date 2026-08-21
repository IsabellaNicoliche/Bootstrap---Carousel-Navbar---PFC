// Sombra na navbar ao rolar a página
const navbar = document.getElementById('mainNavbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 4px 20px rgba(23, 26, 61, .12)'
  } else {
    navbar.style.boxShadow = '0 1px 0 rgba(23, 26, 61, .06)'
  }
})

// Marca o link do menu ativo conforme a seção visível (usa Scrollspy do Bootstrap)
const scrollSpy = document.body
scrollSpy.addEventListener('activate.bs.scrollspy', (event) => {
  document.querySelectorAll('#navbarTrilha .nav-link').forEach(link => {
    link.classList.remove('active')
  })
  const activeTarget = event.relatedTarget
  if (activeTarget) activeTarget.classList.add('active')
})

// Fecha o menu mobile ao clicar em um link
document.querySelectorAll('#navbarTrilha .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navbarTrilha')
    if (menu.classList.contains('show')) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(menu)
      collapse.hide()
    }
  })
})