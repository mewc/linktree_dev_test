import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../util/styling';



const Icon = forwardRef((props, ref) => {
    const { src, className, alt,size } = props;
    let classes = stringToClassNamesObject(className);
    const IconClass = cx({
        ...classes,
        [`${size}-icon`]: true //xs s m l xl
    })
    return (<img src={src} className={IconClass} alt={alt} />
    );
});


export default Icon