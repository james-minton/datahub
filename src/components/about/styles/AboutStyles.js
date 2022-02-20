import { makeStyles } from "@material-ui/core"

export const AboutUsPage = makeStyles(theme => ({
  aboutUs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    }
  },
  itemStyles: {
    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(90),
    padding: theme.spacing(3),
    margin: '20px 0 40px 0'
  },
  copyStyles: {
    display: 'flex',
    flexDirection: 'column',

    padding: theme.spacing(3),

    '& > :first-child': {
      textAlign: 'center'
    },
    '& > *': {
      paddingBottom: theme.spacing(2)
    },
  },
  hlText: {
    maxWidth: theme.spacing(70),
    marginTop: theme.spacing(3)
  },
  hlBox: {
    width: '587px',
    paddingBottom: theme.spacing(3),
    borderBottom: '.3em solid'
  },
  logo: {
    width: '587px',
    margin: '50px 0 0 0',

    '& > *': {
      paddingBottom: '15px'
    },
  }
}))