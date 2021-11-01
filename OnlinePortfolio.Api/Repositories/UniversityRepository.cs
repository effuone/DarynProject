using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using OnlinePortfolio.Api.Models;

namespace OnlinePortfolio.Api.Repositories
{
    public class UniversityRepository : IAsyncRepository<University>
    {
        private const string databaseName = "UniversityApplication";
        private const string collectionName = "universities";
        private readonly IMongoCollection<University> universityCollection;
        private readonly FilterDefinitionBuilder<University> filterBuilder = Builders<University>.Filter;
        public UniversityRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase(databaseName);
            universityCollection = database.GetCollection<University>(collectionName);
        }

        public async Task CreateAsync(University entity)
        {
             await universityCollection.InsertOneAsync(entity);
        }

        public async Task DeleteAsync(long id)
        {
            await universityCollection.DeleteOneAsync(x=>x.Id==id);
        }

        public async Task<IEnumerable<University>> GetAllAsync()
        {
            return await universityCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<University> GetAsync(long id)
        {
            return await universityCollection.Find(x=>x.Id==id).SingleOrDefaultAsync();
        }

        public async Task UpdateAsync(University entity)
        {
            var filter = filterBuilder.Eq(existingItem=>existingItem.Id, entity.Id);
            await universityCollection.ReplaceOneAsync(filter,entity);
        }
    }
}