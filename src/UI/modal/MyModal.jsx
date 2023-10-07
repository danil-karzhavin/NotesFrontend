import React from "react";
import cl from './MyModal.module.css'

const MyModal = ({children, visible}) => {
    const rootClasses = [cl.myModal]
    
    // отображение модального окна
    if (visible) {
        rootClasses.push(cl.active);
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.myModalContent}>
                {children}
            </div>
        </div>
    )
}
export default MyModal;