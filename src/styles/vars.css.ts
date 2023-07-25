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
	},
	color: {
		primary: {
			primary100: '#F0F4F8',
			primary200: '#D9E2EC',
			primary300: '#BCCCDC',
			primary400: '#9FB3C8',
			primary500: '#829AB1',
			primary600: '#627D98',
			primary700: '#486581',
			primary800: '#334E68',
			primary900: '#243B53'
		},
		neutral: {
			neutral100: '#F5F7FA',
			neutral200: '#E4E7EB',
			neutral300: '#CBD2D9',
			neutral400: '#9AA5B1',
			neutral500: '#7B8794',
			neutral600: '#616E7C',
			neutral700: '#52606D',
			neutral800: '#3E4C59',
			neutral900: '#323F4B'
		}
	}
});
