import React from 'react'


export default function EventCard({title, desc, type='Technical'}){
return (
<article className="card h-100 hover-scale" tabIndex="0" aria-label={`${title} - ${type}`}>
<div className="card-body d-flex flex-column">
<h5 className="card-title">{title}</h5>
<p className="card-text text-muted flex-grow-1">{desc}</p>
<div className="mt-3 d-flex justify-content-between align-items-center">
<span className={`badge ${type==='Technical' ? 'bg-info text-dark' : 'bg-secondary'}`}>{type}</span>
<button className="btn btn-link btn-sm" aria-label={`Details for ${title}`}>Details</button>
</div>
</div>
</article>
)
}