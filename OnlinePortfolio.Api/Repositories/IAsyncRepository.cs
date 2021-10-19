using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlinePortfolio.Api.Repositories
{
    public interface IAsyncRepository<T> where T:class
    {
        Task<T> GetAsync(Guid id);
        Task<IEnumerable<T>> GetAllAsync();
        Task CreateAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(Guid id);
    }
}