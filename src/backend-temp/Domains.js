var request = require('sync-request');

var res = request('GET', 'https://interview-experiences.herokuapp.com/info/domains');

let domains = JSON.parse(res.getBody());

export default domains;


// const domains = [
//   {
//     id: 1,
//     label: "Bsc-PCM",
//   },
//   {
//     id: 2,
//     label: "Bsc-computer science",
//   },
//   {
//     id: 3,
//     label: "Bsc-Agricultuer",
//   },
//   {
//     id: 4,
//     label: "Bcom-plain",
//   },
//   {
//     id: 5,
//     label: "Bcom-Economics",
//   },
//   {
//     id: 6,
//     label: "Btech-computer Science",
//   },
//   {
//     id: 7,
//     label: "Btech-Mechanical",
//   },
//   {
//     id: 8,
//     label: "Btech-Electrical",
//   },
//   {
//     id: 9,
//     label: "Btech-Agriculture",
//   },
//   {
//     id: 10,
//     label: "BBA",
//   },
// ];
