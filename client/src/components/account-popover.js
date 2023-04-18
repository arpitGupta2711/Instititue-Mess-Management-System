import React from 'react'
import PropTypes from 'prop-types';
import { Box, MenuItem, MenuList, Popover, Typography } from '@mui/material';

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: '300px' }
      }}
    >
        <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline" fontWeight={700} >
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          Abhishek Chaurasiya
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          '& > *': {
            '&:first-of-type': {
              borderTopColor: 'divider',
              borderTopStyle: 'solid',
              borderTopWidth: '1px'
            },
            padding: '12px 16px'
          }
        }}
      >
        <MenuItem  fontWeight={600}>
          Sign out
        </MenuItem>
      </MenuList>

    </Popover>
 
  )
}
