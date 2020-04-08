import React, {
    forwardRef
} from 'react';
import './style.css';


const Classic = forwardRef((props, ref) => {
    const { data } = props;
    return (
        <React.Fragment>
            <a href={data.link} target="_blank" rel="noopener noreferrer">{data.name}</a>
        </React.Fragment>
    )
});


export default Classic