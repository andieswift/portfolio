import React from 'react';
import ReactDOM from 'react-dom';


export default function NavBar() {
  return (
    <div className="h-100vh bg-white">

      <div className="d-flex align-items-center justify-content-end h-75 p-5">
          <img src="./images/profile-border.png" className="rounded float-left w-30 mr-5 "></img>
        <div>
          <h1> ABOUT ME</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Tempor id eu nisl nunc mi. Volutpat ac tincidunt vitae semper quis
          lectus nulla at. Eget nunc scelerisque viverra mauris in. Purus semper
          eget duis at tellus. Etiam tempor orci eu lobortis. Bibendum ut tristique
          et egestas quis ipsum. Nisl condimentum id venenatis a. Eget magna fermentum
          iaculis eu non diam phasellus vestibulum lorem. Augue ut lectus arcu bibendum at.
          Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Dui vivamus
          arcu felis bibendum ut tristique et egestas. Sed sed risus pretium quam vulputate
          dignissim suspendisse. Sapien pellentesque habitant morbi tristique. Pretium aenean
          pharetra magna ac placerat vestibulum. Blandit cursus risus at ultrices mi tempus
          imperdiet nulla malesuada. Sagittis id consectetur purus ut faucibus. Elementum
          integer enim neque volutpat ac. Mi ipsum faucibus vitae aliquet nec. Posuere
          sollicitudin aliquam ultrices sagittis. Tristique et egestas quis ipsum suspendisse
          ultrices gravida.</p>
        </div>
      </div>
      <div className="d-flex">
        {/* git hub linked in phone email resume */}
        <div className="icon-circle">
          <a href="https://github.com/andieswift"><i class="fab fa-github"></i></a>
        </div>
        <div className="icon-circle">
          <a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin"></i></a>
        </div>
        <div className="icon-circle">
          <i class="fas fa-phone"></i>
        </div>
        <div className="icon-circle">
          <i class="fas fa-envelope"></i>
        </div>
        <div className="icon-circle">
          <i class="fas fa-file"></i>
        </div>
      </div>
    </div>
  )
}
