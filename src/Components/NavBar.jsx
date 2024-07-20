const NavBar = (props) => {
  return (
    <nav navbar-light bg-light>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
