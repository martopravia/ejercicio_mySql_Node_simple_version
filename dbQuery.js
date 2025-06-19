const express = require("express");
const mysql = require("mysql2/promise");

async function dbQuery(sqlQuery, queryParams) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ejercicio_users_db_2",
  });
  const [result, fields] = await connection.execute(sqlQuery, queryParams);
  connection.end();
  // console.log(result);
  return result;
}

module.exports = dbQuery;
