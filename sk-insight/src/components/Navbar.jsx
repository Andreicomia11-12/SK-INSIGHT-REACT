function App() {
  return (
    <header className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="SK Logo" className="logo" />
          <span className="brand">SK-INSIGHT</span>
        </div>
        <nav className="navbar-right">
          <a href="#">Home</a>
          <a href="#">Profiling</a>
          <a href="#">Assistance</a>
          <div className="user-icons">
          </div>
        </nav>
      </header>
  );
}
