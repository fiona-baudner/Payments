import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './EverythingUpfront.css'

const imgBalanceCard = '/icons/card.png'
const imgProduct1 = '/icons/NB_cap.png'
const imgProduct2 = '/icons/NB_trainers.jpg'
const imgProduct3 = '/icons/Marni_bag.jpg'
const imgProduct4 = '/icons/Cap.jpg'

const products = [
  { id: 1, image: imgProduct1, brand: 'New Balance', size: 'Unisex', price: '$12.50', originalPrice: null, likes: 3 },
  { id: 2, image: imgProduct2, brand: 'New Balance', size: 'US8', price: '$25', originalPrice: '$30', likes: 3 },
  { id: 3, image: imgProduct3, brand: 'Marni', size: 'Unisex', price: '$45', originalPrice: null, likes: 3 },
  { id: 4, image: imgProduct4, brand: 'Aime Leon Dore', size: 'Unisex', price: '$89', originalPrice: null, likes: 3 },
]

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#747474" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#747474" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function ProductCard({ product }) {
  return (
    <div className="ssn-product-card">
      <div className="ssn-product-image-container">
        <img src={product.image} alt={product.brand} className="ssn-product-image" />
        <button className="ssn-like-button">
          <HeartIcon />
          <span className="ssn-like-count">{product.likes}</span>
        </button>
      </div>
      <div className="ssn-product-details">
        <p className="ssn-product-brand">{product.brand}</p>
        <p className="ssn-product-size">{product.size}</p>
        <div className="ssn-product-price-row">
          <span className="ssn-product-price">{product.price}</span>
          {product.originalPrice && (
            <span className="ssn-product-original-price">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}

function CombinedOnboardingSheet({ isOpen, onClose, onSkip, onVerified, onLearnMore }) {
  const [step, setStep] = useState(1)
  const [inputValue, setInputValue] = useState('')
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setStep(1)
      setInputValue('')
      setIsInputFocused(false)
      setIsVerifying(false)
      setShowSuccess(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleUnlock = () => {
    setStep(2)
  }

  const handleKeyPress = (key) => {
    if (key === 'delete') {
      setInputValue(prev => prev.slice(0, -1))
    } else if (inputValue.length < 4 && /^[0-9]$/.test(key)) {
      setInputValue(prev => prev + key)
    }
  }

  const handleInputClick = () => {
    setIsInputFocused(true)
  }

  const handleVerify = () => {
    if (inputValue.length === 4) {
      setIsVerifying(true)
      setTimeout(() => {
        setIsVerifying(false)
        setShowSuccess(true)
      }, 2000)
    }
  }

  const handleDone = () => {
    onVerified()
    onClose()
  }

  const hasValue = inputValue.length === 4

  // Success state
  if (showSuccess) {
    return (
      <div className="upfront-intro-wrapper">
        <div className="upfront-intro-overlay" onClick={onClose} />
        <div className="upfront-intro-sheet">
          <div className="upfront-intro-grabber" />
          <button className="upfront-intro-close" onClick={onClose}>
            <CloseIcon />
          </button>
          
          <div className="upfront-success-content">
            <div className="upfront-success-icon">
              <img src="/icons/confirm.png" alt="Verified" className="upfront-confirm-img" />
            </div>
            <h2 className="upfront-success-title">You're verified!</h2>
            <p className="upfront-success-desc">Your balance should be ready to spend within an hour. We'll notify you when it's good to go.</p>
          </div>
          
          <div className="upfront-intro-footer">
            <button className="upfront-intro-btn-primary" onClick={handleDone}>Done</button>
            <div className="upfront-intro-indicator">
              <div className="upfront-intro-indicator-bar" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="upfront-intro-wrapper">
      <div className="upfront-intro-overlay" onClick={onClose} />
      <div className={`upfront-intro-sheet ${step === 2 && isInputFocused ? 'keyboard-active' : ''}`}>
        <div className="upfront-intro-grabber" />
        <button className="upfront-intro-close" onClick={onClose}>
          <CloseIcon />
        </button>

        {isVerifying && (
          <div className="upfront-verifying-overlay">
            <div className="upfront-verifying-logo">
              <img src="/icons/Dbug.jpg" alt="Depop" className="upfront-verifying-image" />
            </div>
            <p className="upfront-verifying-text">Verifying...</p>
          </div>
        )}

        {/* Step 1: Intro */}
        {step === 1 && (
          <>
            <div className="upfront-intro-content">
              <div className="upfront-intro-card-container">
                <img 
                  src={imgBalanceCard} 
                  alt="Depop Balance Card" 
                  className="upfront-intro-card-image"
                />
              </div>

              <div className="upfront-intro-text">
                <p className="upfront-intro-label">Get early access</p>
                <h1 className="upfront-intro-title">Shop with your Depop Balance</h1>
                <p className="upfront-intro-desc">
                  Unlock today with a quick identity check, and use your earnings to fund new finds.
                </p>
              </div>
            </div>

            <div className="upfront-intro-footer">
              <button className="upfront-intro-btn-primary" onClick={handleUnlock}>
                Unlock now
              </button>
              <button className="upfront-intro-btn-tertiary" onClick={onSkip}>
                Skip for now
              </button>
              <div className="upfront-intro-indicator">
                <div className="upfront-intro-indicator-bar" />
              </div>
            </div>
          </>
        )}

        {/* Step 2: SSN Collection */}
        {step === 2 && (
          <>
            <div className={`upfront-ssn-step-content ${isInputFocused ? 'keyboard-active' : ''}`}>
              <div className={`upfront-ssn-step-image ${isInputFocused ? 'hidden' : ''}`}>
                <img src="/icons/SSN.png" alt="SSN Verification" className="upfront-padlock-img" />
              </div>

              <h2 className="upfront-ssn-step-title">Verify your identity to unlock</h2>
              <p className="upfront-ssn-step-subtitle">Please enter the last 4 digits of your Social Security Number.</p>
              
              <button 
                className={`upfront-ssn-step-input ${isInputFocused ? 'focused' : ''}`}
                onClick={handleInputClick}
              >
                <LockIcon />
                <div className="upfront-ssn-step-input-content">
                  {isInputFocused ? (
                    <>
                      <span className="upfront-ssn-step-floating-label">Last 4 digits of your SSN</span>
                      <span className="upfront-ssn-step-input-value">
                        XXX-XX-{inputValue}<span className="upfront-cursor">|</span>
                      </span>
                    </>
                  ) : (
                    <span className="upfront-ssn-step-placeholder">Last 4 digits of your SSN</span>
                  )}
                </div>
              </button>

              <p className="upfront-ssn-step-encryption">
                Your SSN is secured with AES-256 encryption, and never stored or shared. <button className="upfront-ssn-step-link" onClick={onLearnMore}>Learn more</button>
              </p>
            </div>

            <div className={`upfront-ssn-step-bottom ${isInputFocused ? 'keyboard-open' : ''}`}>
              <button 
                className={`upfront-intro-btn-primary ${!hasValue ? 'disabled' : ''}`}
                onClick={handleVerify}
                disabled={!hasValue}
              >
                Verify
              </button>
              <p className="upfront-ssn-step-legal">
                By continuing you agree to our payment partner's <span className="underline">Connect</span>, <span className="underline">Treasury</span> and <span className="underline">Service Agreements</span>
              </p>
            </div>

            {isInputFocused && (
              <div className="upfront-ssn-step-keypad">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'delete'].map((key) => (
                  <button
                    key={key}
                    className={`upfront-keypad-btn ${key === '' ? 'empty' : ''} ${key === 'delete' ? 'delete' : ''}`}
                    onClick={() => key && handleKeyPress(key)}
                    disabled={key === ''}
                  >
                    {key === 'delete' ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 9L12 15M12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : key}
                  </button>
                ))}
              </div>
            )}

            <div className="upfront-intro-indicator">
              <div className="upfront-intro-indicator-bar" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function UpfrontSSNModal({ isOpen, onClose, onVerified, onLearnMore }) {
  const [inputValue, setInputValue] = useState('')
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setInputValue('')
      setIsInputFocused(false)
      setIsVerifying(false)
      setShowSuccess(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleKeyPress = (key) => {
    if (key === 'delete') {
      setInputValue(prev => prev.slice(0, -1))
    } else if (inputValue.length < 4 && /^[0-9]$/.test(key)) {
      setInputValue(prev => prev + key)
    }
  }

  const handleInputClick = () => {
    setIsInputFocused(true)
  }

  const handleVerify = () => {
    if (inputValue.length === 4) {
      setIsVerifying(true)
      setTimeout(() => {
        setIsVerifying(false)
        setShowSuccess(true)
      }, 2000)
    }
  }

  const handleDone = () => {
    onVerified()
    onClose()
  }

  const hasValue = inputValue.length === 4

  if (showSuccess) {
    return (
      <div className="upfront-ssn-wrapper">
        <div className="upfront-ssn-overlay" onClick={onClose} />
        <div className="upfront-ssn-container">
          <div className="upfront-ssn-grabber" />
          <button className="upfront-ssn-close" onClick={onClose}>
            <CloseIcon />
          </button>
          
          <div className="upfront-ssn-success-content">
            <div className="upfront-ssn-success-icon">
              <img src="/icons/confirm.png" alt="Verified" className="upfront-confirm-image" />
            </div>
            <h2 className="upfront-ssn-success-title">You're verified!</h2>
            <p className="upfront-ssn-success-desc">Your balance should be ready to spend within an hour. We'll notify you when it's good to go.</p>
          </div>
          
          <div className="upfront-ssn-footer">
            <button className="upfront-ssn-btn-primary" onClick={handleDone}>Done</button>
          </div>
          
          <div className="upfront-ssn-indicator">
            <div className="upfront-ssn-indicator-bar" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="upfront-ssn-wrapper">
      <div className="upfront-ssn-overlay" onClick={onClose} />
      <div className={`upfront-ssn-container ${isInputFocused ? 'keyboard-active' : ''}`}>
        <div className="upfront-ssn-grabber" />
        <button className="upfront-ssn-close" onClick={onClose}>
          <CloseIcon />
        </button>

        {isVerifying && (
          <div className="upfront-verifying-overlay">
            <div className="upfront-verifying-logo">
              <img src="/icons/Dbug.jpg" alt="Depop" className="upfront-verifying-image" />
            </div>
            <p className="upfront-verifying-text">Verifying...</p>
          </div>
        )}
        
        <div className={`upfront-ssn-content ${isInputFocused ? 'keyboard-active' : ''}`}>
          <div className={`upfront-ssn-image ${isInputFocused ? 'hidden' : ''}`}>
            <img src="/icons/SSN.png" alt="SSN Verification" className="upfront-padlock" />
          </div>

          <h2 className="upfront-ssn-title">Verify your identity to unlock</h2>
          <p className="upfront-ssn-subtitle">Please enter the last 4 digits of your Social Security Number.</p>
          
          <button 
            className={`upfront-ssn-input-field ${isInputFocused ? 'focused' : ''}`}
            onClick={handleInputClick}
          >
            <LockIcon />
            <div className="upfront-ssn-input-content">
              {isInputFocused ? (
                <>
                  <span className="upfront-ssn-floating-label">Last 4 digits of your SSN</span>
                  <span className="upfront-ssn-input-value">
                    XXX-XX-{inputValue}<span className="upfront-cursor">|</span>
                  </span>
                </>
              ) : (
                <span className="upfront-ssn-input-placeholder">Last 4 digits of your SSN</span>
              )}
            </div>
          </button>

          <p className="upfront-ssn-encryption">
            Your SSN is secured with AES-256 encryption, and never stored or shared. <button className="upfront-ssn-encryption-link" onClick={onLearnMore}>Learn more</button>
          </p>
        </div>

        <div className={`upfront-ssn-bottom ${isInputFocused ? 'keyboard-open' : ''}`}>
          <button 
            className={`upfront-ssn-btn-primary ${!hasValue ? 'disabled' : ''}`}
            onClick={handleVerify}
            disabled={!hasValue}
          >
            Verify
          </button>
          <p className="upfront-ssn-legal">
            By continuing you agree to our payment partner's <span className="underline">Connect</span>, <span className="underline">Treasury</span> and <span className="underline">Service Agreements</span>
          </p>
        </div>

        {isInputFocused && (
          <div className="upfront-ssn-keypad">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'delete'].map((key) => (
              <button
                key={key}
                className={`upfront-keypad-key ${key === '' ? 'empty' : ''} ${key === 'delete' ? 'delete' : ''}`}
                onClick={() => key && handleKeyPress(key)}
                disabled={key === ''}
              >
                {key === 'delete' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 9L12 15M12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : key}
              </button>
            ))}
          </div>
        )}

        <div className="upfront-ssn-indicator">
          <div className="upfront-ssn-indicator-bar" />
        </div>
      </div>
    </div>
  )
}

function HelpCentreModal({ isOpen, onClose, onBack }) {
  if (!isOpen) return null

  return (
    <div className="ssn-help-modal">
      {/* Header */}
      <div className="ssn-help-header">
        <button className="ssn-help-back" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="ssn-help-header-title">Help Centre</span>
        <button className="ssn-help-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="ssn-help-content">
        <div className="ssn-help-logo">
          <span className="ssn-help-logo-depop">depop</span>
          <span className="ssn-help-logo-text">Help Centre</span>
        </div>

        <div className="ssn-help-search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#747474" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </div>

        <div className="ssn-help-breadcrumb">
          <span>Depop Help Centre</span>
          <span className="ssn-help-breadcrumb-arrow">›</span>
          <span>Payments</span>
          <span className="ssn-help-breadcrumb-arrow">›</span>
          <span>Identity Verification</span>
        </div>

        <h1 className="ssn-help-title">Why you may be asked for your SSN</h1>

        <p className="ssn-help-intro">
          To use your Depop Balance for purchases, we need to verify your identity. This is a one-time check that helps keep your account and our community safe.
        </p>

        <div className="ssn-help-faq">
          <h2 className="ssn-help-faq-title">Why do I need to verify my identity?</h2>
          <p className="ssn-help-faq-text">
            Identity verification is required by U.S. financial regulations. By confirming who you are, we can:
          </p>
          <ul className="ssn-help-list">
            <li>Protect your account from unauthorized access</li>
            <li>Prevent fraud and keep the Depop community safe</li>
            <li>Comply with legal requirements for payment services</li>
          </ul>

          <h2 className="ssn-help-faq-title">What information do I need to provide?</h2>
          <p className="ssn-help-faq-text">
            We only ask for the last 4 digits of your Social Security Number. This is the minimum information needed to verify your identity — we don't need your full SSN.
          </p>

          <h2 className="ssn-help-faq-title">Is my information safe?</h2>
          <p className="ssn-help-faq-text">
            Absolutely. Your data is encrypted using AES-256, the same security standard used by banks. We never store your full SSN and your information is processed securely through our payment partner, Stripe.
          </p>

          <h2 className="ssn-help-faq-title">What if I don't want to verify?</h2>
          <p className="ssn-help-faq-text">
            Verification is optional, but required to unlock the ability to shop with your Depop Balance. You can still sell items and withdraw your earnings to your bank account without verifying.
          </p>

          <h2 className="ssn-help-faq-title">I don't have a Social Security Number</h2>
          <p className="ssn-help-faq-text">
            If you don't have an SSN, please contact our support team. We may be able to verify your identity using alternative documentation.
          </p>
        </div>

        <div className="ssn-help-related">
          <h3 className="ssn-help-related-title">Related articles</h3>
          <a href="#" className="ssn-help-related-link">How Depop Balance works</a>
          <a href="#" className="ssn-help-related-link">Shopping with your balance</a>
          <a href="#" className="ssn-help-related-link">Keeping your account secure</a>
        </div>

        <div className="ssn-help-footer-section">
          <h3 className="ssn-help-footer-title">Didn't find what you were looking for?</h3>
          <button className="ssn-help-contact-btn">Contact support</button>
        </div>
      </div>
    </div>
  )
}

function SSNVerificationModal({ isOpen, onClose, onVerified, onBack, onLearnMore }) {
  const [inputValue, setInputValue] = useState('')
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setInputValue('')
      setIsInputFocused(false)
      setIsVerifying(false)
      setShowSuccess(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleKeyPress = (key) => {
    if (key === 'delete') {
      setInputValue(prev => prev.slice(0, -1))
    } else if (inputValue.length < 4 && /^[0-9]$/.test(key)) {
      setInputValue(prev => prev + key)
    }
  }

  const handleInputClick = () => {
    setIsInputFocused(true)
  }

  const handleVerify = () => {
    if (inputValue.length === 4) {
      setIsVerifying(true)
      setTimeout(() => {
        setIsVerifying(false)
        setShowSuccess(true)
      }, 2000)
    }
  }

  const handleDone = () => {
    onVerified()
    onClose()
  }

  const hasValue = inputValue.length === 4

  if (showSuccess) {
    return (
      <div className="ssn-sheet-wrapper">
        <div className="ssn-sheet-overlay" onClick={onClose} />
        <div className="ssn-sheet-container">
          <div className="ssn-sheet-grabber" />
          <button className="ssn-sheet-close" onClick={onClose}>
            <CloseIcon />
          </button>
          
          <div className="ssn-sheet-success-content">
            <div className="ssn-sheet-success-icon">
              <img src="/icons/confirm.png" alt="Verified" className="ssn-confirm-image" />
            </div>
            <h2 className="ssn-sheet-success-title">You're verified!</h2>
            <p className="ssn-sheet-success-desc">Your balance should be ready to spend within an hour. We'll notify you when it's good to go.</p>
          </div>
          
          <div className="ssn-sheet-footer">
            <button className="ssn-sheet-btn-primary" onClick={handleDone}>Done</button>
          </div>
          
          <div className="ssn-sheet-indicator">
            <div className="ssn-sheet-indicator-bar" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="ssn-sheet-wrapper">
      <div className="ssn-sheet-overlay" onClick={onClose} />
      <div className="ssn-sheet-container">
        <div className="ssn-sheet-grabber" />
        <button className="ssn-sheet-back" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {isVerifying && (
          <div className="ssn-verifying-overlay">
            <div className="ssn-verifying-logo">
              <img src="/icons/Dbug.jpg" alt="Depop" className="ssn-verifying-image" />
            </div>
            <p className="ssn-verifying-text">Verifying...</p>
          </div>
        )}
        
        <div className="ssn-sheet-content">
          <h2 className="ssn-sheet-title">Let's make sure it's you</h2>
          <p className="ssn-sheet-subtitle">Please enter the last 4 digits of your Social Security Number.</p>
          
          <button 
            className={`ssn-sheet-input-field ${isInputFocused ? 'focused' : ''}`}
            onClick={handleInputClick}
          >
            <LockIcon />
            <div className="ssn-sheet-input-content">
              {isInputFocused ? (
                <>
                  <span className="ssn-sheet-floating-label">Last 4 digits of your SSN</span>
                  <span className="ssn-sheet-input-value">
                    XXX-XX-{inputValue}<span className="ssn-cursor">|</span>
                  </span>
                </>
              ) : (
                <span className="ssn-sheet-input-placeholder">Last 4 digits of your SSN</span>
              )}
            </div>
          </button>

          <p className="ssn-sheet-encryption">Secured with AES-256 encryption. <button className="ssn-sheet-encryption-link" onClick={onLearnMore}>Learn more</button></p>
        </div>

        <div className={`ssn-sheet-bottom ${isInputFocused ? 'keyboard-open' : ''}`}>
          <button 
            className={`ssn-sheet-btn-primary ${!hasValue ? 'disabled' : ''}`}
            onClick={handleVerify}
            disabled={!hasValue}
          >
            Verify
          </button>
          <p className="ssn-sheet-legal">
            By continuing you agree to our payment partner's <span className="underline">Connect</span>, <span className="underline">Treasury</span> and <span className="underline">Service Agreements</span>
          </p>
        </div>

        {isInputFocused && (
          <div className="ssn-sheet-keypad">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'delete'].map((key) => (
              <button
                key={key}
                className={`ssn-keypad-key ${key === '' ? 'empty' : ''} ${key === 'delete' ? 'delete' : ''}`}
                onClick={() => key && handleKeyPress(key)}
                disabled={key === ''}
              >
                {key === 'delete' ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 9L12 15M12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : key}
              </button>
            ))}
          </div>
        )}

        <div className="ssn-sheet-indicator">
          <div className="ssn-sheet-indicator-bar" />
        </div>
      </div>
    </div>
  )
}

function HomeScreen() {
  return (
    <div className="ssn-home-screen">
      {/* Status Bar */}
      <div className="ssn-status-bar">
        <span className="ssn-status-time">09:41</span>
        <div className="ssn-status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 2.5C10.5 1.67 11.17 1 12 1H15C15.83 1 16.5 1.67 16.5 2.5V8.5C16.5 9.33 15.83 10 15 10H12C11.17 10 10.5 9.33 10.5 8.5V2.5Z" stroke="#262626"/>
            <rect x="11" y="2" width="5" height="7" rx="1" fill="#262626"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="#262626">
            <path d="M7.5 2.5C9.5 2.5 11.3 3.3 12.6 4.6L14 3.2C12.3 1.5 10 0.5 7.5 0.5C5 0.5 2.7 1.5 1 3.2L2.4 4.6C3.7 3.3 5.5 2.5 7.5 2.5Z"/>
            <path d="M4.2 6.4L7.5 9.7L10.8 6.4C9.9 5.5 8.7 5 7.5 5C6.3 5 5.1 5.5 4.2 6.4Z"/>
          </svg>
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
            <rect x="0.5" y="0.5" width="3" height="10" rx="1" fill="#262626"/>
            <rect x="5" y="3" width="3" height="7.5" rx="1" fill="#262626"/>
            <rect x="9.5" y="5" width="3" height="5.5" rx="1" fill="#262626"/>
            <rect x="14" y="7" width="3" height="3.5" rx="1" fill="#262626"/>
          </svg>
        </div>
      </div>

      {/* Search Bar */}
      <div className="ssn-search-bar">
        <div className="ssn-search-input">
          <SearchIcon />
          <span className="ssn-search-placeholder">Search for anything</span>
        </div>
        <button className="ssn-header-icon">
          <HeartIcon />
        </button>
        <button className="ssn-header-icon ssn-bag-icon">
          <BagIcon />
          <span className="ssn-bag-badge">9+</span>
        </button>
      </div>

      {/* Section Header */}
      <div className="ssn-section-header">
        <h2 className="ssn-section-title">Suggested for you</h2>
        <button className="ssn-see-all-btn">See all</button>
      </div>

      {/* Product Grid */}
      <div className="ssn-product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bottom Tab Bar */}
      <div className="ssn-tab-bar">
        <div className="ssn-tab-item active">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9.5L12 3L21 9.5V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.5Z"/>
          </svg>
          <span>Home</span>
        </div>
        <div className="ssn-tab-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <span>Discover</span>
        </div>
        <div className="ssn-tab-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          <span>Sell</span>
        </div>
        <div className="ssn-tab-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>Inbox</span>
        </div>
        <div className="ssn-tab-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span>My Depop</span>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="ssn-home-indicator-bar" />
    </div>
  )
}

function EverythingUpfront() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [showHelpCentre, setShowHelpCentre] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnboarding(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleSkip = () => {
    setShowOnboarding(false)
  }

  const handleLearnMore = () => {
    setShowHelpCentre(true)
  }

  const handleCloseHelpCentre = () => {
    setShowHelpCentre(false)
  }

  const handleVerified = () => {
    setIsVerified(true)
    setShowOnboarding(false)
  }

  return (
    <div className="ssn-concept-page">
      <Link to="/balance-respend" className="ssn-back-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>

      <div className="ssn-mobile-frame">
        <div className="ssn-mobile-notch" />
        <div className="ssn-mobile-screen">
          <HomeScreen />
          
          <CombinedOnboardingSheet 
            isOpen={showOnboarding}
            onClose={() => setShowOnboarding(false)}
            onSkip={handleSkip}
            onVerified={handleVerified}
            onLearnMore={handleLearnMore}
          />

          {showOnboarding && (
            <HelpCentreModal
              isOpen={showHelpCentre}
              onClose={handleCloseHelpCentre}
              onBack={handleCloseHelpCentre}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default EverythingUpfront
