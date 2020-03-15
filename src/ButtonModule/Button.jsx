import React, { useState } from 'react'
import styles from './button.module.css'
import cx from 'classnames'

const ButtonModule = () => {
    const [active, setActive] = useState('red')

    const onClick = () => {
        setActive('green')
    }

    const isActive = () => {
        return active === 'red' ? styles.button : cx(styles.button, styles.active)
    }

    return (
        <div>
            <button onClick={onClick} className={isActive()}>
                Im module
            </button>
        </div>
    )
}

export default ButtonModule
