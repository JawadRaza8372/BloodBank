import React from 'react'

function MiniCard() {
    return (
        <>
           <div class="card" style={{width:"500px"}}>
  <img class="card-img-top" src="img_avatar1.png" alt="kuch bhi"/>
  <div class="card-img-overlay">
    <h4 class="card-title">John Doe</h4>
    <p class="card-text">Some example text.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div> 
        </>
    )
}

export default MiniCard
