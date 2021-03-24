
import { useState } from 'react'
import propTypes from 'prop-types'
import Button from './Button'

const Header = ({onAdd, title}) => {
    const [color, setColor] = useState(false)
    const changeColor = ()=> setColor(!color)
    const onClick = () => {
        changeColor()
        onAdd()
    }


    return (
        <header className="header">
            <h1>{ title }</h1>
            <Button 
                color={!color?'green':'red'} 
                text={!color?'Add':'Close'} 
                onClick={onClick} 
            />
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
