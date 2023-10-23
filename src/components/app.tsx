import { useState } from "react";

import { page_info, pages_info } from './types';
import Head from './head';
import Side from './side';
import Body from './body';

const pages : pages_info = require('../pages/info.json');

export default function App() {
    const [ page, setPage ] = useState<page_info>({id:'',title:'Welcome to Calcusim',side:false});
    function toggleSide(){
        setPage(x=>({...x, side:!x.side}));
    }
    function openPage(id:string){
        setPage(x=>({id:id, title:pages[id].name, side:x.side}));
    }
    return <div className="fixed inset-x-0 inset-y-0 bg-slate-950">
        <Head menu={toggleSide} title={page.title} />
        <Side page={page} pages={pages} open={openPage} />
        <Body page={page} />
    </div>
}