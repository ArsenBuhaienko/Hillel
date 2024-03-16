import mysql from 'mysql2';

class DatabaseConnector {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.connection.connect((err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  async disconnect() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  async executeQuery(query, values) {
    try {
      await this.connect();
      const [rows] = await this.connection.query(query, values);
      return rows;
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    } finally {
      await this.disconnect();
    }
  }
}

export { DatabaseConnector };
