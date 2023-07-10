import { createGlobalTheme, createVar } from '@vanilla-extract/css';

export const desktopBreakpoint = createVar();
export const lineHeightRelaxed = createVar();

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
		family: {
			fontFamilyBody: 'Source Sans Pro',
			fontFamilyHeading: 'Source Serif Pro'
		},
		size: {
			fontSizeRoot: '16px',
			fontSize0: '0.8rem',
			fontSize1: '1rem',
			fontSize2: '1.25rem',
			fontSize3: '1.563rem',
			fontSize4: '1.953rem',
			fontSize5: '2.441rem',
			fontSize6: '3.052rem',
			fontSize7: '3.815rem'
		},
		weight: {
			fontWeightBold: '700',
			fontWeightBlack: '900'
		}
	}
});
