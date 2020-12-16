import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      minWidth: theme.spacing(54),
    },
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      minWidth: theme.spacing(50),
    },
  },
  content: {
    width: '100%',
  },
}))

export default useStyles
