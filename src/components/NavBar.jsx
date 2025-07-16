import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/questionnaire">Questionnaire</Link>
    </nav>
  )
}

export default NavBar