import React from 'react'


export default function RegistrationNotice({ closed = true }){
if(!closed) return null
return (
<div className="reg-banner mb-3" role="status" aria-live="polite">
<strong>Registration Closed!</strong> No On-spot Registration.
</div>
)
}