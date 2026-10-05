import type { Config } from 'tailwindcss'
const config: Config = { content:['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme:{extend:{fontFamily:{sans:['Inter','Arial','sans-serif'],display:['Arial','Helvetica','sans-serif'],mono:['ui-monospace','SFMono-Regular','Menlo','monospace']},colors:{ink:'#09090b',violet:'#a855f7'}}}, plugins:[] }
export default config
