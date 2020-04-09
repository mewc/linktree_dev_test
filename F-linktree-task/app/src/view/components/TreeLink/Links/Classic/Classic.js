import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';


const Classic = forwardRef((props, ref) => {
    const { data, toggle } = props;
    const LtLink = cx({
        'lt-link': true
    })
    return (
        <React.Fragment>
            <div className={LtLink} onClick={() => toggle()} >
            <a href={data.link} target="_blank" rel="noopener noreferrer">{data.name}</a>
            </div>
        </React.Fragment>
    )
});


export default Classic