import React from 'react'


export default function WorkshopCard(){
return (
<div className="card hover-scale">
<div className="row g-0">
<div className="col-md-4">
<img src="/workshop-poster.jpg" className="img-fluid rounded-start" alt="Factory I/O poster"/>
</div>
<div className="col-md-8">
<div className="card-body">
<h5 className="card-title">Workshop: Factory I/O</h5>
<p className="card-text text-muted">Simulation software for industrial automation — PLC programming, process control, factory simulation.</p>
<p className="mb-1"><strong>Note:</strong> Workshop participants cannot join other events.</p>
<div className="mt-3">
<button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#workshopModal">Register / Info</button>
<a className="btn btn-outline-secondary" href="/payment">Payment Info</a>
</div>
</div>
</div>
</div>


{/* Modal (Bootstrap) */}
<div className="modal fade" id="workshopModal" tabIndex="-1" aria-labelledby="workshopModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="workshopModalLabel">Factory I/O — Workshop Details</h5>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div className="modal-body">
<p>Factory I/O is a simulation environment for creating and testing industrial automation systems. Learn PLC programming, sensors, actuation and process control.</p>
<p><strong>Fee:</strong> ₹300 (Workshop-only)</p>
<p>This modal contains a non-functional registration skeleton for demo purposes.</p>


<form>
<div className="mb-3">
<label className="form-label">Team / Participant name</label>
<input className="form-control" placeholder="Enter name" />
</div>
<div className="mb-3">
<label className="form-label">Contact email</label>
<input className="form-control" placeholder="email@example.com" />
</div>
</form>


</div>
<div className="modal-footer">
<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button type="button" className="btn btn-primary">Proceed to Payment (demo)</button>
</div>
</div>
</div>
</div>


</div>
)
}