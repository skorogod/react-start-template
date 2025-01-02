import React, { ReactElement, FC } from 'react'
import  modalCss from './modal.module.scss'
import closeIcon from '../../assets/icons/close-svgrepo-com (1).svg'

type ModalProps = {
    visible: boolean,
    children: ReactElement
    onCloseClick: () => void
}

export const Modal:FC<ModalProps> = (props: ModalProps) => {
    return (
        <div className={modalCss.modalOverlay}>
            <div className={modalCss.modal}>
                <header className={modalCss.modalHeader}>
                    <button className={modalCss.closeButton}>
                        <i className={modalCss.closeIcon}></i>
                    </button>
                </header>
                {props.children}
            </div>
        </div>
    )
} 