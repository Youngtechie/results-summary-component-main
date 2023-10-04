import summary from "./data.js";

function getResultsSummary() {
  let ul = document.body.querySelector("ul");
  for (var i = 0; i < summary.length; i++) {
    let text = `
                <div class="iconNText">
                <img class="icon" src='${summary[i].icon}'/>
                <span> ${summary[i].category} </span>
              </div>
              <span>
                <span class="bold">${summary[i].score}</span> <span class="dull">/ 100</span>
              </span>`;

    const li = document.createElement("li");

    li.innerHTML = text;

    ul.append(li);
  }
}

getResultsSummary();
