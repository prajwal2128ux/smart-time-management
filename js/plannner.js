const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const slotSelect = document.getElementById("slot");

let slotMap = {};

// create slots 5am → 12am
for(let h=5; h<24; h++){
  const label = `${h}:00 - ${h+1}:00`;
  const box = document.createElement("div");
  box.className="time-slot";
  box.innerHTML=`<b>${label}</b>`;
  grid.appendChild(box);
  slotMap[label] = box;

  const opt = document.createElement("option");
  opt.value = label;
  opt.innerText = label;
  slotSelect.appendChild(opt);
}

document.getElementById("addBtn").onclick = () => {
  modal.style.display="flex";
};

function closeModal(){
  modal.style.display="none";
}

function saveTask(){
  const t = title.value;
  const p = priority.value;
  const s = slotSelect.value;
  if(!t) return alert("Enter task");

  const task = document.createElement("div");
  task.className="task";
  task.innerText=`${t} (${p})`;
  task.style.background = p==="High"?"#fecaca":p==="Medium"?"#fde68a":"#bbf7d0";

  slotMap[s].appendChild(task);
  closeModal();
}
