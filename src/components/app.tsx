import { useState } from "react";

import Head from './head';
import Side from './side';

const pages : { [key:string] : {name:string,icon:string}} = require('../pages/info.json');

export default function App() {
    const [ title, setTitle ] = useState<string>("Hello World");
    const [ open, toggle ] = useState<boolean>(false);
    function toggleSide(){
        toggle(e=>!e);
    }
    function newPage(page:string){
        setTitle(pages[page].name);
    }

    return <div className="fixed inset-x-0 inset-y-0 bg-slate-950">
        <Head menu={toggleSide} title={title} />
        <Side open={open} pages={pages} page={newPage} />
    </div>
}