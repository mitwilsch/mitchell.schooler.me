const fs = require('fs');

// Checks if param is integer
function mustBeInteger(req, res, next) {
  const { id } = req.params;

  if (!Number.isInteger(parseInt(id))) {
    res.status(400).json({ message: 'ID must be an integer' });
  } else {
    next();
  }
}

// validates fields
function checkFieldsToto(req, res, next) {
  const { name, content, tags } = req.body;

  // if (name && content && tags) {
  if (true) {
    next();
  } else {
    res.status(400).json({ message: 'fields are not good' });
  }
}

// Returns a new ID based on length of array
const getNewId = (array) => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  }
  return 1;
};

// returns a new date
const newDate = () => new Date().toString();

// adds to date
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toString();
};

// Checks if ID exists
function mustBeInArray(array, id) {
  return new Promise((resolve, reject) => {
    const row = array.find(r => r.id == id);

    if (!row) {
      reject({
        message: 'ID is not good mustbeinarray',
        status: 404
      });
    }
    resolve(row);
  });
}

// writes out to JSON file
function writeJSONFile(filename, content) {
  fs.writeFileSync(`${(__dirname)}/${filename}`, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('the file was saved');
  });
}

module.exports = {
  getNewId,
  newDate,
  addDays,
  mustBeInArray,
  writeJSONFile,
  mustBeInteger,
  checkFieldsToto

};
