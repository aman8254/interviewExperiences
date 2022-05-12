var request = require('sync-request');

var res = request('GET', 'https://interviewexperiences.herokuapp.com/info/institutes');

let institutes = JSON.parse(res.getBody());

export default institutes;


// const institutes = [
//   {
//     id: 1,
//     label: "Indian Institute of Management Ahmedabad",
//   },
//   {
//     id: 2,
//     label: "Indian Institute of Management Bangalore",
//   },
//   {
//     id: 3,
//     label: "Indian Institute of Management Calcutta",
//   },
//   {
//     id: 4,
//     label: "Indian Institute of Management Kozhikode",
//   },
//   {
//     id: 5,
//     label: "Indian Institute of Technology Delhi",
//   },
//   {
//     id: 6,
//     label: "Indian Institute of Management Indore",
//   },
//   {
//     id: 7,
//     label: "Indian Institute of Management Lucknow",
//   },
//   {
//     id: 8,
//     label: "Xavier Labour Relations Institute (XLRI)",
//   },
//   {
//     id: 9,
//     label: "Indian Institute of Technology Kharagpur",
//   },
//   {
//     id: 10,
//     label: "Indian Institute of Technology Bombay",
//   },
//   {
//     id: 11,
//     label: "Management Development Institute",
//   },
//   {
//     id: 12,
//     label: "National Institute of Industrial Engineering, Mumbai",
//   },
//   {
//     id: 13,
//     label: "Indian Institute of Technology Madras",
//   },
//   {
//     id: 14,
//     label: "Indian Institute of Technology Roorkee",
//   },
//   {
//     id: 15,
//     label: "Indian Institute of Management Raipur",
//   },
//   {
//     id: 16,
//     label: "Indian Institute of Technology Kanpur",
//   },
//   {
//     id: 17,
//     label: "Indian Institute of Management Tiruchirappalli",
//   },
//   {
//     id: 18,
//     label: "Indian Institute of Management Udaipur",
//   },
//   {
//     id: 19,
//     label: "S. P. Jain Institute of Management & Research",
//   },
//   {
//     id: 20,
//     label: "Symbiosis Institute of Business Management Pune",
//   },
// ];

// console.log(institutes);

