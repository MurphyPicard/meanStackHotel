/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  db.collection('movies').insert(doc, (error, result)=>{
    callback(error);
  })
  // callback(null);
  
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // TODO: implement
  var dir = {'director': director};
  var tit = {'title': 1};
  
  db.collection('movies').find(dir).sort(tit).toArray((err, docs)=>{
    callback(err,docs); 
    
    // docs.forEach((doc)=>{
    // callback(docs);
    // console.log(JSON.stringify(doc))
    // });//forEach
  });

  // 'The Empire Strikes Back'
  
  // collection.find().sort({'a': 1}).nextObject(function(err, item) {
  //     test.equal(null, err);
  //     test.equal(1, item.a);
  // callback(null, []);
};