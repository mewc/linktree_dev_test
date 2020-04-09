import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import {LINK_TOGGLE} from '../../../../assets/strings/constants';

const LinkDrawer = forwardRef((props, ref) => {
    const { children, status } = props;

    const LinkDrawerWrapperClass = cx({
        'link-drawer-open': LINK_TOGGLE.ON === status,
        'link-drawer-closed': LINK_TOGGLE.OFF === status
    })
    return (
        <React.Fragment>
            <div className={LinkDrawerWrapperClass}>
                {children}
            </div>
        </React.Fragment>
    )
});


export default LinkDrawer