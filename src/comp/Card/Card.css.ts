import { style } from '@vanilla-extract/css';
import { themeVars } from 'src/lib/styles/theme.css';
import { vars } from 'src/lib/styles/vars.css';

const {
	spacing: { spacing3, spacing4, spacing6, spacing8 }
} = vars;

export const container = style({
	display: 'flex',
	width: '100%'
});

export const content = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '60%',
	borderRadius: spacing3,
	margin: [spacing6, 'auto'],
	padding: [spacing4, spacing8],
	'@media': {
		'(max-width: 768px )': {
			width: '100%'
		}
	},
	background: themeVars.color.secondary,
	borderStyle: 'solid',
	borderColor: themeVars.color.light
});
