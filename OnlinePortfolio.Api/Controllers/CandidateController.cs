using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlinePortfolio.Api.DTOs;
using OnlinePortfolio.Api.Models;
using OnlinePortfolio.Api.Repositories;

namespace OnlinePortfolio.Api.Controllers
{
    [ApiController]
    [Route("candidates")]
    public class CandidateController : ControllerBase
    {
        private readonly IGuidAsyncRepository<Candidate> repository;
        private readonly ILogger<CandidateController> logger;
        public CandidateController(IGuidAsyncRepository<Candidate> repository, ILogger<CandidateController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }
        //GET
        [HttpGet]
        public async Task<IEnumerable<CandidateDto>> GetCandidatesAsync(string name = null)
        {
            var items = (await repository.GetAllAsync())
            .Select(item=>item.AsDto());

            if(!string.IsNullOrWhiteSpace(name))
            {
                items = items.Where(item=>item.FirstName.Contains(name, StringComparison.OrdinalIgnoreCase));
            }

            logger.LogInformation($"{DateTime.Now.ToString("hh:mm:ss")} : Retrieved {items.Count()} items");
            return items;
        }
        //GET /items/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<CandidateDto>> GetItemAsync(Guid id)
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
        public async Task<ActionResult<CandidateDto>> CreateItemAsync(CreateCandidateDto candidateDto)
        {
            Candidate item = new()
            {
                Id = Guid.NewGuid(),
                FirstName = candidateDto.FirstName,
                LastName = candidateDto.LastName,
                Birthday = candidateDto.Birthday,
                Country = candidateDto.Country,
                City = candidateDto.City,
                SchoolName = candidateDto.SchoolName,
                Grade = candidateDto.Grade,
                CellphoneNumber = candidateDto.CellphoneNumber,
                EmailAddress = candidateDto.EmailAddress,
                GraduationYear = candidateDto.GraduationYear,
                Achievements = candidateDto.Achievements,
                CreatedDate = DateTimeOffset.UtcNow
            };
            await repository.CreateAsync(item);
            return CreatedAtAction(nameof(GetItemAsync), new { id = item.Id}, item.AsDto());
        }

        //PUT
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateItemAsync(Guid id, UpdateCandidateDto candidateDto)
        {
            Candidate existingCandidate = await repository.GetAsync(id);
            if(existingCandidate is null)
            {
                return NotFound();
            }
            existingCandidate.FirstName = candidateDto.FirstName;
            existingCandidate.LastName = candidateDto.LastName;
            existingCandidate.Birthday = candidateDto.Birthday;
            existingCandidate.Country = candidateDto.Country;
            existingCandidate.City = candidateDto.City;
            existingCandidate.Grade = candidateDto.Grade;
            existingCandidate.GraduationYear = candidateDto.GraduationYear;
            existingCandidate.CellphoneNumber = candidateDto.CellphoneNumber;
            existingCandidate.EmailAddress = candidateDto.EmailAddress;
            existingCandidate.Achievements = candidateDto.Achievements;

            await repository.UpdateAsync(existingCandidate);
            return NoContent();
        }

        //DELETE /items/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteItemAsync(Guid id)
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