const content = [
  { id: 1, title: "What is Chemotherapy?", img: "chemotherapy.jpg", text: "Chemotherapy refers to the use of any drug to treat any disease. But to most people, the word chemotherapy or chemo means drugs used for cancer treatment. It's important to know that not all medicines and drugs to treat cancer work the same way. It used to be that the only kind of drug that could treat cancer was traditional or standard chemo, but now there are a lot of different kinds of drugs used to treat cancer. While traditional or standard chemotherapy is still the best way to treat many cancers, different kinds of drugs may work better for others. Source: cancer.org" },
  { id: 2, title: "Cautions to administer chemotherapy", img: "administration.jpg", text: "Direct contact with chemotherapy drugs (HDs), either by handling, reconstituting, or administering, represents an exposure risk.                                                                      The recommended location for chemotherapy preparation and administration is a quiet, low-traffic room that is dedicated to chemotherapy purposes, free from distractions, and easy to clean.                                                                                                         Many HDs have also been found to have drug residue on the outside of drug containers, which creates another opportunity for exposure of individuals who receive drugs and perform inventory control procedures.                                                                                      Personal protective equipment (PPE) should be used to protect personnel from exposure during handling of HDs. PPE includes gloves, gowns, goggles for eye protection, a full face shield for head protection, and respiratory barrier protection." },
  { id: 3, title: "link 3", img: "img1.jpg", text: "text link 3" },
  { id: 4, title: "link 4", img: "img1.jpg", text: "text link 4" },
  { id: 5, title: "link 5", img: "img1.jpg", text: "text link 5" },
]

window.onload = function () {
  let list = document.getElementById("list");
  content.forEach(element => {
    list.insertAdjacentHTML('beforeend', `<a href="#!" onclick="changeContent(${element.id})" class="collection-item">${element.title}</a>`);
  });
};

const changeContent = (id) => {
  let elements = content.filter(contentElement => contentElement.id === id)
  let newContent = `<div class="card">
                      <div class="card-image">
                        <img src="img/${elements[0].img}" alt="${elements[0].title}">
                      </div>
                      <div class="card-content">
                        <h4></h4>
                        <span class="card-title">${elements[0].title}</span>
                        <p>
                        ${elements[0].text}
                        </p>
                      </div>
                    </div>
                  `
  let contentContainer = document.getElementById("contentContainer");
  contentContainer.innerHTML = newContent;
}
