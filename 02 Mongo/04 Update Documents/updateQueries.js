exports.updateOne = (dbPromise, collection) => (findQuery, updateQuery) => {
  return new Promise((resolve, reject) => {
    dbPromise.then((db) => {
      const result = db.collection(collection).updateOne(findQuery, updateQuery);
      resolve(result);
    })
    .catch((error) => reject(error));
  });
};

exports.updateMany = (dbPromise, collection) => (findQuery, updateQuery) => {
  return new Promise((resolve, reject) => {
    dbPromise.then((db) => {
      const result = db.collection(collection).updateMany(findQuery, updateQuery);
      resolve(result);
    })
    .catch((error) => reject(error));
  });
};
