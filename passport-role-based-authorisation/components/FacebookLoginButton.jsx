import React, { FunctionComponent } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      display: 'flex',
      backgroundColor: '#4C69BA',
      backgroundImage: 'linear-gradient(#4C69BA, #3B55A0)',
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1],
      height: '36px',
      cursor: 'pointer',
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: '#5B7BD5',
        backgroundImage: 'linear-gradient(#5b7bd50a, #4864B1)'
      },
      '&:active': {
        boxShadow: 'inset 0 0 0 32px rgba(0,0,0,0.1)'
      }
    },
    wrapper: {
      marginTop: '1px',
      marginLeft: '1px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '34px',
      height: '34px',
      borderRadius: '2px',
      backgroundColor: '#fff'
    },
    icon: {
      width: '18px',
      height: '18px'
    },
    text: {
      margin: '0 34px 0 0',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      flexGrow: 1,
      textAlign: 'center',
      alignSelf: 'center'
    }
  })
)

const FacebookLoginButton = () => {
  const classes = useStyles({})

  return (
    <a href={`${process.env.BASE_API_URL}/auth/facebook`} className={classes.button}>
      <div className={classes.wrapper}>
        <svg
          fill="#3b5998"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
        </svg>
      </div>
      <p className={classes.text}>Login with Facebook</p>
    </a>
  )
}

export { FacebookLoginButton }
