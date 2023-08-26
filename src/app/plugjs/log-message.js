// path: ./src/app/plugjs/log-message.js

let colorClass = "text-blue-500"; // Default color class if not specified

export async function updateLog(log, logs) {
  if (logs || log) {
    if (logs) {
      for (const entry of logs) {
        await setColorClass(entry);
        logMessage(entry, colorClass);

        console.log(); // Just logging for testing purposes
      }
      logs = []; // Clear the logs array after processing
    } else {
      await setColorClass(log);
      logMessage(log, colorClass);
    }
  }
}

async function setColorClass(log) {
  if (log && log.startsWith) {
    if (log.startsWith("Error:")) {
      colorClass = "text-red-500";
    } else if (log.startsWith("Success:")) {
      colorClass = "text-green-500";
    } else if (log.startsWith("")) {
      colorClass = "text-yellow-500";
    } else {
      colorClass = "text-blue-500"; // Default color class if not specified
    }
  }
}

function logMessage(log, colorClass) {
  const idLogElement = document.getElementById("console-state");
  const idLogBox = document.getElementById("log-box");
  const boxOuterElement = document.getElementById("box-outer-element");
  const newElement = document.createElement("p");
  newElement.classList.add(colorClass);
  newElement.innerHTML = `<span> >> </span> ${log}`;

  boxOuterElement.classList.remove("hidden");
  idLogBox.classList.remove("hidden");

  setTimeout(() => {
    idLogBox.classList.remove("invisible");
    setTimeout(() => {
      idLogBox.classList.add("visible");
      setTimeout(() => {
        idLogBox.classList.remove("visible");
        setTimeout(() => {
          boxOuterElement.classList.add("hidden");
        }, 10);
      }, 200000);
    }, 10);
  }, 10);

  idLogElement.appendChild(newElement);
  idLogElement.scrollTop = idLogElement.scrollHeight;

  boxOuterElement.addEventListener("click", () => {
    boxOuterElement.classList.add("hidden");
    setTimeout(() => {
      idLogBox.classList.remove("visible");
      setTimeout(() => {
        idLogBox.classList.add("invisible");
      }, 10);
    }, 10);
  });
}
