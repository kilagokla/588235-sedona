var search = document.querySelector(".idnex-search");

var popup = document.querySelector(".modal-search");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("search");
} catch (err) {
isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");



/*дальше ра
if (storage) {
	dateIn.value=storage;
dateOut.focus();
} else {
dateIn.focus();
}
});
if (storage) {
	dateIn.value=storage;
	dateOut.value=storage;
    adults.focus();
} else {
    dateOut.focus();
}
};
if (storage) {
	dateIn.value=storage;
	dateOut.value=storage;
    adults.value=storage;
    children.focus();
} else {
   adults.focus();
}
};*/


/*

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
if (!dateIn.value || !dateOut.value || !adults.value || !children.value) {
evt.preventDefault();
popup.classList.remove("modal-error");
popup.offsetWidth = popup.offsetWidth;
popup.classList.add("modal-error");
} else {
if (isStorageSupport) {
localStorage.setItem("search", search.value);
}
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (popup.classList.contains("modal-show")) {
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
}
}
});*/