// const projetosBloco1 = require('/home/kaua/Área de Trabalho/Projetos Pessoais/projeto-bonus-semama-ontrack/helptryber/projetosBloco1.js')'
const nameMentor = document.getElementById('input-mentor-name');
const emailMentor = document.getElementById('input-mentor-email');
const dayMentor = document.getElementById('inputMentorDate');
const initTimeMentor = document.getElementById('inputMentorTimeStart');
const endTimeMentor = document.getElementById('inputMentorTimeEnd');
const containerMentor = document.querySelector('.coontainer-list-mentor');
const btnMentor = document.getElementById('btn-send-mentor');
const materias = document.getElementsByName('projetos-Bloco-1');
const all = document.getElementById('all');

const help = {
    bloco: 'projetos-Bloco-1',
    projectBlockOne: ['Lessons learned', 'Playground Functions', 'Meme Generator', 'Arte com Pixels', 'Lista de tarefas', 'Adivinhe a Cor', 'Carta Misteriosa', 'Trybewarts','JS Unit Test','Zoo Functions','Shopping Cart'],
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
  console.log(all.checked);
  if (all.checked) return 'Todos os projetos'
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
  p.innerText = `${nameMentor.value} 
  Disponível dia: ${dayMentor.value} - Horário: das ${initTimeMentor.value} as ${endTimeMentor.value}
  Voluntário nos projetos: ${valueCheckbox(materias)}`;
  div.appendChild(p);
  div.addEventListener('click', cartItemClickListener);
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

const marcarTodos = () => {
  materias.forEach((mat) => mat.checked = 1);
}

const desmarcarTodos = () => {
  materias.forEach((mat) => mat.checked = 0);
}

all.addEventListener('click', () => all.checked ? marcarTodos() : desmarcarTodos());

// https://www.w3schools.com/howto/howto_js_popup_form.asp
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function cartItemClickListener(event) {
  if (event.target.className === 'completed') {
    event.target.className = '';
    event.target.style.textDecoration = '';
  }
  else {
    event.target.className = 'completed';
    event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  } 
}

createProject();