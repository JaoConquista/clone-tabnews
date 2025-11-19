test("GET status should return 200 ", async () => {
  const result = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await result.json();
 
  expect(result.status).toBe(200);
 const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
 expect(responseBody.updated_at).toEqual(parsedUpdatedAt); 
 expect(responseBody.dependencies.database.version).toEqual("16.0"); 
 expect(responseBody.dependencies.database.maxConnections).toEqual(100); 
 expect(responseBody.dependencies.database.openedConnections).toEqual(1);
});
