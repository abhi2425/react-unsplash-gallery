import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { AiOutlineLike, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { Avatar, Box, Chip, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import Icon from '../../UI/Icon/Icon'
import { useGlobalContext } from '../../../context/GlobalContext'

export default function ModalCard({ data }) {
  const tags = data?.tags
  const { columns } = useGlobalContext()

  const stack = tags?.map((tag) => (
    <Chip
      style={{ backgroundColor: 'var(--color-font)' }}
      key={tag.title}
      sx={{ borderRadius: 2 }}
      label=<Typography
        sx={{
          fontSize: 14,
          letterSpacing: 0.8,
          color: 'var(--color-bg)',
        }}
        variant='h4'>
        {tag.title}
      </Typography>
    />
  ))
  return (
    <Card style={{ backgroundColor: 'var(--color-bg)' }} sx={{ width: '100%' }}>
      <CardMedia
        loading='lazy'
        component={'img'}
        alt={data.user?.name}
        height={columns >= 3 ? 500 : '300'}
        image={data.urls?.regular}
        sx={{ width: '100%', objectFit: 'cover' }}
      />
      <CardContent>
        <Box className={columns >= 2 ? 'flex-x-between' : 'flex-y-start'}>
          <ListItem sx={{ p: 0.7 }}>
            <ListItemAvatar sx={{ mr: -1 }}>
              <Avatar alt={data.user?.name} src={data.user?.profile_image?.medium} />
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
                  {data.user?.name}
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
                  {data.user?.username}
                </Typography>
              }
            />
          </ListItem>

          <Icon
            Component={AiFillInstagram}
            title={data?.user?.instagram_username ? `/${data?.user?.instagram_username}` : ''}
          />

          <Icon
            Component={AiOutlineTwitter}
            title={data?.user?.twitter_username ? `/${data?.user?.twitter_username}` : ''}
          />

          <Icon Component={AiOutlineLike} title={data?.likes} />
        </Box>

        <Typography
          sx={{
            mt: 1,
            fontSize: 15,
            color: 'var(--color-font)',
          }}
          variant='h4'>
          {data.description}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            fontWeight: 'bold',
            fontSize: 16,
            color: 'var(--color-font)',
          }}
          variant='h4'>
          {data.user?.bio}
        </Typography>
        {stack?.length ? (
          <>
            <Typography variant='h5' sx={{ color: 'var(--color-font)', mt: 2 }}>
              Related Tags
            </Typography>
            <Stack direction='row' spacing={3} sx={{ mt: 1 }}>
              {stack}
            </Stack>
          </>
        ) : null}
      </CardContent>
    </Card>
  )
}
