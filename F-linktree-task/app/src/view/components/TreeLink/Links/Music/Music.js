import React, {
    forwardRef,
    useState
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../../../util/styling';
import LinkDrawer from '../../LinkDrawer';
import Icon from '../../../Icon';
import { Grid, LinearProgress } from '@material-ui/core'
import { USER_DATA_STATES } from '../../../../../assets/strings/constants';
import apple from '../../../../../assets/img/apple.svg';
import bandcamp from '../../../../../assets/img/bandcamp.svg';
import soundcloud from '../../../../../assets/img/soundcloud.svg';
import spotify from '../../../../../assets/img/spotify.svg';
import playIcon from '../../../../../assets/img/play-button.png';

const MusicProviderLogos = {
    spotify, bandcamp, apple, soundcloud
}

const MusicProviderListItem = (props) => {
    const { item, setPlayItem } = props;
    const { provider, link, img, title } = item
    const MusicProviderListItemClasses = cx({
        'lt-music-item': true
    });

    return (<Grid container spacing={2} alignItems={'center'} direction="row" className={MusicProviderListItemClasses}>
        <Grid item align={'left'}  onClick={() => { window.open(link, "_blank") }} ><Icon size={'xs'} src={MusicProviderLogos[provider.toLowerCase()]}></Icon></Grid>
        <Grid item xs={8} align={'left'} onClick={() => { setPlayItem(item) }} ><span>{provider}</span></Grid>
        <Grid item xs={2} align={'center'} onClick={() => { setPlayItem(item) }} ><span>{'>'}</span></Grid>
    </Grid>);
}

const MusicPlayerListItem = (config) => {
    const { playItem } = config;
    const MusicPlayerItemClasses = cx({ 'lt-music-player': true });
    const MusicProgressClasses = cx({ 'lt-music-progress': true });

    //TODO integrate vendor play wrappers instead of this mock play wrapper
    //TODO for generic wrapper, loop in % progress properly
    return (<Grid container spacing={1} alignItems={'center'} direction="row" onClick={() => { window.open(playItem.link, "_blank") }} className={MusicPlayerItemClasses}>
        <Grid item xs={3} align={'left'}  ><Icon className={'lt-music-item-cover'}  size={'m'} src={`/data/img/${playItem.img}`}></Icon></Grid>
        <Grid container alignItems={'center'} item xs={8} align={'left'} >
            <Grid item align={'left'} className={'lt-music-item-play'} ><Icon size={'xs'} src={playIcon}></Icon></Grid>
            <Grid item>{playItem.title}</Grid>
        </Grid>
        <Grid item xs={12}>
            <LinearProgress variant="determinate" value={66} className={MusicProgressClasses} />
        </Grid>
    </Grid>);
}

const Music = forwardRef((props, ref) => {
    const { className, data, music, toggle } = props;
    const [playItem, setPlayItemState] = useState(false);

    console.log('MUSIC', { props });
    let classes = stringToClassNamesObject(className);
    const MusicDrawerWrapperClass = cx({ ...classes, 'link-music-drawer': true })
    const LtLink = cx({ 'lt-link': true })

    function setPlayItem(data) { setPlayItemState(data); }

    return (
        <React.Fragment>
            <div className={LtLink} onClick={() => toggle()}>{data.name}</div>
            <LinkDrawer {...props} className={MusicDrawerWrapperClass}>
                {(playItem !== false) ? <MusicPlayerListItem playItem={{ ...playItem }} /> : ''}
                {(music || music !== USER_DATA_STATES.NOTFOUND) ? music.map((d, index) => (<MusicProviderListItem key={`mpli-${index}`} item={d} setPlayItem={setPlayItem} />)) : ' Missing '}
            </LinkDrawer>
        </React.Fragment>
    )
});


export default Music