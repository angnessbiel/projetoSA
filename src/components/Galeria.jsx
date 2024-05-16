import React from 'react';

function Galeria(){
    return(
        <>  <div className="galeria">
            <h1>Protótipo</h1>
            </div>
      <div className="fundo">
        <div className="linha1"> 
        <li><div className="galeria">
          <img src="prototipo1.PNG" alt="" />
        </div></li>

        <li><div className="galeria">
          <img src="prototipo2.PNG" alt="" />
        </div></li>

        <li><div className="galeria">
          <img src="prototipo3.PNG" alt="" />
        </div></li>
      </div><div className="linha2">
          <li>
            <div className="galeria">
              <img src="prototipo4.PNG" alt="" />
            </div></li>

          <li><div className="galeria">
            <img src="prototipo5.PNG" alt="" />
          </div></li>

          <li><div className="galeria">
            <img src="prototipo6.PNG"alt="" />
          </div></li>
        </div>  
      </div>
      </>      
    )
}
export default Galeria