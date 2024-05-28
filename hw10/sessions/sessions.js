let logsBtn = document.getElementById("getLogsBtn");
const getLogs = () => {
    let logs = JSON.parse(localStorage.pageVisitedTimes);
    for (const log of logs) {
        let logContainer = document.createElement("div");
        logContainer.innerText = log;
        document.getElementById("logs").appendChild(logContainer);
    }
}
logsBtn.addEventListener("click", getLogs);