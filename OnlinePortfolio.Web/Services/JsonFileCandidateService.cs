using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using OnlinePortfolio.Web.Models;

namespace OnlinePortfolio.Web.Services {
  public class JsonFileCandidateService {
    public JsonFileCandidateService(IWebHostEnvironment webHostEnvironment) {
      WebHostEnvironment = webHostEnvironment;
    }

    public IWebHostEnvironment WebHostEnvironment { get; }

    private string JsonFileName {
      get { return Path.Combine(WebHostEnvironment.WebRootPath, "data", "candidates.json"); }
    }

    public IEnumerable<Candidate> GetProducts() {
      using (var jsonFileReader = File.OpenText(JsonFileName)) {
        return JsonSerializer.Deserialize<Candidate[]>(jsonFileReader.ReadToEnd(),
            new JsonSerializerOptions {
              PropertyNameCaseInsensitive = true
            });
      }
    }
  }
}
