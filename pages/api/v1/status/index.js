import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersion = await database.query(
    "SHOW server_version;"
  ).then((result) => result.rows[0].server_version);

  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;"
  ).then(result => result.rows[0].max_connections);

  const databaName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResul = await database.query(
   {
    text: `SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;`,
    values: [databaName]
   }
  ).then(result => result.rows[0].count);
  response.status(200).json({
    dependencies: {
      database: {
        version: databaseVersion,
        maxConnections: parseInt(databaseMaxConnectionsResult),
        openedConnections: databaseOpenedConnectionsResul,
      },
    },
    updated_at: updatedAt,
  });
}

export default status;
