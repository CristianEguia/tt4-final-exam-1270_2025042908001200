# Backend Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["BookLibraryApi.csproj", "./"]
RUN dotnet restore "./BookLibraryApi.csproj"
COPY . .
RUN dotnet build "BookLibraryApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BookLibraryApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BookLibraryApi.dll"]
