import React,{useEffect} from 'react';
import M from 'materialize-css';

export default function Navbar() {
    useEffect(() => {
        var elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }, [])
    return (
        <div>
        <nav className="navbar">
            <div className="nav-wrapper ">
                <a href="/" className="brand-logo anchorLogo" style={{paddingLeft:35}}><img className="logo" alt="Logo" style={{maxWidth: 100}}/></a>
                <a data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons icon" style={{ fontSize:34, color: "#210D7A", paddingLeft: 15}}>menu</i>
                </a>
                <ul class="right hide-on-med-and-down" style={{marginRight: 50}}>
                    <li className="listName" ><i className="material-icons">bookmark_border</i></li>
                    <li className="listName"><i className="material-icons">person_outline</i></li>
                    <li className="listName"><i className="material-icons">search</i></li>
                    <li className="listName"><i className="material-icons">menu</i></li>
                </ul>
                <ul className="right hide-on-med-and-down" style={{paddingRight: 250}}>
                    <li className="listName">Trending</li>
                    <li className="listName">Videos</li>
                    <li className="listName">Stories</li>
                    <li className="listName">Quizzes</li>
                    <li className="listName">Memes</li>
                    <li className="listName">Spotlight</li>           
                </ul>
            </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">              
                    <li className="listName listName1" style={{marginTop: 80}}>Trending</li>
                    <li className="listName listName1">Videos</li>
                    <li className="listName listName1">Stories</li>
                    <li className="listName listName1">Quizzes</li>
                    <li className="listName listName1">Memes</li>
                    <li className="listName listName1">Spotlight</li> 
      </ul>
    </div>
    )
}
