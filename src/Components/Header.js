import React from 'react'
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className={style.header}>
        <h3 className={style.appName}>Crypto Tracker</h3>
    </header>
  )
}

export default Header