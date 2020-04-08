import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../util/styling';
import UserAvatar from '../UserAvatar';
import UserHandle from '../UserHandle';


const UserHeader = forwardRef((props, ref) => {
    const { username, className, imgsrc } = props;
    let classes = stringToClassNamesObject(className);
    const HeaderWrapperClass = cx({
        ...classes,
        'user-header-wrapper': true
    })
    return (
        <div className={HeaderWrapperClass}>
            <UserAvatar imgsrc={imgsrc}></UserAvatar>
            <UserHandle username={username}></UserHandle>
        </div>
    )
});


export default UserHeader