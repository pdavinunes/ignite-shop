import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    color: '$green500',
    fontSize: '$lg',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
})

export const ImageContainer = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '100%',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginLeft: '-12%',

  img: {
    objectFit: 'cover'
  }
})

export const ImagesList = styled('div', {
  marginTop: '4rem',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingLeft: '6%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
})