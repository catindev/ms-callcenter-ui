import React, { Component } from 'react'
import classNames from 'classnames'
import './PeriodSelector.css'


export default class extends Component {
    onPeriod() {
        this.props.onChange &&
            this.props.onChange({ mode: 'interval' })
    }

    onDay() {
        this.props.onChange &&
            this.props.onChange({ mode: 'day' })
    }

    render() {
        const periodClasses = classNames({
            'bPeriodSelector__link': 1,
            'bPeriodSelector__link--active': this.props.mode === 'interval'
        })
        const dayClasses = classNames({
            'bPeriodSelector__link': 1,
            'bPeriodSelector__link--active': this.props.mode === 'day'
        })

        return (
            <div className="bPeriodSelector b">
                за <a className={periodClasses} onClick={this.onPeriod.bind(this)}>период</a> или за <a className={dayClasses} onClick={this.onDay.bind(this)}>день</a>
            </div>
        );
    }
}