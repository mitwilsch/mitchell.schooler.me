const h = require('../helpers.js');
const t = require('./totos.json');

const toto = {
  id: h.getNewId(t),
  name: '',
  content: '',
  isFinished: false,
  priority: 1,
  dateCreated: h.newDate(),
  dateUpdated: h.newDate(),
  dateDue: h.addDays(h.newDate(), 7),
  tags: ['test']
};

module.exports = toto;
