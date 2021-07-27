import React, { memo, useMemo } from 'react';
import { shape, string } from 'prop-types';
import { useNavigation } from '../../Hooks/Navigation/useNavigation';
import NavHeader from './navHeader';
import {  useHistory, resourceUrl, Link } from '../../drivers/index';
import { useDropdown } from '@baaz/adapter/hooks/useDropdown'
import './navigation.scss';
import Icon from 'buikit/lib/Icon';
import { ChevronDown as ArrowDown, ChevronUp as ArrowUp } from 'react-feather';
import navigationData from './navigation.json';


const ChildNavigationItem = ({
    item,
    onClose
}) => {
    const history = useHistory();
    const isChildren = item && item.children || [];
    const nestedCategoryItem = useMemo(() => (item.children || []).map((item, key) => {
        return <ChildNavigationItem key={key} item={item} type="child" onClose={onClose} />
    }), [item])

    const { elementRef, expanded, setExpanded } = useDropdown();

    const toggleIcon = expanded ? ArrowUp : ArrowDown;
    const hamberger_icon = <Icon src={toggleIcon} />;

    const rootClass = `nav-item`;
    const activeChild = `navbar-nav`;
    const activeChildren = `mobile_menuLinks ${isChildren.length > 0 ? 'activeChildren' : ''}`;

    const toggleExpanded = (e) => {
        if (isChildren.length > 0) {
            setExpanded(!expanded);

        } else {
            const productLink = resourceUrl(`${item.link}`);
            history.push(productLink);
            onClose();
        }

        e.preventDefault();
        e.stopPropagation();
    };


    return (
        <li
            className={rootClass}
            ref={elementRef}
        >
            <Link className={activeChildren} onClick={(e) => toggleExpanded(e)} >
                {item.link_name} {isChildren.length > 0 ? hamberger_icon : null}
            </Link>
            {
                expanded ? (<ul className={activeChild} >
                    {nestedCategoryItem}
                </ul>) : null
            }
        </li>
    )
}

const Navigation = props => {
    const {
        hasModal,
        isOpen,
        handleClose
    } = useNavigation({});



    const rootClassName = isOpen ? `navigation_root_open` : `navigation_root`;
    const modalClassName = hasModal ? `navigation_modal_open` : `navigation_modal`;
    const bodyClassName = hasModal ? `navigation_body_masked` : `navigation_body`;

    console.log(navigationData);


    return (
        <aside className={rootClassName}>
            <header className={modalClassName}>
                <NavHeader
                    onClose={handleClose}
                />
            </header>
            <div className={bodyClassName} >
                    <ul className=" navbar-nav">
                        {
                            navigationData.navigation.map((item, key) => {
                                return (<ChildNavigationItem key={key} item={item} onClose={handleClose} />)
                            })
                        }
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
