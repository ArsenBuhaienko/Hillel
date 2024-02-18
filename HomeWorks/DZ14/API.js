import { DatabaseConnector } from "./Conector.js";


const dbConfig = {
  host: 'yh6.h.filess.i',
  user: 'automation_heraction',
  password: 'a15e5a47817c45a99ca9f32298e1cca90ea3c056',
  database: 'automation_heraction',
};

const connector = new DatabaseConnector(dbConfig);

async function exampleUsage() {
  try {
    const result = await connector.executeQuery('SELECT * FROM your_table');
    console.log('Query result:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

exampleUsage();
