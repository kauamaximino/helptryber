 const fetchForm = async (item) => {
  try {
  const rawResponse = await fetch('https://showcase.api.linx.twenty57.net/Form2Channel', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(    [
      {"key":"formto_googlesheet","value":"me@flaviopaivavillar@gmail.com,flaviopaivavillar@gmail.com"},
      {"key":"Nome","value":"João"},
      {"key":"Sobrenome","value":"Lennon"},
      {"key":"País","value":"Reino Unido"},
      {"key":"Inscrito","value":"checked"},
      {"key":"Gênero","value":"Masculino"},
      {"key":"Arquivo","value":"https://form2channel.com/images/built-with-linx.svg"}
  ])
  });
  const content = await rawResponse.json();

  console.log(content);
  } 
catch (error) {
    return error;
  }
};

// // console.log(fetchItem('MLB1762362591'));
fetchForm().then(console.log);

