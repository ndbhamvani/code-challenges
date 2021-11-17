import ESGinfo from '../models/esgData.js';
import { bankESGSeedData } from './bankESGSeedData.js';
import { connectDb, disconnectDb, truncateDb } from './helpers.js';

async function seed() {
  try {
    await connectDb();
    console.log('🤖 Database Connected');

    await truncateDb();
    console.log('🤖 Database Dropped');

    const bankESG = await ESGinfo.create(bankESGSeedData);
    console.log(`🤖 ${bankESG.length} ESG data added to the database`);

    console.log('🤖 Goodbye');
  } catch (err) {
    console.log('🤖 Something went wrong');
    console.log(err);
  }
  disconnectDb();
}

seed();
