import React from 'react'

const Personalprofile = () => {
  return (
    <div className='personalprofile'>
      <h3>Personal Profile</h3>
      <div style={{display:'flex',alignItems:'start' ,paddingLeft:'20px',flexDirection:'column',gap:'2px'}}>
        <span> Father's Name : S.Pundarikam</span>
        <span>Date of birth  : 22nd November,1998</span>
        <span>Gender : Female</span>
        <span>Marital Status : Married</span>
      </div>
    </div>
  )
}

export default Personalprofile