import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../util/styling';
import LogoNoText from '../../../assets/img/logo_notext.svg'
import copy from '../../../assets/strings/copy';
import Icon from '../../components/Icon';
import * as rrd from "react-router-dom";
const DomLink = rrd.Link;

const Music = forwardRef((props, ref) => {
    const { className, data } = props;
    let classes = stringToClassNamesObject(className);
    const WrapperClass = cx({
        ...classes,
        'linktree-fail-wrapper': true,

    })
    return (
        <div className={WrapperClass}>
            <Icon src={LogoNoText} className={'logo-no-text'}></Icon>
            <h3>{copy.NO_USER_FOUND}</h3>
            <DomLink to={`/`} className={'return-link'}>{copy.RETURN_TO_HOME}</DomLink>
        </div>
    )
});


export default Music