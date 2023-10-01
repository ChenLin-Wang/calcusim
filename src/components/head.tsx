export default function Head({title="Hello World", menu=()=>{}}:{title?:string, menu?:any}){
    return <div className="fixed inset-x-0 h-10 bg-blue-900 flex">
        <button className="icon text-white flex-none w-10 text-center" onClick={menu}>&#xf0c9;</button>
        <span className="text-white text-center grow leading-10 mr-10">{title}</span>
    </div>
}