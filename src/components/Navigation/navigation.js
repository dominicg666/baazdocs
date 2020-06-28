import React, { memo } from 'react';
import { shape, string } from 'prop-types';
import { useNavigation } from '../../Hooks/Navigation/useNavigation';
import NavHeader from './navHeader';
import { NavLink, resourceUrl } from '../../drivers/index';
import './navigation.scss';

const Navigation = props => {
    const {
        hasModal,
        isOpen,
        handleClose
    } = useNavigation({});


    const rootClassName = isOpen ? `navigation_root_open` : `navigation_root`;
    const modalClassName = hasModal ? `navigation_modal_open` : `navigation_modal`;
    const bodyClassName = hasModal ? `navigation_body_masked` : `navigation_body`;



    return (
        <aside className={rootClassName}>
            <header className={modalClassName}>
                <NavHeader
                    onClose={handleClose}
                />
            </header>
            <div className={bodyClassName} >
                <ul className=" navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="active" to={resourceUrl('/')} onClick={handleClose} >Overview</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" to={resourceUrl('/environment-setup')} onClick={handleClose}>Environment Setup</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  activeClassName="active" to={resourceUrl('/cli')} onClick={handleClose}>CLI Installation</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default memo(Navigation);

Navigation.propTypes = {
    classes: shape({
        body: string,
        footer: string,
        header: string,
        root: string,
        root_open: string,
        isRoot: string
    })
};
