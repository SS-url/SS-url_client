import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const inputContainer = style({
	display: 'inline-block',
	padding: vars.spacing.spacing3,
	border: '1px solid black',
	borderRadius: vars.spacing.spacingbase
});

export const input = style({
	border: 'none',
	width: '100%',
	fontSize: vars.font.size.fontSize2,
	':focus': {
		outline: 'none'
	}
});
