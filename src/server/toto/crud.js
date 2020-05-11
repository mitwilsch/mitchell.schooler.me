const filename = './data/totos.json';
let totos = require(filename);
const h = require('./helpers.js');
const model = require('./data/totos.model.js');

function getTotos() {
  return new Promise((resolve, reject) => {
    if (totos.length === 0) {
      reject({
        message: 'no totos available',
        status: 202
      });
    }
    resolve(totos);
  });
}

function getToto(id) {
  return new Promise((resolve, reject) => {
    h.mustBeInArray(totos, id)
      .then(toto => resolve(toto))
      .catch(err => reject(err));
  });
}

function insertToto(newToto) {
  return new Promise((resolve, reject) => {
    const fields = Object.keys(newToto);

    for (const i in fields) {
      model[fields[i]] = newToto[fields[i]];
    }

    totos.push(model);


    h.writeJSONFile(filename, totos);
    resolve(model);
  });
}

function updateToto(id, newToto) {
  return new Promise((resolve, reject) => {
    h.mustBeInArray(totos, id)
      .then((toto) => {
        const index = totos.findIndex(p => p.id == toto.id);
        const fields = Object.keys(newToto);
        const newArr = totos[index];
        for (const i in fields) {
          newArr[fields[i]] = newToto[fields[i]];
        }
        newArr.dateUpdated = h.newDate();
        totos[index] = newArr;
        h.writeJSONFile(filename, totos);
        resolve(totos[index]);
      })
      .catch(err => reject(err));
  });
}

function deleteToto(id) {
  return new Promise((resolve, reject) => {
    h.mustBeInArray(totos, id)
      .then(() => {
        totos = totos.filter(p => p.id != id);
        h.writeJSONFile(filename, totos);
        resolve();
      })
      .catch(err => reject(err));
  });
}

module.exports = {
  insertToto,
  getTotos,
  getToto,
  updateToto,
  deleteToto,
  totos
};
