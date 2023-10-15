import { page_info } from './types';
import { Main as BodySimple } from '../pages/simple';

export default function Body({page}:{page:page_info}){
    function pageBody(name:string){
        if(name === 'simple') return <BodySimple />
        return <></>
    }
    return <div className={'fixed top-10 right-0 h-[calc(100%_-_2.5rem)] transition-all '+(page.side ? 'left-40' : 'left-0')}>
        {pageBody(page.id)}
    </div>
}