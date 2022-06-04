//import React, { Component } from 'react';
import orders from './data/orders.json';
import tickets from './data/tickets.json';

function TicketCostComponent() {

    const ticketID = "ZgvLVEzpbX2Wq9DP";
    var ticketPrice;
    var VIPTicketList = [];
    var ticketCost;
    var serviceFee;
    var ServiceFeeTotal
    var totalCost;
    var fname = "Mynouk";
    var lname = "van de Ven";


    function CalculateMoneySpent() {
        orders.forEach(order => {
            if (order.orderer.data.first_name === fname && order.orderer.data.last_name === lname) {

                order.purchases.forEach(purchase => {
                    if (purchase.ticket.id === ticketID) {
                        VIPTicketList.push(purchase.ticket);
                    }
                })
            }
        })

        tickets.forEach(ticket => {
            if (ticket.id === ticketID) {
                ticketPrice = ticket.price;
                serviceFee = ticket.service_fee;
            }
        })

        ticketCost = VIPTicketList.length * ticketPrice;
        ServiceFeeTotal = serviceFee * VIPTicketList.length;
        totalCost = ticketCost + ServiceFeeTotal;

        // console.log("Tickets " + ticketCost);
        // console.log("Service Fee " + ServiceFeeTotal);
        // console.log("Total cost " + totalCost);

        return "Mynouk paid " + totalCost + "€ in total for the 'VIP' tickets, including " + ServiceFeeTotal.toFixed(2) + "€ for service Fees ";
    }


    return (

        CalculateMoneySpent()

    );
}

export default TicketCostComponent