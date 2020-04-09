import React, {
    forwardRef
} from 'react';
import cx from 'classnames';
import './style.css';
import { stringToClassNamesObject } from '../../../../../util/styling';
import LinkDrawer from '../../LinkDrawer';
import { Grid } from '@material-ui/core'
import SongkickLogo from '../../../../../assets/img/songkick_logo.svg';
import Icon from '../../../Icon';

const ShowsListItem = (props) => {
    const { showData } = props;
    const SOLD_OUT = showData.status === 'SOLD OUT';
    const ShowsDrawerWrapperClass = cx({
        'show-soldout': SOLD_OUT,
        'show-available': showData.status === 'AVAILABLE',
        'show-selling-fast': showData.status.includes('tickets left'),
        'lt-show-item': true
    });
    //TODO handle soldout shows as desired (currently clickthrough anyway)
    return (<Grid container spacing={2} direction="row" className={ShowsDrawerWrapperClass}>
        <Grid item xs={9} align={'left'}>
            <Grid item className={'lt-show-date'}><span >{showData.date}</span></Grid>
            <Grid item className={'lt-show-venue'}><span>{showData.venue}</span></Grid>
        </Grid>
        <Grid container item xs={3} alignItems={'center'} justify={'flex-end'} className={'lt-show-link'} onClick={() => { window.open(showData.link, "_blank") }}>
            <Grid item  >{(SOLD_OUT) ? 'Sold out' : <span>></span>}</Grid>
        </Grid>
    </Grid>)
}

const Shows = forwardRef((props, ref) => {
    const { className, data, shows, toggle } = props;
    let classes = stringToClassNamesObject(className);
    const ShowsDrawerWrapperClass = cx({ ...classes, 'link-shows-drawer': true, });
    const LtLink = cx({ 'lt-link': true })
    const ProviderLink = cx({ 'lt-show-provider': true })
    //TODO handle logos dynamically as more providers are supported
    return (
        <React.Fragment>
            <div className={LtLink} onClick={() => toggle()}>{data.name}</div>
            <LinkDrawer {...props}>
                <div className={ShowsDrawerWrapperClass}>
                    {(shows) ? shows.map((d, index) => (<ShowsListItem key={index} showData={d} config={{}} />)) : 'Missing'}
                </div>
                <Grid container justify={'center'} spacing={3} className={ProviderLink}>
                    <Grid item ><img src={SongkickLogo} /></Grid>
                </Grid>
            </LinkDrawer>
        </React.Fragment>
    )
});


export default Shows;