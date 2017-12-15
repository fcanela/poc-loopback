
/**
 * Boot script to auto-update the table schema of your DB.
 * WARNING: THIS IS NOT GUARANTEED TO BE "SAFE"; you should not use
 * this in an actual production setting without properly testing the schema
 * changes before hand, as they may still cause data loss!
 * @param {*} server 
 * @param {*} cb 
 */
module.exports = function(server, cb) {
  const db = server.datasources.postgresql;
  db.once('connected', () => {
    db.autoupdate((err) => {
      if (err) {
        return cb(err);
      }
      console.log('Autoupdate complete!');
      return cb();
    })
  });
}
