import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const deltas = [
  {
    id: "aa1",
    category: "Anyone"
  },
  {
    id: "aa2",
    category: "Someone"
  },
  {
    id: "bb1",
    category: "All"
  },
  {
    id: "a1b",
    category: "My"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (delta) => {
  return replaceAll(delta.category, ' ', '-');
};

class DeltaApi {
  static getAllDeltas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], deltas));
      }, delay);
    });
  }
}
export default DeltaApi;
