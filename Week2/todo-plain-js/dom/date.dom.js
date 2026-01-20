import { getDate } from "../services/date.service.js";

export const updateDateOnPage = () => {
  const dateHTML = document.getElementById("date");

  const { Date, Month, Year, Day } = getDate();

  dateHTML.innerHTML = `Date: ${Date}/${Month}/${Year}, <span class="fw-light text-black fst-italic opacity-50">${Day}</span>`;
};
