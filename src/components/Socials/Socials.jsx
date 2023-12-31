import React from 'react'
import { SOCIALS } from '../../utils/constants'
import Icon from '../Icon/Icon'

const Socials = () => (
    <ul className='socials'>
        {SOCIALS.map(({ icon, link }, i) =>
            <li title={icon} className='socials-item' key={icon}>
                <a href={link} target='__blank'>
                    <Icon name={icon} />
                </a>
            </li>
        )}
    </ul>
)


export default Socials