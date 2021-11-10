using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using OnlinePortfolio.Api.Areas.Identity.Data;
using OnlinePortfolio.Api.DTOs;
using OnlinePortfolio.Api.Models;
using OnlinePortfolio.Api.Repositories;

namespace OnlinePortfolio.Api.Controllers
{
    [ApiController]
    [Route("values")]
    public class ValuesContoller : ControllerBase
    {
        private IdentityDataContext dbContext;
        private readonly UserManager<ApplicationDbIdentity> userManager;
        private readonly SignInManager<ApplicationDbIdentity> signInManager;
        public ValuesContoller(
        IdentityDataContext dbContext,
        UserManager<ApplicationDbIdentity> userManager,
        SignInManager<ApplicationDbIdentity> signInManager)
        {
            this.dbContext = dbContext;
            this.userManager = userManager;
            this.signInManager = signInManager; 
        }
        [AllowAnonymous]
        [HttpPost("getToken")]
        public async Task<ActionResult> GetToken([FromBody] LoginModelType loginModel)
        {
            var user = dbContext.Users.FirstOrDefault(x=>x.Email == loginModel.Email);
            if(user!=null)
            {
                var signInResult = await signInManager.CheckPasswordSignInAsync(user, loginModel.Password, false);
                if(signInResult.Succeeded)
                {
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var key = Encoding.ASCII.GetBytes("MY_BIG_SECRET_KEY_LKSHDJFLSDKJFW@#($)(#)34234");
                    var tokenDescriptor = new SecurityTokenDescriptor
                    {
                        Subject = new ClaimsIdentity(new Claim[]
                        {
                            new Claim(ClaimTypes.Name, loginModel.Email)
                        }),
                        Expires = DateTime.UtcNow.AddDays(1),
                        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                    };
                    var token = tokenHandler.CreateToken(tokenDescriptor);
                    var tokenString = tokenHandler.WriteToken(token);

                    return Ok(new {Token = tokenString});
                }
                else
                {
                    return Ok("Failed, try again");
                }
            }
            return Ok("failed, try again");
        }
        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] LoginModelType loginModel)
        {
            ApplicationDbIdentity applicationDbIdentity = new ApplicationDbIdentity()
            {
                Email = loginModel.Email,
                UserName = loginModel.Email,
                EmailConfirmed = false
            };
            var result = await userManager.CreateAsync(applicationDbIdentity, loginModel.Password);
            if (result.Succeeded)
            {
                return Ok(new { Result = "Register Success"});
            }
            else
            {
                StringBuilder stringBuilder = new StringBuilder();
                foreach(var error in result.Errors)
                {
                    stringBuilder.Append(error.Description);
                }
                return Ok(new { Result = $"Register Fail: {stringBuilder.ToString()}" });
            }
        }
    }
}