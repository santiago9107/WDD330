const content = [
  { id: 1, title: "What is Chemotherapy?", img: "chemotherapy.jpg", text: "Chemotherapy refers to the use of any drug to treat any disease. But to most people, the word chemotherapy or chemo means drugs used for cancer treatment. It's important to know that not all medicines and drugs to treat cancer work the same way. It used to be that the only kind of drug that could treat cancer was traditional or standard chemo, but now there are a lot of different kinds of drugs used to treat cancer. While traditional or standard chemotherapy is still the best way to treat many cancers, different kinds of drugs may work better for others. Source: cancer.org" },
  { id: 2, title: "Cautions to administer chemotherapy", img: "administration.jpg", text: "Direct contact with chemotherapy drugs (HDs), either by handling, reconstituting, or administering, represents an exposure risk.                                                                      The recommended location for chemotherapy preparation and administration is a quiet, low-traffic room that is dedicated to chemotherapy purposes, free from distractions, and easy to clean.                                                                                                         Many HDs have also been found to have drug residue on the outside of drug containers, which creates another opportunity for exposure of individuals who receive drugs and perform inventory control procedures.                                                                                      Personal protective equipment (PPE) should be used to protect personnel from exposure during handling of HDs. PPE includes gloves, gowns, goggles for eye protection, a full face shield for head protection, and respiratory barrier protection." },
  { id: 3, title: "Paclitaxel: An example of chemotherapy", img: "paclitaxel.png", text: "Paclitaxel , sold under the brand name Taxol among others, is a chemotherapy medication used to treat a number of types of cancer.This includes ovarian cancer, breast cancer, lung cancer, Kaposi sarcoma, cervical cancer, and pancreatic cancer. It is given by injection into a vein. There is also an albumin-bound formulation.Common side effects include hair loss, bone marrow suppression, numbness, allergic reactions, muscle pains, and diarrhea. Other serious side effects include heart problems, increased risk of infection, and lung inflammation. There are concerns that use during pregnancy may cause birth defects. Paclitaxel is in the taxane family of medications. It works by interference with the normal function of microtubules during cell division. Paclitaxel was first isolated in 1971 from the Pacific yew and approved for medical use in 1993. It is on the World Health Organization's List of Essential Medicines. It has been made from precursors, and more recently through cell culture." },
  { id: 4, title: "link 4", img: "img1.jpg", text: "text link 4" },
  
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
