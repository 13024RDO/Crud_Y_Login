const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_node",
});

conexion.connect((error) => {
  if (error) {
    console.log("hubo un error al conectarse en la base de datos" + error);
    return;
  }

  console.log("Se connecto exitosamente a la base de datos");
});

module.exports = conexion;
