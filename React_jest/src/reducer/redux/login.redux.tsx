import {AUTH_SUCCESS,LOGINOUT,ERROR_MSG} from '../action/login'
interface InitState  {
    redirectTo: string, /**进行页面重定向 */
    isAuth: Boolean,/**是否登陆成功 */
    type: number,
    user: string,
    msg:string,
    
}
const initState :InitState = {
    redirectTo: '',
    isAuth: false,
    type: 0,/**0:学生 1 ：老师 */
    user: '',
    msg:'',
}


/**user reducer  */
/**按照默认action 包含一个type 来指定具体的操作，其他是数据和对象，来进行修改reducer返回的值，也就是action 是一个对象 */
export function login(state=initState,action:any) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state }; break;
    /** 进行向后台进行发出登陆请求验证*/
        case ERROR_MSG:
            return Object.assign(state,); break;
        case LOGINOUT:
            return { ...initState, redirectTo: '/login' }; break;
        default:
            return { ...initState } 
    }
} 