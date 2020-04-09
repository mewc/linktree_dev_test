import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../../../util/styling';
import LinkDrawer from '../../LinkDrawer';
import Icon from '../../../Icon';
import { Grid } from '@material-ui/core'
import { USER_DATA_STATES } from '../../../../../assets/strings/constants';
import { spotify, bandcamp, apple, soundcloud } from '@fortawesome/fontawesome-free';

const MusicProviderLogos = {
    spotify, bandcamp, apple, soundcloud
}

const MusicProviderListItem = (props) => {
    const { provider, link } = props;
    console.log({ props });
    const MusicProviderListItemClasses = cx({
        'lt-music-item': true
    });
    return (<React.Fragment>
        <Grid item xs={12} className={MusicProviderListItemClasses} onClick={() => { window.open(link, "_blank") }}>
            <Grid item align={'left'}><Icon src={MusicProviderLogos[provider]}></Icon></Grid>
            <Grid item align={'left'}><span>{provider}</span></Grid>
            <Grid item align={'right'}><span>{'>'}</span></Grid>
        </Grid>
    </React.Fragment>);
}

const MusicPlayerListItem = (props) => {
    return (<div></div>);
}

const Music = forwardRef((props, ref) => {
    const { className, data, music, toggle } = props;
    console.log('MUSIC', { props });
    let classes = stringToClassNamesObject(className);
    const MusicDrawerWrapperClass = cx({ ...classes, 'link-music-drawer': true })
    const LtLink = cx({ 'lt-link': true })
    const ProviderLink = cx({ 'lt-music-provider': true })
    return (
        <React.Fragment>
            <div className={LtLink} onClick={() => toggle()}>{data.name}</div>
            <LinkDrawer {...props}>
                <MusicPlayerListItem />
                <Grid container spacing={2} direction="row" className={ProviderLink}>
                    {(music || music !== USER_DATA_STATES.NOTFOUND) ? music.map((d, index) => (<MusicProviderListItem {...d} index={index} />)) : ' Missing '}
                </Grid>
            </LinkDrawer>
        </React.Fragment>
    )
});


export default Music