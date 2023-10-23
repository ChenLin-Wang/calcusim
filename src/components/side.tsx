import { page_info } from './types';

export default function Side({
    page,           // Current page information
    pages={},       // What pages are available?
    open=()=>{}     // Open a page
} : {
    page:page_info,
    pages?:{ [key:string] : {name:string,icon:string}}
    open?:any
}) {
return <div className={"fixed bg-blue-950 top-10 w-40 pb-10 h-full transition-all flex flex-col py-1 " + (page.side ? 'left-0' : 'left-[-10rem]')}>
    {Object.keys(pages).map((x:string)=>{
        return <div className={'flex h-10 mx-2 my-1 rounded cursor-pointer'+(page.id === x ? ' bg-blue-900' : '')} onClick={()=>open(x)}>
            <span className="icon w-10 h-10 text-white text-center text-xl leading-10">{pages[x].icon}</span>
            <span className="grow text-white leading-10 font-bold">{pages[x].name}</span>
        </div>
    })}
</div>
}