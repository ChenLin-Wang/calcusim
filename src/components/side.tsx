export default function Side({
    open=false,
    page=()=>{},
    pages={}
} : {
    open?: boolean,
    page?:any,
    pages?:{ [key:string] : {name:string,icon:string}}
}) {
return <div className={"fixed bg-blue-950 top-10 w-40 pb-10 h-full transition-all flex flex-col py-1 " + (open ? 'left-0' : 'left-[-10rem]')}>
    {Object.keys(pages).map((x:string)=>{
        return <div className="flex h-10 mx-2 my-1 rounded" onClick={(e:any)=>{
                page(x);
                e.target.parentNode.classList.toggle('bg-blue-900');
            }}>
            <span className="icon w-10 h-10 text-white text-center text-xl leading-10">{pages[x].icon}</span>
            <span className="grow text-white leading-10 font-bold">{pages[x].name}</span>
        </div>
    })}
</div>
}