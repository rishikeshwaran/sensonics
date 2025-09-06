import React from 'react'


export default function Payment(){
return (
<div>
<h2>Payment Info & Rules</h2>
<div className="mt-3">
<ul>
<li><strong>₹250</strong> — Access to any <em>3 events</em> (team pricing example given below)</li>
<li><strong>₹300</strong> — Workshop only (Factory I/O)</li>
<li>Included: refreshments & lunch</li>
</ul>


<h5 className="mt-3">Team pricing example</h5>
<p>Team of 3 for the 3-event package: the single payment of ₹250 covers the team’s entry to 3 events (not per person). Clarify team registration rules on your registration form.</p>


<p className="text-muted small">Note: This is a frontend demo — payment buttons are non-functional.</p>
</div>
</div>
)
}