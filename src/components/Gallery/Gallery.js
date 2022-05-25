import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import { Image } from 'mui-image'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { AiOutlineLike } from 'react-icons/ai'
import CustomModal from '../UI/Modal/CustomModal'
import ModalCard from './ModalCard/ModalCard'
import { useGlobalContext } from '../../context/GlobalContext'
import { getColumns } from '../../utils/column'
import ImageLoading from '../UI/Loading/ImageLoading'
import { useFormContext } from 'react-hook-form'

export default function Gallery() {
  const { watch } = useFormContext()
  const searchTerm = watch('search')
  const [open, setOpen] = useState(false)
  const [selectedPic, setSelectedPic] = useState({})
  const { columns, setColumns, searchData, searchLoading, pageLoading } = useGlobalContext()
  const handleClose = () => setOpen(false)
  const updateDimensions = () => setColumns(getColumns(window.innerWidth))

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const handleImageClick = useCallback((item) => {
    setOpen(true)
    setSelectedPic(item)
  }, [])

  const renderPhotos = useMemo(
    () =>
      searchLoading || pageLoading
        ? searchData?.map((_, index) => <ImageLoading key={index} />)
        : searchData?.map((item) => (
            <ImageListItem
              component={'div'}
              key={item.id || Math.random()}
              sx={{
                width: '100%',
                cursor: 'pointer',
                borderRadius: 2,
                height: 500,
              }}
              onClick={() => handleImageClick(item)}>
              <Image
                style={{ borderRadius: '8px' }}
                src={`${item.urls?.regular}`}
                srcSet={`${item.urls?.regular}`}
                alt={item.user?.name}
                duration={3000}
                easing='cubic-bezier(0.7, 0, 0.6, 1)'
                errorIcon={true}
                distance='50px'
                shiftDuration={900}
              />
              <ImageListItemBar
                position='below'
                title={
                  <div className={'flex-x-between'} style={{ backgroundColor: 'var(--color-bg)' }}>
                    <ListItem sx={{ p: 0.7, bg: 'black' }}>
                      <ListItemAvatar sx={{ mr: -1 }}>
                        <Avatar alt={item.user?.name} src={item.user?.profile_image?.medium} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontWeight: 'bold',
                              fontSize: 16.5,
                              letterSpacing: 0.8,
                              color: 'var(--color-font)',
                            }}
                            variant='h4'>
                            {item.user?.name}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            sx={{
                              mt: -0.5,
                              color: 'var(--color-caption)',
                              fontSize: 14,
                              letterSpacing: 0.7,
                            }}
                            component='p'
                            variant='body'>
                            {item.user?.username}
                          </Typography>
                        }
                      />
                    </ListItem>
                    <div className='flex-row'>
                      <i>
                        <AiOutlineLike size={20} color='var(--color-font)' />
                      </i>
                      <p style={{ alignSelf: 'center', fontSize: 13, color: 'var(--color-font)' }}>
                        {item.likes}
                      </p>
                    </div>
                  </div>
                }
              />
            </ImageListItem>
          )),
    [searchData, searchLoading, pageLoading],
  )

  return (
    <Box sx={{ px: columns > 2 ? 15.25 : 10, py: 3.5 }}>
      <ImageList variant='masonry' cols={columns} gap={20}>
        {renderPhotos?.length > 0 ? (
          renderPhotos
        ) : (
          <Typography
            variant='h4'
            sx={{ color: 'var(--color-font)' }}>{`No Results for ${searchTerm}`}</Typography>
        )}
      </ImageList>
      <CustomModal open={open} close={handleClose}>
        <ModalCard data={selectedPic} />
      </CustomModal>
    </Box>
  )
}
