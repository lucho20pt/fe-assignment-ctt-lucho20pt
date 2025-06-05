import React from 'react'

const Header = () => {
  return (
    <header
      className="flex flex-row items-center justify-center p-4 px-10 gap-20
        bg-white text-lg text-gray-700"
    >
      {/* static content for preview purposose */}
      <h1 className="hidden">CTT</h1>
      <img
        className="h-10"
        src="https://www.ctt.pt/application/themes/images/logo-ctt.svg"
        alt="CTT"
      />

      <nav className="hidden w-full lg:flex flex-row items-center justify-start">
        <ul className="flex flex-row items-center justify-center gap-10 font-semibold">
          <li>
            <a href="#enviar" className="hover:underline">
              Enviar
            </a>
          </li>
          <li>
            <a href="#receber" className="hover:underline">
              Receber
            </a>
          </li>
          <li>
            <a href="#filatelia" className="hover:underline">
              Filatelia
            </a>
          </li>
          <li>
            <a href="#dinheiro-e-seguros" className="hover:underline">
              Dinheiro e seguros
            </a>
          </li>
          <li>
            <a href="#pagamentos" className="hover:underline">
              Pagamentos
            </a>
          </li>
          <li>
            <a href="#alarmes" className="hover:underline">
              Alarmes
            </a>
          </li>
          <li>
            <a href="#loja" className="hover:underline">
              Loja
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
