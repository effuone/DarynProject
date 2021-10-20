using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using OnlinePortfolio.Web.Models;
using OnlinePortfolio.Web.Services;

namespace OnlinePortfolio.Web.Pages
{
    public class AuditCandidatesModel: PageModel
    {
        private readonly ILogger<AuditCandidatesModel> _logger;
        public AuditCandidatesModel(ILogger<AuditCandidatesModel> logger, JsonFileCandidateService candidateService) {
            _logger = logger;
            CandidateService = candidateService;
        }

        public JsonFileCandidateService CandidateService { get; }
        public IEnumerable<Candidate> Candidates { get; private set; }

        public void OnGet() {
            Candidates = CandidateService.GetProducts();
        }
    }
}