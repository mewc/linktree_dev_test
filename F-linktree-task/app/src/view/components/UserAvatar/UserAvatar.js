import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../util/styling';
import { buildImgLinkFromFilename} from '../../../util/cdn';


const UserAvatar = forwardRef((props, ref) => {
    const { className, imgsrc } = props;
    let classes = stringToClassNamesObject(className);
    const HeaderWrapperClass = cx({
        ...classes,
    })
    const ImgClass = cx({
        'user-icon': true
    })
    return (
        <div className={HeaderWrapperClass}>
            <img src={buildImgLinkFromFilename(imgsrc)} className={ImgClass} alt={"user avatar"}></img> 
        </div>
    )
});


export default UserAvatar