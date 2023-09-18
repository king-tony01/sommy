const form = document.querySelector("form");
const postButton = document.getElementById("post");
const alertCustom = document.querySelector(".alert");
const imageButton = document.querySelector(".image-input");
const contentsContainer = document.querySelector(".contents");
const imageInput = document.getElementById("image");
const previewImage = form.querySelector("img");
// Grabbing the action icons
const addArticle = document.querySelector(".fa-square-plus");
const addOptions = document.querySelector(".adding-container");

// Handling the adding of input fields
addArticle.addEventListener("click", () => {
  addOptions.classList.add("active");
});

// Closing the add options and adding the elements
addOptions.addEventListener("click", (e) => {
  const subHead = `<label for="su">Subtitle</label>
            <textarea name="subtitle" id="subtitle"></textarea>`;
  const body = `<label for="body">Body</label>
            <textarea name="body" id="body"></textarea>`;
  addOptions.classList.remove("active");
  if (e.target.dataset.id == "addSubHead") {
    contentsContainer.insertAdjacentHTML("beforeend", subHead);
  } else if (e.target.dataset.id == "addBody") {
    contentsContainer.insertAdjacentHTML("beforeend", body);
  }
});

// Handling image select
function createImage() {
  const curFile = imageInput.files;
  let data;
  if (curFile.length !== 0) {
    for (const file of curFile) {
      const previewImage = form.querySelector("img");
      previewImage.src = URL.createObjectURL(file);
      previewImage.style.display = "block";
      imageButton.style.display = "none";
      data = URL.createObjectURL(file);
    }
  }
  return data;
}
imageButton.addEventListener("click", () => {
  imageInput.click();
  // console.log(createImage());
});

imageInput.addEventListener("change", createImage, false);
// Handling the form

function displayAlert(condition, message) {
  if (condition == "success") {
    alertCustom.classList.add(condition);
    alertCustom.innerHTML = `<p>${message}</p>`;
  }
  alertCustom.classList.remove("hidden");
  let timer = setTimeout(() => {
    alertCustom.classList.add("hidden");
    clearTimeout(timer);
  }, 3000);
}

postButton.addEventListener("click", async (e) => {
  const formData = new FormData(form);
  console.log(formData.getAll("body"));
  e.preventDefault();
  const newForm = {
    keywords: "",
    fileName: "",
    image: "",
    category: "",
    title: "",
    intro: [],
    subtitle: "",
    content: [],
  };
  newForm.title = formData.get("title");
  newForm.intro = formData.get("introduction");
  newForm.subtitle = formData.getAll("subtitle");
  newForm.content = formData.getAll("body");
  newForm.category = formData.get("category");
  newForm.fileName = createFileName();
  newForm.image = createImage();
  console.log(newForm);

  try {
    const response = await fetch("http://localhost:2200/sommy/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
    if (response.ok) {
      displayAlert("success", "Successful, waiting for confirmation...");
      form.title.value = "";
      form.introduction.value = "";
      formData.getAll("subtitle").value = "";
      formData.getAll("body").value = "";
    }
    const data = await response.json();
    if (data) {
      displayAlert("success", data.message);
    }
    console.log(data);
  } catch (err) {
    console.log(err);
    displayAlert();
  }
  createFileName();
});

function createFileName() {
  return form.title.value.toLowerCase().split(" ").join("-");
}
