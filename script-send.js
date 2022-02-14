// // import { mailjet } from './node_modules/node-mailjet/index.js'
// const sendMail = (nomeEst, emailEst, textoEst, emailMent, nomeMent) => {
// // const sendMail = () => {
//   console.log(nomeEst);
//   // const mailjet = require ('node-mailjet')
//   import { mailjet } from './node_modules/node-mailjet'
//   mailjet
//   .connect('062aa6b5fa930d6b420871ccac03bf3b', '6ceb5bf48e2b5fd44b4e72919709427c')
//   const request = mailjet
//   .post("send", {'version': 'v3.1'})
//   .request({
//     "Messages":[
//       {
//         "From": {
//           "Email": "henrque.bonfim2@gmail.com",
//           "Name": "Henrique"
//         },
//         "To": [
//           {
//             "Email": emailMent,
//             "Name": nomeMent
//           }
//         ],
//         "Subject": "Agendamento de horario com " + nomeEst,
//         "TextPart": "My first Mailjet email",
//         "HTMLPart": "<h3>Hello Tryber!! você tem um agendamento de Horario</h3><br />Com: " + nomeEst + " e-mail: " + emailEst + " sobre: " + textoEst,
//         "CustomID": "AppGettingStartedTest"
//       }
//     ]
//   })
//   request
//     .then((result) => {
//       console.log(result.body)
//     })
//     .catch((err) => {
//       console.log(err.statusCode)
//     })
// };
// sendMail('JOAO', 'joao@gmail.com', 'ajudeme em localstorage', 'henrque.bonfim2@gmail.com', 'Henroqie');
// if (typeof module !== 'undefined') {
//   module.exports = sendMail;
// }
// // export default sendMail;
