using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using OnlinePortfolio.Api.DTOs;
using OnlinePortfolio.Api.Models;
using OnlinePortfolio.Api.Repositories;

namespace OnlinePortfolio.Api.Controllers
{
    [ApiController]
    [Route("universities")]
    public class UniversityController : ControllerBase
    {
        private readonly IAsyncRepository<University> repository;
        private readonly ILogger<UniversityController> logger;
        public UniversityController(IAsyncRepository<University> repository, ILogger<UniversityController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }
        //GET
        [HttpGet]
        public async Task<IEnumerable<UniversityDto>> GetUniversitiesAsync(string name = null)
        {
            var items = (await repository.GetAllAsync())
            .Select(item=>item.AsDto());

            if(!string.IsNullOrWhiteSpace(name))
            {
                items = items.Where(item=>item.Name.Contains(name, StringComparison.OrdinalIgnoreCase));
            }

            logger.LogInformation($"{DateTime.Now.ToString("hh:mm:ss")} : Retrieved {items.Count()} items");
            return items;
        }
        //GET /items/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<UniversityDto>> GetUniversityAsync(long id)
        {
            var item = await repository.GetAsync(id);
            if (item is null)
            {
                return NotFound();
            }
            return item.AsDto();
        }
        //POST
        [HttpPost]
        public async Task<ActionResult<UniversityDto>> CreateItemAsync(CreateUniversityDto universityDto)
        {
            University item = new()
            {
                Name = universityDto.Name,
                CreationDate = universityDto.CreationDate,
                CountryId = universityDto.CountryId,
                CityId = universityDto.CityId,
                Description = universityDto.Description,
            };
            var all = await repository.GetAllAsync();
            item.Id = all.LastOrDefault().Id + 1;
            await repository.CreateAsync(item);
            return CreatedAtAction(nameof(GetUniversityAsync), new { id = item.Id}, item.AsDto());
        }

        //PUT
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateItemAsync(long id, UpdateUniversityDto universityDto)
        {
            University existingUniversity = await repository.GetAsync(id);
            if(existingUniversity is null)
            {
                return NotFound();
            }
            existingUniversity.Name = universityDto.Name;
            existingUniversity.CreationDate = universityDto.CreationDate;
            existingUniversity.CountryId = universityDto.CountryId;
            existingUniversity.CityId = universityDto.CityId;
            existingUniversity.Description = universityDto.Description;
            await repository.UpdateAsync(existingUniversity);
            return NoContent();
        }

        //DELETE /items/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteItemAsync(long id)
        {
            var existingItem = await repository.GetAsync(id);
            if(existingItem is null)
            {
                return NotFound();
            }

            await repository.DeleteAsync(id);
            return NoContent();
        }
        
    }
}