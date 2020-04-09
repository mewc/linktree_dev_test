import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../util/styling';


const UserHeader = forwardRef((props, ref) => {
    const { className, username } = props;
    let classes = stringToClassNamesObject(className);
    const HandleWrapperClass = cx({
        ...classes,
        'handle-wrapper': true
    })
    return (
        <div className={HandleWrapperClass}>
            <p>{`@${username}`}</p>
        </div>
    )
});


export default UserHeader