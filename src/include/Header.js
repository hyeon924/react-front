import React from "react";

function Header() {
    return(
        <div>
            <a href="/">Home</a>&nbsp; | &nbsp;
            <a href="/test">menu1</a>&nbsp; | &nbsp;
            <a href="/survey/view">menu2</a>&nbsp; | &nbsp;
            <a href="/memo">menu3</a>&nbsp; | &nbsp;
            <a href="/book">menu4</a>&nbsp; | &nbsp;
            <a href="/product/list">menu5</a>&nbsp;
            <hr/>
        </div>
    );
}

export default Header;