import React from 'react';
import {Button, Menu, MenuItem} from "@mui/material";
import {ArrowForwardIosOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

import styles from './Header.module.sass'

export const HeaderMenu = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={styles.menu}>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <ArrowForwardIosOutlined style={{transform: `rotate(${open?"90deg":"0"})`}}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} className={styles.RefButton}>
                    <Link to='/'> Home </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to='/weather'> Weather </Link>
                </MenuItem>
            </Menu>
        </div>
    );
};