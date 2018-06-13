import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'


export default class extends Component {
    render() {
        return (
            <section className="bSidebar b">
                <ul className="bSidemenu">
                    <li className="bSidemenu__title">Статистика по звонкам</li>

                    <li className="bSidemenu__item">
                        <NavLink to="/callcenter/all" activeClassName="bSidemenu__item--active">
                            Пропущенные и входящие
                        </NavLink>
                    </li>
                    <li className="bSidemenu__item">
                        <NavLink to="/callcenter/incoming" activeClassName="bSidemenu__item--active">
                            Время входящих
                        </NavLink>
                    </li>
                    <li className="bSidemenu__item">
                        <NavLink to="/callcenter/missing" activeClassName="bSidemenu__item--active">
                            Время пропущенных
                        </NavLink>
                    </li>
                    <li className="bSidemenu__item">
                        <NavLink to="/callcenter/reaction" activeClassName="bSidemenu__item--active">
                            Скорость ответов на звонки
                        </NavLink>
                    </li>
                </ul>
            </section>
        );
    }
}