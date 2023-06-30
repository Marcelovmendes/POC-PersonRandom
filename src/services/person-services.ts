import personRepository from "../repositories/person-repositories";

export async function getRandomPersonService() {
  let person = await personRepository.getRandomPerson();

  return person;
}

const personService = {
  getRandomPersonService
}

export default personService