import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../../../util/styling';
import LinkDrawer from '../../LinkDrawer';


const buildShowList = (showData, config) => {

    const ShowsDrawerWrapperClass = cx({
        'show-soldout': showData.status === 'SOLD OUT',
        'show-available': showData.status === 'AVAILABLE',
        'show-selling-fast': showData.status.includes('tickets left')
    });
    return (<div className={ShowsDrawerWrapperClass} key={`show-list-${config.index}`}>
        {showData.date}
        {showData.venue}
        {showData.link}
    </div>)
} 

const Shows = forwardRef((props, ref) => {
    const { className, data, shows } = props;
    let classes = stringToClassNamesObject(className);
    const ShowsDrawerWrapperClass = cx({
        ...classes,
        'link-shows-drawer': true,
    });
    const LtLink = cx({
        'lt-link': true
    })
    return (
        <React.Fragment>
            <div className={LtLink}>{data.name}</div>
            <LinkDrawer {...props}>
                <div className={ShowsDrawerWrapperClass}>
                    {(shows)?shows.map((d, index) => buildShowList(d, {index})):'Missing'}
                </div>
            </LinkDrawer>
        </React.Fragment>
    )
});


export default Shows;