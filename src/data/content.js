// Replace null values with your real links. Unconfigured links never point to invented accounts.
export const profile = {
  name: 'Mheil Andrei Cenita', email: "cenitamheil@gmail.com", linkedin: null, instagram: "@mheilcenitaa",
  portfolio: 'https://macreative-portfolio.netlify.app/', resume: '/media/resume.pdf',
};
export const filters = ['All Work', 'Video Editing', 'AI Content', 'UGC & Ads', 'Graphic Design', 'Web Design'];
// Sample concepts, not completed client work. Add media to enable playback.
// media: { type: 'mp4', src: '/media/project.mp4' }
// media: { type: 'youtube', id: 'VIDEO_ID' } or { type: 'vimeo', id: '123456789' }
// gallery: [{ src: '/img/detail.jpg', alt: 'Descriptive alternative text' }]
export const projects = [
 {id:'tumbler',title:'Premium Tumbler Commercial',category:'AI Content',label:'AI Product Advertisement',description:'A study in light, texture, and everyday ritual. A premium product concept with a cinematic point of view.',thumbnail:'/img/tumblerads.jpg',alt:'Blue and black Contigo travel tumblers in warm studio lighting',aspect:'16 / 9',type:'Independent concept',role:'Creative direction & editing',tools:[],process:'Explore a warm visual direction, develop product-focused scenes, then refine pacing, sound, and color.',media:{type:'mp4',src:'/media/tumblerads.mp4'},gallery:[]},
 {id:'mouse',title:'Gaming Mouse Commercial',category:'UGC & Ads',label:'Product Advertising',description:'Precision in motion. A performance-led product advertisement concept built around detail and impact.',thumbnail:'/img/mouseads.jpg',alt:'Logitech gaming mouse lit by blue light on a dark desk',aspect:'16 / 9',type:'Independent concept',role:'Concept & visual storytelling',tools:[],process:'Define a product hook, storyboard feature moments, and build a concise performance-focused edit.',media:{type:'mp4',src:'/media/mouseads.mp4'},gallery:[]},
 {id:'pixar',title:'Pixar-Style Animated Ad',category:'AI Content',label:'AI Animation',description:'A vertical, character-led concept using a warm 3D animated style to turn a raw-footage editing service into a friendly, memorable hook.',thumbnail:'/img/pixarstyleads.jpg',alt:'Animated 3D character sitting at a video editing desk',aspect:'9 / 16',type:'Independent concept',role:'Concept & AI animation',tools:[],process:'Define a likeable character and simple story beat, explore a warm stylized look, then shape pacing, expression, and captions.',media:{type:'mp4',src:'/media/pixarstyleads.mp4'},gallery:[]},
 {id:'ugc',title:'AI UGC Product Video',category:'UGC & Ads',label:'UGC & Performance Ads',description:'A refined product concept pairing warm natural light and simple compositions with an elegant, understated hook.',thumbnail:'/img/wineads.jpg',alt:'Wine glass in warm sunlight on a wooden table',aspect:'16 / 9',type:'Independent concept',role:'Concept & editing',tools:[],process:'Find a strong visual idea, explore light and composition, then refine pacing and typography for a polished product story.',media:{type:'mp4',src:'/media/wineads.mp4'},gallery:[]},
 {id:'design',title:'Graphic Design Collection',category:'Graphic Design',label:'Visual Design',description:'An editable collection space for brand identities, social graphics, and considered visual compositions.',thumbnail:'/img/design.svg',alt:'Editorial typography concept with warm ivory and gold',aspect:'16 / 9',type:'Visual exploration',role:'Graphic designer',tools:[],process:'Explore hierarchy, typography, and composition across a consistent visual language.',media:null,gallery:[]},
 {id:'web',title:'Website Design Collection',category:'Web Design',label:'Web Design & UI/UX',description:'An editable collection space for responsive websites, landing pages, and thoughtful digital experiences.',thumbnail:'/img/web.svg',alt:'Minimal website layout concept on a charcoal background',aspect:'16 / 9',type:'Interface exploration',role:'Web & UI designer',tools:[],process:'Map the user journey, define a clear content hierarchy, and refine responsive interfaces.',media:null,gallery:[]},
];
export const toolkit = [
 ['Video Editing', [
  ['Adobe Premiere Pro', '/img/toolkit/premiere.png'],
  ['After Effects', '/img/toolkit/ae.png'],
  ['CapCut Pro', '/img/toolkit/capcut.png'],
 ]],
 ['AI Content Generation', [
  ['Higgsfield', '/img/toolkit/higgs.png'],
  ['Suno AI', '/img/toolkit/suno.png'],
  ['Google Flow', '/img/toolkit/googleflow.png'],
 ]],
 ['Graphic Design', [
  ['Adobe Photoshop', '/img/toolkit/ps.png'],
  ['Illustrator', '/img/toolkit/illustrator.png'],
  ['Canva Pro', '/img/toolkit/canva.png'],
 ]],
 ['UI/UX & Web', [
  ['Figma', '/img/toolkit/figma.png'],
  ['WordPress', '/img/toolkit/wordpress.png'],
  ['Elementor', '/img/toolkit/elementor.png'],
  ['HTML', '/img/toolkit/html.png'],
  ['CSS', '/img/toolkit/css.png'],
  ['JavaScript', '/img/toolkit/js.png'],
  ['React', '/img/toolkit/react.png'],
  ['PHP', '/img/toolkit/php.png'],
  ['Laravel', '/img/toolkit/laravel.png'],
 ]],
];
export const services = [
 ['Film','Video Editing','Cinematic storytelling, short-form content, thoughtful pacing, captions, sound design, and color grading.'],
 ['Sparkles','AI Content Creation','AI-generated visuals, cinematic product scenes, creative concepts, and AI-assisted digital storytelling.'],
 ['Clapperboard','UGC & Performance Ads','Engaging hooks, product demonstrations, UGC-style storytelling, and direct-response social creatives.'],
 ['Focus','Product Commercials','Premium product presentations, lifestyle visuals, and feature-focused creative campaigns.'],
 ['PenTool','Graphic Design','Social graphics, branding, promotional materials, and considered digital compositions.'],
 ['PanelsTopLeft','Web Design & UI/UX','Responsive websites, landing pages, interface design, WordPress, Elementor, HTML, CSS, JavaScript, React, PHP, and Laravel.'],
];
