import React, {
    forwardRef,
    useState
} from 'react';
import { LINK_TYPES, LINK_TOGGLE } from '../../../assets/strings/constants';
import cx from 'classnames';
import './style.css';

//IMPORTING LINK TYPES TO FILE
import Classic from './Links/Classic';
import Music from './Links/Music';
import Shows from './Links/Shows';


const decideLinkType = (linkData, config) => {
    switch (linkData.type.toUpperCase()) {
        case LINK_TYPES.CLASSIC:
            return (<Classic data={linkData} {...config}/>)
        case LINK_TYPES.MUSIC:
            return (<Music data={linkData} {...config}/>)
        case LINK_TYPES.SHOWS:
            return (<Shows data={linkData} {...config} />)
        default:
            console.log('none');
            break;
    }
}


const TreeLink = forwardRef((props, ref) => {
    const { linkData, linkTypeData } = props;
    const [status, setToggleState] = useState(LINK_TOGGLE.OFF);

    function toggle() {
        setToggleState(status === LINK_TOGGLE.ON ? LINK_TOGGLE.OFF: LINK_TOGGLE.ON);
    }
    const ClassicWrapperClass = cx({
        'lt-link-wrapper': true
    })
    return (
        <div className={ClassicWrapperClass} >
            {decideLinkType(linkData, { toggle, status, ...linkTypeData})}
        </div>
    )
});





export default TreeLink;