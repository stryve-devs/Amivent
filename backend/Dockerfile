# Use the .NET 8.0 SDK (Matches your likely project version)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# 1. Copy all .csproj files to their respective folders
# This allows Docker to cache the 'restore' layer
COPY ["Api/Api.csproj", "Api/"]
COPY ["Core/Core.csproj", "Core/"]
COPY ["Data/Data.csproj", "Data/"]
COPY ["Shared/Shared.csproj", "Shared/"]

# 2. Restore dependencies
RUN dotnet restore "Api/Api.csproj"

# 3. Copy the rest of the source code
COPY . .

# 4. Build and publish the API project
WORKDIR "/src/Api"
RUN dotnet publish "Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# 5. Final stage: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Api.dll"]