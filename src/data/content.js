// Replace null values with your real links. Unconfigured links never point to invented accounts.
export const profile = {
  name: 'Mheil Andrei Cenita', email: null, linkedin: null, instagram: null,
  portfolio: null, resume: null,
};
export const filters = ['All Work', 'Video Editing', 'AI Content', 'UGC & Ads', 'Graphic Design', 'Web Design'];
// Sample concepts, not completed client work. Add media to enable playback.
// media: { type: 'mp4', src: '/media/project.mp4' }
// media: { type: 'youtube', id: 'VIDEO_ID' } or { type: 'vimeo', id: '123456789' }
// gallery: [{ src: '/img/detail.jpg', alt: 'Descriptive alternative text' }]
export const projects = [
 {id:'tumbler',title:'Premium Tumbler Commercial',category:'AI Content',label:'AI Product Advertisement',description:'A study in light, texture, and everyday ritual. A premium product concept with a cinematic point of view.',thumbnail:'/img/tumbler.jpg',alt:'Metal tumbler in warm dramatic studio lighting',aspect:'16 / 9',type:'Independent concept',role:'Creative direction & editing',tools:[],process:'Explore a warm visual direction, develop product-focused scenes, then refine pacing, sound, and color.',media:null,gallery:[]},
 {id:'mouse',title:'Gaming Mouse Commercial',category:'UGC & Ads',label:'Product Advertising',description:'Precision in motion. A performance-led product advertisement concept built around detail and impact.',thumbnail:'/img/mouse.jpg',alt:'Minimal black gaming mouse on a dark desk',aspect:'16 / 9',type:'Independent concept',role:'Concept & visual storytelling',tools:[],process:'Define a product hook, storyboard feature moments, and build a concise performance-focused edit.',media:null,gallery:[]},
 {id:'product',title:'Cinematic Product Advertisement',category:'AI Content',label:'AI Content',description:'An exploration of cinematic lighting and tactile product imagery through AI-assisted creative direction.',thumbnail:'/img/product.jpg',alt:'Amber fragrance bottle in soft golden light',aspect:'16 / 9',type:'Independent concept',role:'Art direction & AI content',tools:[],process:'Set a visual mood, explore lighting and composition, then bring the strongest frames into a cohesive narrative.',media:null,gallery:[]},
 {id:'ugc',title:'AI UGC Product Video',category:'UGC & Ads',label:'UGC & Performance Ads',description:'A vertical, social-first concept connecting a product story with an engaging opening hook.',thumbnail:'/img/ugc.jpg',alt:'Skincare product and natural textures',aspect:'9 / 16',type:'Independent concept',role:'Concept & social editing',tools:[],process:'Identify an audience need, develop an authentic hook, and shape a platform-native vertical story.',media:null,gallery:[]},
 {id:'shortform',title:'Short-Form Editing Showcase',category:'Video Editing',label:'Video Editing',description:'A sample direction for rhythm-driven short-form storytelling, pacing, captions, and sound.',thumbnail:'/img/film.jpg',alt:'Cinematic landscape with mountains in sunset light',aspect:'16 / 9',type:'Editing study',role:'Video editor',tools:[],process:'Select the narrative moments, establish rhythm, and refine sound and visual continuity.',media:null,gallery:[]},
 {id:'design',title:'Graphic Design Collection',category:'Graphic Design',label:'Visual Design',description:'An editable collection space for brand identities, social graphics, and considered visual compositions.',thumbnail:'/img/design.svg',alt:'Editorial typography concept with warm ivory and gold',aspect:'16 / 9',type:'Visual exploration',role:'Graphic designer',tools:[],process:'Explore hierarchy, typography, and composition across a consistent visual language.',media:null,gallery:[]},
 {id:'web',title:'Website Design Collection',category:'Web Design',label:'Web Design & UI/UX',description:'An editable collection space for responsive websites, landing pages, and thoughtful digital experiences.',thumbnail:'/img/web.svg',alt:'Minimal website layout concept on a charcoal background',aspect:'16 / 9',type:'Interface exploration',role:'Web & UI designer',tools:[],process:'Map the user journey, define a clear content hierarchy, and refine responsive interfaces.',media:null,gallery:[]},
];
// These are editable toolkit categories, not claims of proficiency.
export const toolkit = ['Video Editing Software', 'AI Content Generation', 'Graphic Design Software', 'Figma', 'WordPress', 'React', 'Other Creative Tools'];
export const services = [
 ['Film','Video Editing','Cinematic storytelling, short-form content, thoughtful pacing, captions, sound design, and color grading.'],
 ['Sparkles','AI Content Creation','AI-generated visuals, cinematic product scenes, creative concepts, and AI-assisted digital storytelling.'],
 ['Clapperboard','UGC & Performance Ads','Engaging hooks, product demonstrations, UGC-style storytelling, and direct-response social creatives.'],
 ['Focus','Product Commercials','Premium product presentations, lifestyle visuals, and feature-focused creative campaigns.'],
 ['PenTool','Graphic Design','Social graphics, branding, promotional materials, and considered digital compositions.'],
 ['PanelsTopLeft','Web Design & UI/UX','Responsive websites, landing pages, interface design, WordPress, and Figma prototypes.'],
];
