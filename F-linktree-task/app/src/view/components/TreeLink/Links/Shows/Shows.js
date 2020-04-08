import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../../../util/styling';
import LinkDrawer from '../../LinkDrawer';


const Shows = forwardRef((props, ref) => {
    const { className, data } = props;
    let classes = stringToClassNamesObject(className);
    const ShowsDrawerWrapperClass = cx({
        ...classes,
        'link-shows-drawer': true
    })
    console.log(props);
    return (
        <React.Fragment>
            <div>{data.name}</div>
            <LinkDrawer {...props}>
                <div className={ShowsDrawerWrapperClass}>
                    Shows
                </div>
            </LinkDrawer>
        </React.Fragment>
    )
});


export default Shows;