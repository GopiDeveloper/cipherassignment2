import React from 'react';
import './Header.css';

const Header = () => {
   return(
    <>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#" id="bar">MOVIE WEB SITE</a>
            </div>
            <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#" id="bar">Page 1</a></li>
                <li><a href="#" id="bar">Page 2</a></li>
            </ul>
            <form className="navbar-form navbar-left" action="/action_page.php">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" name="search"/>
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </nav>
    </>
   )
}

export default Header;