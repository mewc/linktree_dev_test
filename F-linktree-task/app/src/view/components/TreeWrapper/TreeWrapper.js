import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../util/styling';
import TreeLink from '../TreeLink';


const TreeWrapper = forwardRef((props, ref) => {
    const { linkCollection, linkTypeData } = props; 
    const TreeWrapperClass = cx({
        'tree-wrapper': true
    })
    return (
        <div className={TreeWrapperClass}>
            {linkCollection.map((l, index) => (<TreeLink linkData={l} key={`link-${index}`} linkTypeData={linkTypeData} />))}
        </div>
    )
});


export default TreeWrapper