import connection from "database/dataBase";
import { person } from "protocols/person-protocols";

export async function getRandomPerson() {
  const selectQuery = "SELECT * FROM people ORDER BY RANDOM() LIMIT 1";
  const selectResult = await connection.query(selectQuery);

  const result :person[] = selectResult.rows[0];
  return result;

}

  const personRepository = {
    getRandomPerson
  }

  export default personRepository;