const NavBar = (props) => {
  return (
    <nav className='nav'>
      <a className='nav-link active' href='#'>
        Home
      </a>
      <a className='nav-link' href='#'>
        Games
      </a>
      <a className='nav-link' href='#'>
        Profile
      </a>
      <a className='nav-link' href='#'>
        Help
      </a>
    </nav>
  );
};

export default NavBar;
