//tag
/**+++++++++ FORM +++++++++ */
const appForm = document.querySelector("#appForm");
const companyInput = document.querySelector("#companyInput");
const roleInput = document.querySelector("#roleInput");
const submitBtn = document.querySelector("#submitBtn");
const errorBox = document.querySelector("#errorBox");
/****************************/ 
const list = document.querySelector("#list");

const state = {
  applications: [],
  ui: {
    error: ""
  }
};



/***START APP***/

init();


/**FUNCTIONS**/

function init() {
  appForm.addEventListener("submit", submitForm);
  
}

function submitForm(event) {
  event.preventDefault();
  let inputUtenteCompany = companyInput.value.trim();
  let inputUtenteRole = roleInput.value.trim();
  

  if (inputUtenteCompany == "" || inputUtenteRole == "") {
    state.ui.error = "Campo Vuoto";
    render();
    return;

  } else {
    state.ui.error = "";
    const app = createApplication(inputUtenteCompany, inputUtenteRole);
    state.applications.push(app);
    render();


  }

}

function createApplication(company, role) {
  return {
    id: crypto.randomUUID(),
    company,
    role,
    status: "AGGIUNTO",
    createAt: Date.now()
  };
}

function render() {
  renderError();
  renderList();
}

function renderError() {

}

function renderList() {
  list.innerHTML = "";
  let liCount = state.applications.length;
  if (liCount == 0) {
    return;
  } else {

    for (let i = 0; i < liCount; i++) {
      let li = document.createElement("li");
      li.textContent = `${app.company} - ${app.role}`;
      list.appendChild(li);

    }
    
  }
}

