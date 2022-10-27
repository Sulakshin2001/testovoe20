import s from './nav.module.scss'
import {NavElement} from "./navelement/NavElement";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <NavElement title={'По проекту'}/>
            <NavElement title={'Объекты'}/>
            <NavElement title={'РД'}/>
            <NavElement title={'МТО'}/>
            <NavElement title={'СМР'}/>
            <NavElement title={'График'}/>
            <NavElement title={'МиМ'}/>
            <NavElement title={'Рабочие'}/>
            <NavElement title={'Капвложения'}/>
            <NavElement title={'Бюджет'}/>
            <NavElement title={'Финансирование'}/>
            <NavElement title={'Панорамы'}/>
            <NavElement title={'Камеры'}/>
            <NavElement title={'Поручения'}/>
            <NavElement title={'Контрагенты'}/>
        </div>
    )
}