import { style } from '@vanilla-extract/css';

export const button = style({
	backgroundColor: 'red',
	color: 'white',
	padding: '10px',
	borderRadius: '5px',
	border: 'none',
	cursor: 'pointer',
	fontSize: '1rem',
	fontWeight: 'bold',
	transition: 'all 0.3s ease',
	':hover': {
		backgroundColor: 'blue'
	}
});
