import s from './main.module.scss'
import {MainElement} from "./mainElement/MainElement";

export const Main = () =>{

    return(
        <div className={s.container}>
        <div className={s.main}>

            <header className={s.header}>
                <span className={s.text1}>Уровень</span>
                <span className={s.text2}>Наименование работ</span>
                <span className={s.text3}>Основная з/п</span>
                <span className={s.text4}>Оборудование</span>
                <span className={s.text5}>Накладные расклады</span>
                <span className={s.text6}>Сметная прибыль</span>
            </header>
            <MainElement id={1}/>
            <MainElement id={2}/>
            <MainElement id={3}/>
        </div>
        </div>
    )
}