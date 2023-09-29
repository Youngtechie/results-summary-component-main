const url = "http://127.0.0.1:5500/results-summary-component-main/data.json";
let data = [];
async function getResultsSummary() {
  await fetch(url).then((res) => {
    res.json().then((result) => {
      data = result;
      let ul = document.body.querySelector("ul");
      for (var i = 0; i < data.length; i++) {
        let text = `
                <div class="iconNText">
                <img class="icon" src='${data[i].icon}'/>
                <span> ${data[i].category} </span>
              </div>
              <span>
                <span class="bold">${data[i].score}</span> <span class="dull">/ 100</span>
              </span>`;

        const li = document.createElement("li");
        
        li.innerHTML = text;

        ul.append(li);
      }
    });
  });
}

getResultsSummary();
