import { Navbar } from 'react-bootstrap';

const Nav = () => (
  <Navbar className="bg-white">
    <div className="d-flex flex-row justify-content-between align-items-center">
      <h1 className="text-primary mx-5">Bookstore CMS</h1>
      <span className="mx-3 text-uppercase">Books</span>
      <span className="mx-3 text-uppercase text-muted">Categories</span>
    </div>
  </Navbar>
);

export default Nav;
