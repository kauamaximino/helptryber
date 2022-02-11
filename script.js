// const projetosBloco1 = require('/home/kaua/Área de Trabalho/Projetos Pessoais/projeto-bonus-semama-ontrack/helptryber/projetosBloco1.js')'

const help = {
    bloco: 'projetos-Bloco-1',
    projectBlockOne: ['JS Unit Test','Zoo Functions','Shopping Cart'],
  };

const divProject = document.querySelector('.project-list');

const createElement = (element, bloco, valor, tipo, classe) => {
  const elem = document.createElement(element);
  const lab = document.createElement('label');
  lab.className = 'lab';
  lab.innerText = valor;
  lab.value = valor;
  elem.className = classe;
  console.log(typeof valor)
  if (element === 'input'){
    elem.type = tipo;
    elem.name = bloco;
    elem.value = valor;
  }
  lab.appendChild(elem);
  return lab;
};

function createProject() {
  const { projectBlockOne } = help;
  const { bloco } = help;
  projectBlockOne.forEach((elem) => {
    divProject.appendChild(createElement('input', bloco, elem, 'radio', 'subject'));
  });
}

createProject();