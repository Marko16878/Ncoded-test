import './stylesheet.scss'

interface Props {
    open: boolean;
    handleClose: Function;
    children: any;
}

function Modal({ open, handleClose, children }: Props) {

    return (
        <>
            {
                open &&
                <div className='base-modal-container' onClick={()=>{handleClose && handleClose()}}>
                    <div onClick={(event) => { event.stopPropagation() }}>
                        <div>
                            {children}
                        </div>
                        <div onClick={()=>{handleClose && handleClose()}}>
                            Close
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;