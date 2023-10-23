function Result(){
    return <div className="absolute left-0 top-0 inset-x-0 h-28 bg-white"></div>
}
function Answer(){
    return <div className="absolute left-0 top-28 inset-x-0 h-12 bg-gray-300"></div>
}
const keys = [
    // Special
    {char: '\uf12b'},
    {char: '\uf698'},
    {char: '%'},
    {char: '()'},
    // Navigation
    {char:'\uf2f1'},
    {char:'\uf2d3'},
    {char:'\uf12d'},
    {char:'\uf55a'},
    // Basics
    {char:'\uf529'},
    {char:'7'},
    {char:'8'},
    {char:'9'},
    {char:'\uf00d'},
    {char:'4'},
    {char:'5'},
    {char:'6'},
    {char:'-'},
    {char:'1'},
    {char:'2'},
    {char:'3'},
    {char:'+'},
    {char:'.'},
    {char:'0'},
    {char:'=', type:'main'}
];
function Keyboard(){
    return <div className="absolute left-0 top-40 bottom-0 inset-x-0 bg-slate-950 grid grid-cols-4 grid-rows-6">
        {keys.map(k=>{
            if(k.type==='main') return <button><span className="inline-block text-slate-950 text-3xl bg-white rounded-full w-14 h-14 leading-[3.5rem] box-content border-4 border-white active:bg-slate-950 active:text-white">{k.char}</span></button>
            return <button className={'text-white text-3xl active:bg-white active:text-slate-950 '+(k.type==='math'?'math':'icon')}>{k.char}</button>
        })}
    </div>
}
function Main(){
    return <>
        <Result />
        <Answer />
        <Keyboard />
    </>
}
export {Main};