import migrationRunner from "node-pg-migrate";


export default async function migrations(request, response) {
  const migrations = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL,
    migrationsTable: "pgmigrations",
    dir: "infra/migrations",
    direction: "up",
    verbose: true,
    dryRun: true,
  });

  return response.status(200).json(migrations);
}