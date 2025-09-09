# test_runner.ps1
# Скрипт для тестирования решения квадратных уравнений

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "    QUADRATIC EQUATION TESTS LAUNCH    " -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Тест 1: Два корня
Write-Host "Test 1: Two roots (x^2 - 5x + 6 = 0)" -ForegroundColor Yellow
Write-Host "Expected: x = 3 and x = 2" -ForegroundColor Gray
node main.js 1 -5 6
Write-Host ""

# Тест 2: Один корень
Write-Host "Test 2: One root (x^2 - 4x + 4 = 0)" -ForegroundColor Yellow
Write-Host "Expected: x = 2" -ForegroundColor Gray
node main.js 1 -4 4
Write-Host ""

# Тест 3: Комплексные корни
Write-Host "Test 3: Complex roots (x^2 + 2x + 5 = 0)" -ForegroundColor Yellow
Write-Host "Expected: complex roots" -ForegroundColor Gray
node main.js 1 2 5
Write-Host ""

# Тест 4: Линейное уравнение
Write-Host "Test 4: Linear equation (2x - 4 = 0)" -ForegroundColor Yellow
Write-Host "Expected: x = 2" -ForegroundColor Gray
node main.js 0 2 -4
Write-Host ""

# Тест 5: Нет решений
Write-Host "Test 5: No solutions (0x + 0x + 5 = 0)" -ForegroundColor Yellow
Write-Host "Expected: no solutions" -ForegroundColor Gray
node main.js 0 0 5
Write-Host ""

# Тест 6: Ошибка ввода
Write-Host "Test 6: Input Error (non-numeric arguments)" -ForegroundColor Yellow
Write-Host "Expected: error message" -ForegroundColor Gray
node main.js abc def ghi
Write-Host ""

Write-Host "=========================================" -ForegroundColor Green
Write-Host "           ALL TESTS COMPLETED            " -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green