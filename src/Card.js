import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (   
      <div className="main">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css?family=Anton|Fira+Sans|Gugi" rel="stylesheet"/>

      <div className ="creditCardBody">
          <div className ="primarySection">
                  <div className ="item creditCardName">CREDIT CARD
                      </div>            
                      <div className ="item creditCardSmart">
                      <img src="https://img.icons8.com/color/80/000000/sim-card-chip.png" className="chip"/>
                      </div>
      </div>
          <div className ="secondarySection">
              <div className ="informationSection">
                      <div className ="item creditCardNumber">0123 4567 8901 2345            
                          </div>
                         <div className ="xInfo">
                              <div className ="item creditCardCode">9999
                                  </div>
                                  <div className ="item creditCardExpiration">
                                      <div className ="thruExpiration">VALID<br/>>THRU</div>
                                      <div className ="layoutExpiration">
                                          <div className ="dateExpirationForm">MONTH/YEAR</div>
                                          <div className ="dateExpirationValue">10/25</div>
                                      </div>
                                  </div>
                         </div>
                          <div className ="item cardHolderName">CARDHOLDER
                          </div>
              </div>
              <div className ="item creditCardNetwork visa">
              AAAa<br/>AAAa<br/>aaa
              </div>
          </div>
      </div> 
</div>    
    )
  }
}
