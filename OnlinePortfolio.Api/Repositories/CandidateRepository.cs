using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using OnlinePortfolio.Api.Models;

namespace OnlinePortfolio.Api.Repositories
{
    public class CandidateRepository : IGuidAsyncRepository<Candidate>
    {
        private const string databaseName = "UniversityApplication";
        private const string collectionName = "candidates";
        private readonly IMongoCollection<Candidate> candidatesCollection;
        private readonly FilterDefinitionBuilder<Candidate> filterBuilder = Builders<Candidate>.Filter;
        public CandidateRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase(databaseName);
            candidatesCollection = database.GetCollection<Candidate>(collectionName);
        }
        public async Task CreateAsync(Candidate entity)
        {
            await candidatesCollection.InsertOneAsync(entity);
        }

        public async Task DeleteAsync(Guid id)
        {
            var filter = filterBuilder.Eq(item=>item.Id, id);
            await candidatesCollection.DeleteOneAsync(filter);
        }

        public async Task<Candidate> GetAsync(Guid id)
        {
            var filter = filterBuilder.Eq(item => item.Id, id);
            return await candidatesCollection.Find(filter).SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<Candidate>> GetAllAsync()
        {
            return await candidatesCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task UpdateAsync(Candidate item)
        {
            var filter = filterBuilder.Eq(existingItem=>existingItem.Id, item.Id);
            await candidatesCollection.ReplaceOneAsync(filter,item);
        }
    }
}