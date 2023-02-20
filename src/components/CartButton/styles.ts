import { styled } from "@/styles"

export const CartButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start'
})

export const ButtonCart = styled('button', {
  color: '$gray300',
  backgroundColor: '$gray800',
  cursor: 'pointer',
  border: 'none',
  borderRadius: 6,
  width: 48,
  height: 48,
  position: 'relative'
})

export const CounterItensCart = styled('span', {
  position: 'absolute',
  top: '-0.5rem',
  right: '-0.5rem',
  backgroundColor: '$green300',
  color: '$white',
  width: 24,
  height: 24,
  borderRadius: '50%',
  border: '3px solid #121214',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  lineHeight: '1.3',
})