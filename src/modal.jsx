import PropTypes from 'prop-types';

const Modal = ({ isVisible, onClose, children}) => {
    if (!isVisible) return null;
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }
    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm  flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="md:w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-white p-2 rounded"> {children} </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
  };
export default Modal;
