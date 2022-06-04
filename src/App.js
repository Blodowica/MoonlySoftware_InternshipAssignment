import './App.css';
import orders from './data/orders.json';
import RegularTicketComponent from './RegularTicketComponent';
import TicketCostComponent from './TicketCostComponent';

function App() {

  var PersonWhoPaidMost;
  var fullName;
  var HighestAmount = 0;
  var amount;


  function CalculateWhoSpentMost() {

    orders.forEach(order => {

      fullName = order.orderer.data.first_name + " " + order.orderer.data.last_name
      order.payments.forEach(payment => { amount = payment.amount })

      if (amount - HighestAmount > 0) {
        HighestAmount = amount;
        PersonWhoPaidMost = fullName
      }
    })

    return PersonWhoPaidMost + " spent the most and paid " + HighestAmount + "€"
  }



  return (
    <div className="App">
      <header className="App-header">


        <div className="whiteContainer">
          <div className="appText">
            <h4> 1. How many orders have been placed?</h4>

            {
              <p>{orders.length + " orders have been placed."}</p>
            }
            <h4>2. Who spent the most money?</h4>

            {

              <p>{CalculateWhoSpentMost()}</p>
            }


            <h4>3. How much did Mynouk van de Ven spent on 'VIP' tickets?</h4>
            <TicketCostComponent />


            <h4> 4. Collect all the 'Regular' ticket barcodes from orders that have been paid for between 14:00:00 2022-05-30 and 14:05:00 2022-05-30
              in Europe/Amsterdam timezone</h4>

            <RegularTicketComponent />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
