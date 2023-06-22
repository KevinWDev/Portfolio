import { useState } from "react";
import arrowUp from '../../assets/arrows/arrowUp.png';
import arrowDown from '../../assets/arrows/arrowDown.png'
import '../../utils/styles/Collapse.css'

function Collapse({ name, children }) {

    const [isOpen, setIsOpen] = useState(true)


    return isOpen ? (
        <div className="collapseClose">
           <button className="collapse__button" onClick={() => setIsOpen(false)}>{name}
           
           <img className="collapse__img__arrow" src={arrowDown} alt="" />
           </button>
        </div>
    ) : (
    <div className="collapseOpen">
        <button className="collapse__button" onClick={() => setIsOpen(true)}>
        {name}
        <img className="collapse__img__arrow" src={arrowUp} alt="" />
        </button>
        <div className="collapse__children">
            {children}
        </div>
    </div>
    );
};

export default Collapse