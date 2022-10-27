import s from './mainelement.module.scss'
import first from '../../../assets/icons/firtst.svg'
import second from '../../../assets/icons/second.svg'
import third from '../../../assets/icons/third.svg'

type MainElementType={
    id:number
}
export const MainElement = (props:MainElementType) =>{
    if (props.id===1){
        return(

            <div className={s.mainelement}>
                <img className={s.first} src={first} alt="first"/>
                <span className={s.text1}>Южная строительная площадка</span>
            </div>
        )
    }
    if (props.id===2){
        return(

            <div className={s.mainelement}>
                <img className={s.second} src={second} alt="first"/>
                <span className={s.text}>Южная строительная площадка</span>
            </div>
        )
    }
    if (props.id===3){
        return(

            <div className={s.mainelement}>
                <img className={s.third} src={third} alt="first"/>
                <span className={s.text3}>Южная строительная площадка</span>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }

}