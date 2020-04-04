import { createMuiTheme, fade } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a73e8',
      light: '#4fc3f7',
    },
    secondary: {
      main: '#232f3e',
      light: '#18202c',
    },
    background: {
      default: '#fafafa',
    },
    text: {
      primary: '#1b3a57',
    },
  },
});

/**
 * The theme for this app
 */
export const appTheme = createMuiTheme({
  ...theme,
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1080,
      lg: 1440,
      xl: 1920,
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
      disableFocusRipple: true,
      disableTouchRipple: true,
    },
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
    MuiButton: {
      disableRipple: true,
      disableTouchRipple: true,
      disableFocusRipple: true,
    },
    MuiIconButton: {
      disableRipple: true,
      disableTouchRipple: true,
      disableFocusRipple: true,
    },
    MuiCheckbox: {
      disableRipple: true,
      disableTouchRipple: true,
      disableFocusRipple: true,
    },
  },
  overrides: {
    MuiToolbar: {
      regular: {
        minHeight: theme.spacing(8) - 3 / 4,
        '@media (min-width: 600px)': {
          minHeight: theme.spacing(8) - 3 / 4,
        },
      },
    },
    MuiTabs: {
      root: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.primary.main,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        marginTop: 0,
        marginBottom: 0,
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('sm')]: {
          padding: 0,
          minWidth: 0,
        },
        '&$selected': {
          color: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: theme.palette.background.default,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: fade(theme.palette.common.white, 0.2),
      },
    },
    MuiListSubheader: {
      root: {
        lineHeight: '2.5rem',
      },
    },
  },
});
