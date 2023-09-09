import { createGlobalTheme } from '@vanilla-extract/css';

// export const desktopBreakpoint = createVar();

const BASE_SPACE = 4;

export const vars = createGlobalTheme(':root', {
	spacing: {
		spacingbase: `${BASE_SPACE}px`,
		spacing2: `${BASE_SPACE * 2}px`,
		spacing3: `${BASE_SPACE * 3}px`,
		spacing4: `${BASE_SPACE * 4}px`,
		spacing5: `${BASE_SPACE * 5}px`,
		spacing6: `${BASE_SPACE * 6}px`,
		spacing7: `${BASE_SPACE * 7}px`,
		spacing8: `${BASE_SPACE * 8}px`
	},
	font: {
		size: {
			small: `${BASE_SPACE * 3}px`,
			medium: `${BASE_SPACE * 4}px`,
			large: `${BASE_SPACE * 5}px`
		},
		weight: {
			light: '400',
			medium: '700',
			bold: '900'
		}
	},
	color: {
		primary100: '#87CEEB',
		primary200: '#000080',
		primary300: '#00A0A0',
		default: {
			black: '#000000',
			white: '#FFFFFF',
			gray: '#c6c6c6'
		}
	}
});
