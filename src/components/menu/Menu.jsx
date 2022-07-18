import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';;
import Divider from '@mui/material/Divider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'black',
        // theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: 'black'
                // theme.palette.text.secondary,
                // marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: 'black',
                // alpha(
                //     theme.palette.primary.main,
                // theme.palette.action.selectedOpacity,
                // ),
            },
        },
    },
}));

export default function MenuLogin() {
    // const [anchorEl, setAnchorEl] = useState() < null | HTMLElement > (null);
    const [anchorEl, setAnchorEl] = useState(false)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className=''>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon className={'p-0 !important'} />
            </IconButton>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    <CheckBoxIcon className={'ml-3'} />
                    <a className='text-[13px]' href="/">ذخیره حساب کاربری</a>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <CheckBoxOutlineBlankIcon className={'ml-3'} />
                    <a className='text-[13px]' href="#">ورود دومرحله‌ای</a>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <KeyIcon className={'ml-3'} />
                    <a className='text-[13px]' href="#">بازیابی رمز عبور</a>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                    <LoginIcon sx={{ ml: '12px' }} />
                    <a className='text-[13px]' href="#">تست سازگاری مرورگر</a>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <LoginIcon sx={{ ml: '12px' }} />
                    <a className='text-[13px]' href="#">سوالات متداول</a>
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
