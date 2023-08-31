import React from 'react'
import classes from './Card.module.scss'
import IconEllipsis from '../../images/icon-ellipsis.svg'

const Card = (props) => {
    

  return (
    <div className={`${classes.card} ${props.className}`}>
        <div className={classes.card__bg} style={{
            backgroundColor: props.bg.color
        }}>
            <img  alt='Background Icon' src={props.bg.icon}/>
        </div>
        <div className={classes.card__info}>
            <div className={classes.card__row}>
                <h1 className={classes.card__heading}>{props.data.title}</h1>
                <button className={classes.card__button}><img src={IconEllipsis} alt='Ellipsis Icon'/></button>
            </div>
            <div className={classes.card__mobilerow}>
            <p className={classes.card__current}>{props.data.timeframes[props.timeframe].current}hrs</p>
            <p className={classes.card__previous}>{props.message} - {props.data.timeframes[props.timeframe].previous}hrs</p>
            </div>
        </div>
    </div>
  )
}

export default Card