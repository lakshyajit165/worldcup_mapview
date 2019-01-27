import React from 'react';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark unique-color-dark">
            <a className="navbar-brand" href="/"><b>Map View</b></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/"><b><i className="fas fa-home mr-2"></i>Home </b><span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="modal" data-target="#basicExampleModal"><b><i className="fas fa-list mr-2"></i>Facts</b></a>
                </li>
                
              </ul>
            </div>


         {/* Modal */}
          <div className="modal fade" id="basicExampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
              <div className="modal-dialog" role="document" style={{overflowY: 'initial !important'}}>
              <div className="modal-content">
                  <div className="modal-header">
                  <h4 className="modal-title text-center" id="exampleModalLabel"><b>Interesting Facts about Cricket World Cup!</b></h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div className="modal-body" style={{overflowY: 'auto'}}>
                    <p><i className="fas fa-angle-right mr-2"></i>England is the only nation which has hosted most number of World Cups (4) the next is India and Pakistan (2-both jointly)</p>
                    <p><i className="fas fa-angle-right mr-2"></i>The 1987 World Cup was the first ever world cup which was held outside England.</p>
                    <p><i className="fas fa-angle-right mr-2"></i>The 1992 World Cup was the first ever world cup which was hosted by the Southern Hemisphere countries.</p>
                      <p><i className="fas fa-angle-right mr-2"></i>The 1992 World Cup was the first ever world cup, where white balls were used and Day and Night games were played with colour clothings.</p>
                      <p><i className="fas fa-angle-right mr-2"></i>Chetan Sharma of India is the first bowler to claim a hat trick in a world cup (1987).</p>
                      <p><i className="fas fa-angle-right mr-2"></i>Australia is the only team which has won 4 world cups in which three world cup wins came in a row (1997, 2003 & 2007).</p>
                      <p><i className="fas fa-angle-right mr-2"></i>Sachin Tendulkar of India is the highest run getter in the World Cup history; he has scored 2, 278 runs in 6 world cups.</p>
                      <p><i className="fas fa-angle-right mr-2"></i>Glenn McGrath of Australia has claimed the highest number of wickets in the history of world cups which is standing at 72.</p>
                      
                  </div>
                  <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                  
                  </div>
              </div>
              </div>
          </div>   
          
    </nav>
  )
}
