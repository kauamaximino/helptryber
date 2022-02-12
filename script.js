// const projetosBloco1 = require('/home/kaua/Área de Trabalho/Projetos Pessoais/projeto-bonus-semama-ontrack/helptryber/projetosBloco1.js')'
const nameMentor = document.getElementById('input-mentor-name');
const emailMentor = document.getElementById('input-mentor-email');
const dayMentor = document.getElementById('inputMentorDate');
const initTimeMentor = document.getElementById('inputMentorTimeStart');
const endTimeMentor = document.getElementById('inputMentorTimeEnd');
const containerMentor = document.querySelector('.coontainer-list-mentor');
const btnMentor = document.getElementById('btn-send-mentor');
const materias = document.getElementsByName('projetos-Bloco-1');

const help = {
    bloco: 'projetos-Bloco-1',
    projectBlockOne: ['JS Unit Test','Zoo Functions','Shopping Cart'],
  };

const divProject = document.querySelector('.project-list');

const createElement = (element, bloco, valor, tipo, classe) => {
  const elem = document.createElement(element);
  const lab = document.createElement('label');
  lab.className = `lab-${tipo}`;
  lab.innerText = valor;
  lab.value = valor;
  elem.className = classe;
  if (element === 'input'){
    elem.type = tipo;
    elem.name = bloco;
    elem.value = valor;
  }
  lab.appendChild(elem);
  return lab;
};

function valueCheckbox(checkboxId) {
  const arrayCheckbox = [];
  for (let i = 0; i < checkboxId.length; i += 1) {
    if (checkboxId[i].checked === true) {
      arrayCheckbox.push(checkboxId[i].value);
    }
  }
  return arrayCheckbox.join(', ');
}

const addMentor = () => {
  const div = document.createElement('div');
  div.className = 'list-mentor-box';
  const p = document.createElement('p');
  p.innerText = `${nameMentor.value} disponivel dia ${dayMentor.value} das ${initTimeMentor.value} as ${endTimeMentor.value}
  Mentor nas materias: ${valueCheckbox(materias)}`;
  div.appendChild(p);
  return div;
};

function createProject() {
  const { projectBlockOne } = help;
  const { bloco } = help;
  const div = document.createElement('div');
  div.className = 'materias'
  divProject.appendChild(div);
  projectBlockOne.forEach((elem) => {
    div.appendChild(createElement('input', bloco, elem, 'checkbox', 'projects'));
  });
  
}

btnMentor.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(materias);
  containerMentor.appendChild(addMentor());
});

createProject();