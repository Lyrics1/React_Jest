import { CHINESE, ENGLISH } from '../action/chagelanguage'
import { BrowserRouter } from 'react-router-dom';


const Chinese = 'Chinese'
const English = 'English'
   
export default function changeLanguage(state = Chinese, action: any) {
    switch (action.type) {
        case 'CHINESE':
            return Chinese; break;
        case 'ENGLISH':
            return English; break;
        default:
            return Chinese;
    }
}
