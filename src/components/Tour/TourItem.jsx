import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Icon from '../Icon/Icon'

const TourItem = ({
    date,
    city,
    place,
    ticketLink,
    videoLink,
    soldOut,
    i
}) => {
    return (<li>
        <ScrollAnimation className='tour-item' animateIn='fadeInLeft' animateOut='fadeOutRight' delay={i * 100} offset={40} >
            <div className="tour-item__info">
                <div className="tour-item__date">
                    {new Date(date).toLocaleDateString('ru-RU', {
                        month: 'numeric',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                </div>
            </div>
            <p className="tour-item__place">{place}</p>
            <p className="tour-item__city">{city}</p>
            {!soldOut ? (
                <a href={ticketLink || videoLink} target='__blank' className='tout-item__button'>
                    {ticketLink ? (
                        <>
                            <span>Билеты</span>
                            <Icon name='arrow-right' />
                        </>
                    ) : (
                        <span>VIDEO</span>
                    )}
                </a>
            ) :
                <button className='tout-item__button soldout'>SOLD OUT!</button>
            }
        </ScrollAnimation>
    </li>
    )
}

export default TourItem