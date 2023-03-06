import React from 'react';
import "./stylesheet.scss";
import { useDispatch, useSelector } from 'react-redux';
import Actions from "../../../store/actions";

interface Props {
    open: boolean;
    onClose: Function;
}

function Modal({children}:any, { open, onClose }: Props) {

    return (
        <>
            {
                open &&
                <div id="comments-modal-container" onClick={()=>{onClose && onClose()}}>
                    <div onClick={(event) => { event.stopPropagation() }}>
                        {children}
                    </div>
                    <div onClick={()=>{onClose && onClose()}}>
                        Close
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;