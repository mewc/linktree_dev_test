import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../util/styling';
import TreeLink from '../TreeLink';


const TreeWrapper = forwardRef((props, ref) => {
    const { className, linkCollection } = props;
    let classes = stringToClassNamesObject(className);
    const TreeWrapperClass = cx({
        ...classes,
        'tree-wrapper': true
    })
    console.log(linkCollection);

    //TODO process all links for user
    return (
        <div className={TreeWrapperClass}>
            {linkCollection.map((l, index) => (<TreeLink linkData={l} key={`link-${index}`}/>))}
        </div>
    )
});


export default TreeWrapper