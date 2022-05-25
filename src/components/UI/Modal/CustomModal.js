import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '65vw',
  maxHeight: '100%',
  position: 'fixed',
  bgcolor: 'background.paper',
  boxShadow: 24,
  outline: 'none',
  borderRadius: '10px',
}

export default function CustomModal({ children, open = false, close = () => {} }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}>
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </div>
  )
}
