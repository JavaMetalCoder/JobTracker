//tag
/**+++++++++ FORM +++++++++ */
const appForm = document.querySelector("#appForm");
const companyInput = document.querySelector("#companyInput");
const roleInput = document.querySelector("#roleInput");
const errorBox = document.querySelector("#errorBox");
/****************************/ 
const list = document.querySelector("#list");

let state = {
  applications: [],
  ui: {
    error: ""
  }
};



/***START APP***/

init();
render();


/**FUNCTIONS**/

function init() {
  appForm.addEventListener("submit", submitForm);
  
}

function setState(patch) {
  state = {...state, ...patch};
  render();
}

function submitForm(event) {
  event.preventDefault();
  let inputUtenteCompany = companyInput.value.trim();
  let inputUtenteRole = roleInput.value.trim();
  

  if (inputUtenteCompany === "" || inputUtenteRole === "") {
    setState({
      ui: { ...state.ui, error: "Campo Vuoto"}
    });
    return;

  } else {
    
    const app = createApplication(inputUtenteCompany, inputUtenteRole);
    setState({
      ui: {...state.ui, error: ""},
      applications: [...state.applications, app]
    });
    appForm.reset();


  }

}

function createApplication(company, role) {
  return {
    id: crypto.randomUUID() ?? String(Date.now()),
    company,
    role,
    status: "APPLIED",
    createdAt: Date.now()
  };
}

function render() {
  renderError();
  renderList();
}

function renderError() {
  
  if(state.ui.error === "") {
    errorBox.innerHTML = "";
    errorBox.removeAttribute("role");
    
  } else {
    errorBox.textContent = state.ui.error;
    errorBox.setAttribute("role", "alert");
  }


}

function renderList() {
  list.innerHTML = "";
  for (const app of state.applications) {
      let li = document.createElement("li");
      li.textContent = `${app.company} - ${app.role}`;
      list.appendChild(li);

    }
    
  }

  


