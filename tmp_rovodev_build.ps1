# EAS Build Script
Write-Host "Starting EAS Build for Android..." -ForegroundColor Green
Write-Host ""
Write-Host "This will:"
Write-Host "1. Generate Android keystore (first time only)"
Write-Host "2. Build your APK on Expo's servers"
Write-Host "3. Provide a permanent download link"
Write-Host ""

# Run the build
npx eas-cli build --platform android --profile preview

Write-Host ""
Write-Host "Build submitted! Check the link above or visit:" -ForegroundColor Green
Write-Host "https://expo.dev/accounts/tarak6984/projects/new-shipment-mobile/builds" -ForegroundColor Cyan
