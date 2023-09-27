import { useState } from "react";

export default function Head(){
    const [ title, setTitle ] = useState('Hello World');
    return <div className="fixed inset-x-0 h-10 bg-blue-900 flex">
        <button className="icon text-white flex-none w-10 text-center">&#xf0c9;</button>
        <span className="text-white text-center grow leading-10 mr-10">{title}</span>
    </div>
}