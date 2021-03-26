
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import propTypes from 'prop-types'
import Button from './Button'

const Header = ({onAdd, title}) => {
    const location = useLocation()
    const [color, setColor] = useState(false)
    const changeColor = ()=> setColor(!color)
    const onClick = () => {
        changeColor()
        onAdd()
    }


    return (
        <header className="header">
            <h1>{ title }</h1>
            {location.pathname === '/' &&
                <Button 
                    color={!color?'green':'red'} 
                    text={!color?'Add':'Close'} 
                    onClick={onClick} 
                />
            }
        </header>
    )
}

Header.defaultProps = {
    title:"Task Manager"
}
Header.propTypes = {
    title: propTypes.string
}

export default Header
