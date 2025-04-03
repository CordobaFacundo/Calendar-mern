import React, { useState } from 'react'
import Modal from 'react-modal'
import '../../styles.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    const onCloseModal = () => {
        console.log("cerrando modal");
        setIsOpen(false);
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1>hola mundo</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae corrupti possimus, provident facere nobis voluptatem dolorum est harum amet at iusto voluptatibus iste non eius repellendus dicta accusamus laborum odit?</p>
        </Modal>
    )
}
