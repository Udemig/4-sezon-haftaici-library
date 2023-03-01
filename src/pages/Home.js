import React from "react";

import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div>
            <h1>Anasayfa</h1>
            <Link to={"/add-book"}>Kitap Ekle</Link>
        </div>
    )
}

export default Home