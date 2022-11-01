fetch("https://apitest.esgaia.com/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.sort(function (a, b) {
      return b.score - a.score;
    });
    console.log(data);

    //ENVIRONMENTAL
    data.forEach((element) => {
      const environmental = document.querySelector(".environmental");

      const newDiv = document.createElement("div");
      newDiv.classList.add("environmentalNew");

      if (element.category == "Environmental") {
        console.log(element.score);
        newDiv.innerHTML = element.score + " " + element.name;
      }
      environmental.appendChild(newDiv);
    });

    //SOCIAL
    data.forEach((element) => {
      const social = document.querySelector(".social");
      const newDiv = document.createElement("div");
      newDiv.classList.add("socialNew");

      if (element.category == "Social") {
        newDiv.innerHTML = element.score + " " + element.name;
      }
      social.appendChild(newDiv);
    });

    //GOVERNANCE
    data.forEach((element) => {
      const governance = document.querySelector(".governance");
      const newDiv = document.createElement("div");
      newDiv.classList.add("governanceNew");

      if (element.category == "Governance") {
        newDiv.innerHTML = element.score + " " + element.name;
      }
      governance.appendChild(newDiv);
    });
  });
