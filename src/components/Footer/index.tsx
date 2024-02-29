import { Footer as SectionFooter } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <SectionFooter>
      <p>
        {currentYear} &copy; Desenvolvido por JônatasGdeC | Projeto fictício sem
        fins comerciais.
      </p>
    </SectionFooter>
  )
}

export default Footer
