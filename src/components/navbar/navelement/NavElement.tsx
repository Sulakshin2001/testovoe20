import square from '../../../assets/icons/nav_icon.svg'
import s from './navElement.module.scss'
type NavElementProps={
    title:string
}

export const NavElement = (props:NavElementProps) =>{
    return(
        <div className={s.navelement}>
            <img src={square}/>
            <span className={s.text}>{props.title}</span>
        </div>
    )
}