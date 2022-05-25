import React from 'react'
import { AppBar, CssBaseline, Typography, Switch, FormControlLabel } from '@mui/material'
import { useGlobalContext } from '../../context/GlobalContext'

const NavBar = () => {
  const { setTheme, theme, columns } = useGlobalContext()

  const toggleHandler = (event) => {
    const checked = event.target.checked
    checked ? setTheme('dark-theme') : setTheme('light-theme')
  }
  return (
    <AppBar
      style={{ backgroundColor: 'var(--color-bg)' }}
      sx={{ zIndex: 10, py: 2.3, px: 5 }}
      position='fixed'>
      <CssBaseline />
      <div className='flex-x-between'>
        <Typography
          variant={columns == 1 ? 'h4' : 'h3'}
          component='h3'
          sx={{ fontFamily: 'Pattaya ,sans-serif', color: 'var(--color-font)' }}>
          Image Gallery
        </Typography>
        <FormControlLabel
          sx={{ fontSize: 17, fontWeight: 'bold' }}
          value='start'
          control={
            <Switch
              color='primary'
              onChange={toggleHandler}
              checked={theme === 'dark-theme' && true}
            />
          }
          label={
            <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: 'var(--color-font)' }}>
              Dark Mode
            </Typography>
          }
          labelPlacement='start'
        />
      </div>
    </AppBar>
  )
}

export default NavBar
