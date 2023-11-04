/* eslint-disable no-plusplus */
const updateStatus = (med, medId, code, tog) => {
  const st = med.status;
  st[code] = !tog;
  fetch(`https://teat-json-server.onrender.com/${medId}/`, {
    method: 'PATCH',
    body: JSON.stringify({

      status: st,

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',

    },
  }).then((response) => response.json())
    .then((json) => console.log(json));
};
const updateBpLog = (bpLogId, data) => {
  fetch(`https://teat-json-server.onrender.com/${bpLogId}/`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',

    },
  }).then((response) => response.json())
    .then((json) => console.log(json));
};

// async function pushToBPLog() {

// }
async function searchApi(query) {
  const data = await fetch('https://teat-json-server.onrender.com/medicines');
  const medicines = await data.json();

  const filteredData = medicines.filter((medicine) => medicine.name.toLowerCase().includes(query));
  return filteredData;
}

async function getUserLog(id) {
  const response = await fetch(`https://teat-json-server.onrender.com/${id}`);
  const log = await response.json();
  console.log(log);
  return log;
}
async function getAllBp() {
  const response = await fetch('https://teat-json-server.onrender.com/bp-logs');
  const logs = await response.json();
  console.log(logs);
  return logs;
}

export {
  // eslint-disable-next-line comma-dangle
  getAllBp, getUserLog, searchApi, updateBpLog, updateStatus
};
