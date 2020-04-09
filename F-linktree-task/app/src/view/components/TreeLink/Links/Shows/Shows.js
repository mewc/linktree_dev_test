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
    const ShowsDrawerWrapperClass = cx({
        'show-soldout': showData.status === 'SOLD OUT',
        'show-available': showData.status === 'AVAILABLE',
        'show-selling-fast': showData.status.includes('tickets left'),
        'lt-show-item': true
    });
    //TODO handle soldout shows as desired (currently clickthrough anyway)
    return (<Grid container spacing={2} direction="row" className={ShowsDrawerWrapperClass} onClick={() => { window.open(showData.link, "_blank")}}>
        <Grid item xs={9} spacing={4} align={'left'}>
            <Grid item ><span className={'lt-show-date'}>{showData.date}</span></Grid>
            <Grid item ><span className={'lt-show-venue'}>{showData.venue}</span></Grid>
        </Grid>
        <Grid container xs={3} className={'lt-show-link'} alignItems={'center'} justify={'flex-end'}>
            <Grid item  >{(showData.status === 'SOLD OUT') ? 'Sold out' : <span>></span>}</Grid>
        </Grid>
    </Grid>)
}

const Shows = forwardRef((props, ref) => {
    const { className, data, shows, toggle } = props;
    let classes = stringToClassNamesObject(className);
    const ShowsDrawerWrapperClass = cx({
        ...classes,
        'link-shows-drawer': true,
    });
    const LtLink = cx({
        'lt-link': true
    })
    //TODO handle logos dynamically as more providers are supported
    return (
        <React.Fragment>
            <div className={LtLink} onClick={() => toggle()}>{data.name}</div>
            <LinkDrawer {...props}>
                <div className={ShowsDrawerWrapperClass}>
                    {(shows) ? shows.map((d, index) => (<ShowsListItem key={index} showData={d} config={{}} />)) : 'Missing'}
                </div>
                <div>
                    <img src={SongkickLogo} />
                </div>
            </LinkDrawer>
        </React.Fragment>
    )
});


export default Shows;