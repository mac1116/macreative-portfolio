import { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { imageUrl } from '../utils';
export default function ProjectDialog({ project, onClose }) {
 const dialog = useRef(null);
 const [failed, setFailed] = useState(false);
 useEffect(() => {
  const element = dialog.current;
  element.showModal();
  const overflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  return () => { element.close(); document.body.style.overflow = overflow; };
 }, []);
 const media = project.media;
 const embed = media?.type === 'youtube' && /^[\w-]+$/.test(media.id) ? `https://www.youtube-nocookie.com/embed/${media.id}` : media?.type === 'vimeo' && /^\d+$/.test(media.id) ? `https://player.vimeo.com/video/${media.id}` : null;
 return <dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" onCancel={onClose} onClick={e => {if(e.target === e.currentTarget) onClose();}}>
  <button className="dialog-close icon-button" onClick={onClose} aria-label="Close project"><X size={22}/></button>
  <div className={`dialog-media ${project.aspect === '9 / 16' ? 'portrait-media' : ''}`}>
   {media?.type === 'mp4' && !failed ? <video controls playsInline preload="metadata" poster={imageUrl(project.thumbnail,1000)} onError={()=>setFailed(true)} style={{aspectRatio:project.aspect}}><source src={media.src} type="video/mp4" onError={()=>setFailed(true)}/></video> : embed ? <iframe src={embed} title={project.title} allow="fullscreen; picture-in-picture; encrypted-media" allowFullScreen style={{aspectRatio:project.aspect}}/> : <img src={imageUrl(project.thumbnail,1200)} alt={project.alt} style={{aspectRatio:project.aspect}}/>}
  </div>
  <div className="dialog-content"><p className="eyebrow">{project.label} {!media && !project.gallery?.length && <span> / Sample concept</span>}</p><h2 id="project-title">{project.title}</h2><p>{project.description}</p>{!media && !project.gallery?.length && <p className="sample-note">Editable sample project. The image is a visual reference; a finished project video has not been added.</p>}{failed && <p role="alert">This video could not load. Please try again later.</p>}
  <div className="project-facts"><div><span>PROJECT TYPE</span><p>{project.type}</p></div><div><span>MY ROLE</span><p>{project.role}</p></div><div><span>TOOLS</span><p>{project.tools.length ? project.tools.join(', ') : 'To be confirmed'}</p></div></div><h3>Creative process</h3><p>{project.process}</p>
  {project.gallery?.map((img,i)=><img className="gallery-image" key={i} src={imageUrl(img.src,1200)} alt={img.alt} loading="lazy"/>)}
  <a className="text-link" href="#contact" onClick={onClose}>Have something in mind? Let's talk <ArrowUpRight size={17}/></a></div>
 </dialog>;
}
