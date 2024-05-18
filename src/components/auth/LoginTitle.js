import React from 'react'
import styles from '../../styles/login.module.css'
const LoginTitle = ({title}) => {
  return (
        
        <div className={styles.loginTitle}>
            <div className="container">
                <div className="row">
                <div className={styles.loginTitle1}>
                    <h2>
                    {title}
                    </h2>
                </div>
                </div>
            </div>
        </div>
  )
}

export default LoginTitle