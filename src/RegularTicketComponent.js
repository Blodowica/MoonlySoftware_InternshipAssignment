//import React, { Component } from 'react';
import orders from './data/orders.json';
// import tickets from './data/tickets.json';

function RegularTicketComponent() {

    var ticketID = "mjpk1EgrNmM6APR4";
    var startDateTime = new Date("2022-05-30T12:00:00.000000Z"); //  Date: 2022-05-30 Time : 14:00:00 in Europe/Amsterdam timezone
    var endDateTime = new Date("2022-05-30T12:05:00.00000Z");    //  Date: 2022-05-30 Time : 14:05:00 in Europe/Amsterdam timezone
    var d;
    var convertedDateTime;
    var regularTicketBarcodes = [];

    function getRegularTickets() {
        orders.forEach(order => {
            order.purchases.forEach(purchase => {
                if (purchase.ticket.id === ticketID) {
                    order.payments.forEach(payment => {

                        d = payment.created_at;
                        convertedDateTime = new Date(d);


                        if (convertedDateTime > startDateTime && convertedDateTime < endDateTime) {
                            regularTicketBarcodes.push(purchase.barcode);
                        }
                    })

                }
            })

        })
        return "Ticket barcodes: " + regularTicketBarcodes.join(', \n \r');
    }

    return (
        getRegularTickets()

    )
}

export default RegularTicketComponent;