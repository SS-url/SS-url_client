import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const button = style({
	padding: vars.spacing.spacing3,
	border: 'none',
	borderRadius: vars.spacing.spacingbase,
	backgroundColor: vars.color.primary.primary500,
	color: 'black',
	cursor: 'pointer',
	fontSize: vars.font.size.fontSize2,
	fontWeight: vars.font.weight.fontWeightBold
});
