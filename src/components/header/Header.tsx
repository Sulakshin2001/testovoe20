import s from './header.module.scss'
import square from '../../assets/icons/square.svg'
import arrow from '../../assets/icons/left_arrow.svg'
import arrow_bot from '../../assets/icons/border_arrow.svg'

export const Header = () => {
    return (
        <div>

            <div className={s.header}>
                <img className={s.square} src={square} alt='square'/>
                <img src={arrow} className={s.arrow} alt="arrow"/>
                <span className={s.active}>Просмотр</span>
                <span className={s.incative}>Управление</span>
            </div>
            <div className={s.header}>
                <div className={s.project_name_container}>
                    <div className={s.name_text}>
                        <div className={s.name_project}>Название проекта</div>
                        <div className={s.abbtrbeatura}>Аббревиатура</div>
                    </div>
                    <img className={s.arrow_bot} src={arrow_bot}/>

                </div>
                <div className={s.project_title_container}>
                    <span className={s.project_title}>Строительно-монтажные работы</span>
                </div>
            </div>
        </div>
    )
}