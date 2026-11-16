import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
export default function ContactForm() {
 const [status,setStatus]=useState('idle');
 async function submit(event) {
  event.preventDefault();
  const form=event.currentTarget;
  if(!form.reportValidity()) return;
  setStatus('sending');
  try {
   const response=await fetch('/__forms.html',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString()});
   if(!response.ok) throw new Error('Submission failed');
   setStatus('success'); form.reset();
  } catch {setStatus('error');}
 }
 return <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
  <input type="hidden" name="form-name" value="contact"/><div hidden><label>Leave this empty<input name="bot-field" tabIndex="-1" autoComplete="off"/></label></div>
  <div className="form-row"><label>Your name<input name="name" placeholder="How should I call you?" autoComplete="name" required maxLength={120}/></label><label>Email address<input name="email" type="email" placeholder="Where can I reach you?" autoComplete="email" required maxLength={254}/></label></div>
  <label>What are we creating?<select name="project-type" required defaultValue=""><option value="" disabled>Select a project type</option>{['Video Editing','AI Content','UGC & Ads','Product Commercial','Graphic Design','Web Design','Employment / Collaboration','Something else'].map(t=><option key={t}>{t}</option>)}</select></label>
  <label>A little about your idea<textarea name="message" required minLength={10} maxLength={6000} rows={3} placeholder="Tell me about your project, goals, and timeline…"/></label>
  <div className="form-bottom"><span>Good stories start with a conversation.</span><button className="button primary" disabled={status==='sending' || status==='success'} type="submit">{status==='sending'?'Sending…':status==='success'?'Message sent':'Send Message'}{status==='success'?<CheckCircle2 size={17}/>:<ArrowUpRight size={17}/>}</button></div>
  <div aria-live="polite" role="status">{status==='success'&&<p className="form-success">Thank you. Your message has been received — let's bring your idea to life.</p>}{status==='error'&&<p className="form-error">Your message could not be sent. Please check your connection and try again. Your text is still here.</p>}</div>
 </form>;
}
