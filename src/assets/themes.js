import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff',
      light: '#cd7fcd',
    },
    secondary: {
      main: '#232323',
    },
    success: {
      main: '#4A670D',
      light: '#d1e4a8',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    button: {
      fontWeight: 600,
    },
  },

  components: {},
})
