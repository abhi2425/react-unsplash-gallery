import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function ImageLoading() {
  return (
    <Stack spacing={2} sx={{ mb: 2 }}>
      <Skeleton variant='rectangular' width={300} height={250} animation='wave' />
      <div className='flex-row'>
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='text' width={250} height={40} />
      </div>
    </Stack>
  )
}
