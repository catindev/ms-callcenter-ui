import React, { Component } from 'react'
import './Header.css'


export default class extends Component {
    render() {
        return (
            <header className="bHeader">
                <h1 className="bHeader__logo">
                    <span role="img" aria-label="emoji">📊</span>
                    <a href="/">Mindsales</a>
                </h1>

                <ul className="bHeader__nav">
                    <li>
                        <span role="img" aria-label="emoji">📞</span>
                        <a className="bHeader__navLink bHeader__navLink--active">Коллцентр</a>
                    </li>
                    <li>
                        <span role="img" aria-label="emoji">🦄</span>
                        <a className="bHeader__navLink" href="/customers">Текущие клиенты</a>
                    </li>
                    <li>
                        <span role="img" aria-label="emoji">💰</span>
                        <a className="bHeader__navLink" href="/closed">Закрытые клиенты</a>
                    </li>
                    <li>
                        <span role="img" aria-label="emoji">🎰</span>
                        <a className="bHeader__navLink" href="/marketing">Маркетинговые данные</a>
                    </li>
                </ul>

                <div className="bHeader__nav bHeader__nav--options">
                    <a className="bHeader__navLink bHeader__navLink--exit" href="/exit">Выйти</a>
                </div>
            </header>
        );
    }
}