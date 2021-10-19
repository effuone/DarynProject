FROM mcr.microsoft.com/dotnet/aspnet:5.0-focal AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
WORKDIR /src
COPY ["OnlinePortfolio.Api.csproj", "./"]
RUN dotnet restore "OnlinePortfolio.Api.csproj"
COPY . .
RUN dotnet publish "OnlinePortfolio.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "OnlinePortfolio.Api.dll"]
