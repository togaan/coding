import React from "react";
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { useMode } from "../ModeContext";
import sidebarElements from "./SidebarElements";

const Sidebar = () => {
    
    const [items, setItems] = React.useState(sidebarElements)
    const showchildItem = (id) => {
        setItems(prev => prev.map(item => (
            item.id === id ?
                {
                    ...item,
                    isActive: !item.isActive,
                    children: item.children.map(child => ({ ...child, isActive: false }))
                } : item
        )));
    };

    const showGrandchildItem = (childId, parentId) => {
        setItems(prev => prev.map(item => {
            if (item.id === parentId) {
                return {
                    ...item,
                    children: item.children.map(child => (
                        child.id === childId ? { ...child, isActive: !child.isActive } : child
                    ))
                };
            }
            return item;
        }));
    };
    
    const { mode } = useMode();

    return (
        <div className={`sidebar sticky-top p-3 text-black ${!mode && "dark-mode"} `}>
            <div className="sticky-top sidebar-component">
                {items.map((item) => (
                    <div
                        key={item.id}
                        role="button"
                        className="d-flex flex-column mt-2 "
                    >
                        <div
                            onClick={() => showchildItem(item.id)}
                            className="fs-6 d-flex align-items-center user-select-none fw-normal ">
                            <FontAwesomeIcon icon={ item.isActive ? faCaretDown : faCaretRight} className='' />
                            <FontAwesomeIcon icon={faFolder} className='me-2 ms-2' />
                            {item.name}
                        </div>
                        <ul>
                            {item.isActive && 
                                item.children.map(child => (
                                    <li
                                        key={child.id}
                                        className=""
                                        onClick={() => showGrandchildItem(child.id, item.id)}
                                    >
                                        {child.childName}
                                        <ul>
                                            {child.isActive &&
                                                child.grandChildren.map((grandChild, index) => (
                                                    <li
                                                        key={index}
                                                    >
                                                        <NavLink
                                                            end
                                                            className={`side-link text-black text-decoration-none ps-2 pe-2 fs-6 ${({isActive}) => isActive ? "active-side-link" : null}`}
                                                            to={grandChild.pathName}
                                                        >{grandChild.grandChildName}</NavLink>
                                                        
                                                    </li>
                                                ))}
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))}
                
            </div>

            
        </div>
    )
}

export default Sidebar

/**
 * <div>
                <h4
                    role="button"
                    className="fs-6 d-flex user-select-none fw-normal mt-4"
                    onClick={showPhoneDetails}
                >
                    <FontAwesomeIcon icon={ phoneDetails ? faCaretDown : faCaretRight} className='' />
                    <FontAwesomeIcon icon={faFolder} className='me-2 ms-2' />
                    Phone Devolpment
                </h4>
            </div>

            <div>
                <h4
                    role="button"
                    className="fs-6 d-flex user-select-none fw-normal mt-4"
                    onClick={showSyberDetails}
                >
                    <FontAwesomeIcon icon={ syberDetails ? faCaretDown : faCaretRight} className='' />
                    <FontAwesomeIcon icon={faFolder} className='me-2 ms-2' />
                    Syber Security
                </h4>
            </div>
            <div>
                <h4
                    role="button"
                    className="fs-6 d-flex user-select-none fw-normal mt-4"
                    onClick={showAIDetails}
                >
                    <FontAwesomeIcon icon={ aiDetails ? faCaretDown : faCaretRight} className='' />
                    <FontAwesomeIcon icon={faFolder} className='me-2 ms-2' />
                    AI
                </h4>
            </div>




            // const [webDetails, setWebDetails] = React.useState(false);
    // const showWebDetails = () => {
    //     setWebDetails(prev => !prev)
    // }

    // const [phoneDetails, setPhoneDetails] = React.useState(false);
    // const showPhoneDetails = () => {
    //     setPhoneDetails(prev => !prev)
    // }

    // const [syberDetails, setSyberDetails] = React.useState(false);
    // const showSyberDetails = () => {
    //     setSyberDetails(prev => !prev)
    // }
    
    // const [aiDetails, setAIDetails] = React.useState(false);
    // const showAIDetails = () => {
    //     setAIDetails(prev => !prev)
    // }



    const [items, setItems] = React.useState(sidebarElements);

    const showChildItems = (id) => {
        setItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, isActive: !item.isActive } : { ...item, isActive: false } // Collapse other parents
            )
        );
    };

    const showGrandchildItems = (childId, parentId) => {
        setItems(prev => prev.map(item => {
            if (item.id === parentId) {
                return {
                    ...item,
                    children: item.children.map(child =>
                        child.id === childId ? { ...child, isActive: !child.isActive } : { ...child, isActive: false } // Collapse other children
                    )
                };
            }
            return item;
        }));
    };

 */