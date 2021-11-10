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
                entity.Birthday,
                entity.Country,
                entity.City,
                entity.SchoolName,
                entity.Grade,
                entity.GraduationYear,
                entity.EmailAddress,
                entity.CellphoneNumber,
                entity.Achievements,
                entity.CreatedDate
            );
        }
        public static UniversityDto AsDto(this University entity)
        {
            return new UniversityDto
            (
                entity.Id,
                entity.Name,
                entity.CreationDate,
                entity.CountryId,
                entity.CityId,
                entity.Description
            );
        }
    }
}