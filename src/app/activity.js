// path: ./src/app/activity.js
// activity.js
const activitiesTableBody = document.querySelector("tbody");

export function addActivityRow(longUrl, shortenedUrl, createdAt) {
  // Code for adding an activity row to the table and storing the activity data in local storage
  const row = document.createElement("tr");
  row.classList.add("transition-opacity", "invisible");
  row.innerHTML = `
    <td class="border border-red-500 before:text-red-500" data-label="Long">${longUrl}</td>

    <td class="border border-green-500  before:text-green-500" data-label="Short">
    <a href="${shortenedUrl}" target="_blank" class="text-blue-500 hover:underline">${shortenedUrl}</a>
    </td>

    <td class="border before:text-gray-500" data-label="Created">${formatDate(
      createdAt
    )}</td>
  `;

  row.classList.remove("invisible");
  setTimeout(() => {
    row.classList.add("visible");
  }, 10);

  activitiesTableBody.prepend(row);

  // Save the activity in local storage
  const activity = { longUrl, shortenedUrl, createdAt };
  const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];
  storedActivities.unshift(activity);
  localStorage.setItem("activities", JSON.stringify(storedActivities));
}

export function displayUserActivities() {
  // Code for fetching and displaying user activities
  const storedActivities = JSON.parse(localStorage.getItem("activities")) || [];
  const activitiesTableBody = document.querySelector("#activitiesTableBody");

  if (activitiesTableBody) {
    // Sort activities by date created in ascending order
    storedActivities.sort((a, b) => a.createdAt - b.createdAt);

    storedActivities.forEach((activity) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td class="border border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-300 before:text-red-500" data-label="Long">${
            activity.longUrl
          }</td>
          <td class="border border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-300 before:text-green-500" data-label="Short">
            <a href="${
              activity.shortenedUrl
            }" target="_blank" class="text-blue-500 hover:underline">${
        activity.shortenedUrl
      }</a>
          </td>
          <td class="border border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-300 before:text-gray-500" data-label="Created">${formatDate(
            activity.createdAt
          )}</td>
        `;
      activitiesTableBody.appendChild(row);
    });
  }
}

function formatDate(dateString) {
  // Code for formatting the date as "YYYY-MM-DD"
  const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}
