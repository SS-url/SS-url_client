import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const button = style({
	padding: vars.spacing.spacing3,
	border: 'none',
	borderRadius: vars.spacing.spacingbase,
	backgroundColor: vars.color.primary100,
	color: vars.color.default.black,
	cursor: 'pointer',
	fontSize: vars.font.size.medium,
	fontWeight: vars.font.weight.bold
});
