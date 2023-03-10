import { styled } from "..";

export const HomeContainer = styled('main', {
  display: "flex",
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,

  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  minWidth: 540,

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    button: {
      padding: '0.75rem',
      backgroundColor: '$green500',
      color: '$white',
      border: 'none',
      borderRadius: 6,
      marginLeft: '0.2rem',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '$green300',
      }
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1, 
    }
  }
})

export const FooterDetails = styled('div', {
  display: "flex",
  flexDirection: "column",

  strong: {
    fontSize: '$lg',
    color: '$gray100',
    fontWeight: 'bold'
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300'
  }
})

export const ArrowButton = styled("button", {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "5rem",
  height: "100%",
  cursor: "pointer",
  border: "none",
  color: "$white",
  padding: "0 1rem",
  zIndex: 100,

  variants: {
      direction: {
          left: {
              left: 0,
              textAlign: "left",
              background: "linear-gradient(90deg, rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0) 100%)",
          },
          right: {
              right: 0,
              textAlign: "right",
              background: "linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)",
          },
      },
  },
});