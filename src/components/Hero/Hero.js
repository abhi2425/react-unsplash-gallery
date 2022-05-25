import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import bgImage from "../../../public/img/bg-img.png"
import { useGlobalContext } from '../../context/GlobalContext'

const styles = {
  
  paperContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `url(${bgImage}) no-repeat center center fixed`,
    height: '400px',
    backgroundSize: 'cover',
    backdropFilter:'blur(5px)'

  },
}

const Hero = () => {
  const {columns}=useGlobalContext()
  return (
    <Paper sx={styles.paperContainer}>
      <div style={{padding:'2rem'}} className='flex-column'>
        <Typography variant={columns===1?'h3':'h2' }style={{ color: 'whitesmoke', mb: 4 }}>
          Download High Quality Images by Creator
        </Typography>

        <Typography variant='h5' sx={{color:'whitesmoke',mt:2}}>Over 2.4 million+ stock Images by our talented community</Typography>
        <div className='margin-t-s' style={{width:'60vw'}}>
          <SearchInput />
        </div>
      </div>
    </Paper>
  )
}

export default Hero
