﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using OnlinePortfolio.Web.Models;
using OnlinePortfolio.Web.Services;

namespace OnlinePortfolio.Web.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public IndexModel(ILogger<IndexModel> logger, JsonFileCandidateService candidateService) {
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
