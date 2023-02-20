import { styled } from "@/styles";

export const SidebarContainer = styled('aside', {
  width: '400px',
  height: '100%',
  backgroundColor: '$gray800',
  padding: '20px',
  position: 'fixed',
  top: '0',
  right: '0',
  zIndex: '100',
  display: 'flex',
  flexDirection: 'column',

  '> button': {
    display: 'flex',
    justifyContent: 'end',
    marginLeft: 'auto',
    padding: 0,
    marginRight: 0,
    border: 'none',
    borderRadius: 6,
    backgroundColor: 'transparent',
    color: '$gray100',
    cursor: 'pointer'
  },

  h3: {
    fontSize: '$lg',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  }
})

export const SidebarItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: '1.5rem'
})

export const SidebarItemDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
  marginLeft: '1.25rem', 
  span: {
    fontSize: '$md'
  },

  strong: {
    fontSize: '$md'
  },

  button: {
    backgroundColor: 'transparent',
    color: '$green500',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: 'bold'
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 101,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const SidebarFooter = styled('div', {
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 'auto',
  marginRight: 'auto',

  div: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  button: {
    marginTop: '2.5rem',
    padding: '20px 7rem',
    border: 'none',
    backgroundColor: '$green500',
    cursor: 'pointer',
    
    borderRadius: 8,
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '$green300',
    }
  }
})

export const FooterTop = styled('div', {
  strong: {
    fontSize: '$md',
    fontWeight: 'normal'
  }
})

export const FooterBottom = styled('div', {
  span: {
    fontSize: '$md',
  },

  strong: {
    fontSize: '$lg',
  }
})