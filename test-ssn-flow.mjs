/**
 * Test script to verify the 3-step onboarding flow and SSN input visibility at step 3.
 * Run with: npx playwright test test-ssn-flow.mjs --project=chromium
 * Or: node test-ssn-flow.mjs (after installing playwright)
 */
import { chromium } from 'playwright'

const BASE_URL = 'http://localhost:5177'

async function runTest() {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } })
  const page = await context.newPage()

  try {
    console.log('1. Navigating to page...')
    await page.goto(`${BASE_URL}/balance-respend/existing-seller-onboarding`, { waitUntil: 'networkidle' })
    
    console.log('2. Looking for "Onboarding screen test" section and "3 Step" option...')
    const threeStepBtn = page.locator('text=Onboarding screen test').locator('..').locator('button:has-text("3 Step")')
    await threeStepBtn.waitFor({ state: 'visible', timeout: 5000 })
    await threeStepBtn.click()
    
    console.log('3. Waiting for home feed screen...')
    await page.waitForSelector('.product-grid, .mobile-screen', { timeout: 5000 })
    
    console.log('4. Waiting ~2 seconds for modal to appear...')
    await page.waitForTimeout(2500)
    
    console.log('5. Clicking "Unlock now" button to go to step 2...')
    const unlockBtn = page.locator('button:has-text("Unlock now")').first()
    await unlockBtn.waitFor({ state: 'visible', timeout: 5000 })
    await unlockBtn.click()
    
    console.log('6. Clicking "Continue to verify" to go to step 3...')
    const continueBtn = page.locator('button:has-text("Continue to verify")')
    await continueBtn.waitFor({ state: 'visible', timeout: 5000 })
    await continueBtn.click()
    
    console.log('7. Waiting for step 3...')
    await page.waitForTimeout(500)
    
    // Check for SSN input field
    const ssnInputField = page.locator('.threestep-input-field')
    const ssnPlaceholder = page.locator('text=Last 4 digits of your SSN')
    const lockIcon = page.locator('.threestep-input-field svg')
    
    const ssnFieldVisible = await ssnInputField.isVisible()
    const placeholderVisible = await ssnPlaceholder.isVisible()
    const lockVisible = await lockIcon.isVisible()
    
    console.log('\n--- SSN Input Field Visibility Report ---')
    console.log('SSN input field (box):', ssnFieldVisible ? 'VISIBLE' : 'NOT VISIBLE')
    console.log('"Last 4 digits of your SSN" text:', placeholderVisible ? 'VISIBLE' : 'NOT VISIBLE')
    console.log('Lock icon:', lockVisible ? 'VISIBLE' : 'NOT VISIBLE')
    
    // Take screenshot
    await page.screenshot({ path: 'step3-screenshot.png' })
    console.log('\nScreenshot saved to step3-screenshot.png')
    
    const allGood = ssnFieldVisible && (placeholderVisible || lockVisible)
    console.log('\n--- Result ---')
    console.log(allGood ? 'PASS: SSN input field is visible in step 3' : 'FAIL: SSN input field may not be fully visible')
    
    return allGood
  } catch (err) {
    console.error('Error:', err.message)
    await page.screenshot({ path: 'step3-error.png' })
    console.log('Error screenshot saved to step3-error.png')
    return false
  } finally {
    await browser.close()
  }
}

runTest().then(success => process.exit(success ? 0 : 1))
