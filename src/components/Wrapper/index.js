import React from 'react';

const Link = ({ href, text, isActive }) => (
  <a href={href} className={isActive ? 'active' : ''}>
    {text}
  </a>
);
const Wrapper = ({ currentPage, children }) => (
  <div className="container">
    <h1>React MPA Boilerplate</h1>
    <nav className="nav">
      <ul>
        <li>
          <Link href="./" text="Home" isActive={currentPage === 'home'} />
        </li>
        <li>
          <Link href="./about.html" text="About" isActive={currentPage === 'about'} />
        </li>
      </ul>
    </nav>
    <section className="content">
      {children}
    </section>
  </div>
);

export default Wrapper;
