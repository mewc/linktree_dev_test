import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../../../util/styling';
import LinkDrawer from '../../LinkDrawer';

const Music = forwardRef((props, ref) => {
    const { className, data } = props;

    let classes = stringToClassNamesObject(className);
    const MusicDrawerWrapperClass = cx({
        ...classes,
        'link-music-drawer': true
    })
    const LtLink = cx({
        'lt-link': true
    })
    return (
        <React.Fragment>
            <div className={LtLink}>{data.name}</div>
            <LinkDrawer {...props}>
                <div className={MusicDrawerWrapperClass}>
                Music
                </div>
            </LinkDrawer>
        </React.Fragment>
    )
});


export default Music