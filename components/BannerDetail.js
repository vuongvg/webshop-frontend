import React from 'react'

function BannerDetail() {
   
  return (
    <div className="banner-deatils">
    <div className="banner-image">
       <img src="/images/fashion/banner.jpg" className="img-fluid bg-img  lazyload" alt="" />
       <div className="banner-content">
          <div>
             <h3>Shop The Latest Trends</h3>
             <p>Shop the latest clothing trends with our weekly edit of what &apos;s new in online at Voxo. From out latest woman collection.</p>
          </div>
       </div>
    </div>
    <div className="banner-contain mt-3 mb-5">
       <p className="font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
       </p>
    </div>
 </div>
  )
}

export default BannerDetail