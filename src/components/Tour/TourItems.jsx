import React, { useEffect } from 'react'
import Section from '../Section/Section'
import SectionTitle from '../Title/SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import { getTourItems } from '../../reducers/tourReducer.js'
import TourItem from './TourItem.jsx'
import { Link } from 'react-router-dom'

const TourItems = () => {

    const dispatch = useDispatch()

    const { items = [], isLoading } = useSelector(({ tour }) => tour)

    useEffect(() => {
        dispatch(getTourItems())
    }, [dispatch])

    //const filtered = items.filter((_, i) => i < 5) - не больше пяти
    console.log(items)

    return (
        <Section className='tour' >
            <div className="container">
                <SectionTitle text='Концерты' />
                {isLoading ? 'LOADING' : (
                    <ul className="tour-list">
                        {items.map((item, i) => (
                            <TourItem {...item} i={i} key={item.sys.id} />
                        ))}
                    </ul>
                )}
                <Link to='/tour' className='button-more'>Все концерты</Link>
            </div>
        </Section>
    )
}

export default TourItems