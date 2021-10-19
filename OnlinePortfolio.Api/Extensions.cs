using OnlinePortfolio.Api.DTOs;
using OnlinePortfolio.Api.Models;

namespace OnlinePortfolio.Api
{
    public static class Extensions
    {
        public static CandidateDto AsDto(this Candidate entity)
        {
            return new CandidateDto
            (
                entity.Id,
                entity.FirstName,
                entity.LastName,
                entity.SchoolName,
                entity.Grade,
                entity.EmailAddress,
                entity.CellphoneNumber,
                entity.Achievements,
                entity.CreatedDate
            );
        }
    }
}