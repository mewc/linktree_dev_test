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
            <div className={LtLink} onClick={() => { toggle(); window.open(data.link, "_blank")}} >
                {data.name}
            </div>
        </React.Fragment>
    )
});


export default Classic