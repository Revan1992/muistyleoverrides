import React from 'react';
import './Switch.scss';
import { Switch } from '@mui/material';

const SwitchComp = (props: any) => {
    return (
        <Switch size={props?.size} disableRipple={true} />
    )
}

export default SwitchComp;