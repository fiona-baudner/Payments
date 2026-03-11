import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './TrustLead.css'

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
    <div className="trust-product-card">
      <div className="trust-product-image-container">
        <img src={product.image} alt={product.brand} className="trust-product-image" />
        <button className="trust-like-button">
          <HeartIcon />
          <span className="trust-like-count">{product.likes}</span>
        </button>
      </div>
      <div className="trust-product-details">
        <p className="trust-product-brand">{product.brand}</p>
        <p className="trust-product-size">{product.size}</p>
        <div className="trust-product-price-row">
          <span className="trust-product-price">{product.price}</span>
          {product.originalPrice && (
            <span className="trust-product-original-price">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}

function IntroSplashScreen({ isOpen, onClose, onContinue, onMaybeLater }) {
  if (!isOpen) return null

  return (
    <div className="trust-intro-splash">
      {/* Status Bar */}
      <div className="trust-intro-status-bar">
        <span className="trust-intro-time">09:41</span>
        <div className="trust-intro-status-icons">
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

      {/* Close Button */}
      <button className="trust-intro-close" onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6L18 18" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Content */}
      <div className="trust-intro-content">
        <div className="trust-intro-card-container">
          <img 
            src={imgBalanceCard} 
            alt="Depop Balance Card" 
            className="trust-intro-card-image"
          />
        </div>

        <div className="trust-intro-text-wrapper">
          <div className="trust-intro-text">
            <p className="trust-intro-label">NEW</p>
            <h1 className="trust-intro-title">Be first to shop with your balance</h1>
            <p className="trust-intro-desc">
              Use the money you make from your sales on Depop to buy what's next — before anyone else.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="trust-intro-footer">
        <button className="trust-intro-btn-primary" onClick={onContinue}>
          Unlock now
        </button>
        <button className="trust-intro-btn-tertiary" onClick={onMaybeLater}>
          Maybe later
        </button>
        <div className="trust-intro-indicator">
          <div className="trust-intro-indicator-bar" />
        </div>
      </div>
    </div>
  )
}

function VerifyIdentitySheet({ isOpen, onClose, onContinue, onLearnMore }) {
  if (!isOpen) return null

  return (
    <div className="trust-verify-sheet-wrapper">
      <div className="trust-verify-sheet-overlay" onClick={onClose} />
      <div className="trust-verify-sheet-container">
        <div className="trust-verify-sheet-grabber" />
        <button className="trust-verify-sheet-close" onClick={onClose}>
          <CloseIcon />
        </button>
        
        <div className="trust-verify-sheet-content">
          <div className="trust-verify-sheet-image">
            <img src="/icons/SSN_card.png" alt="SSN Verification" className="trust-verify-padlock" />
          </div>
          
          <div className="trust-verify-sheet-text">
            <h2 className="trust-verify-sheet-title">Verify your identity to unlock</h2>
            <p className="trust-verify-sheet-desc">
              To shop with your balance, you'll need to provide the last 4 digits of your SSN to confirm you're really you.
            </p>
          </div>
          
          <div className="trust-verify-info-box">
            <div className="trust-verify-info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <p className="trust-verify-info-text">
              This is a legal requirement to protect you from fraud and identity theft.
            </p>
          </div>
        </div>

        <div className="trust-verify-sheet-footer">
          <button className="trust-verify-sheet-btn-primary" onClick={onContinue}>
            Continue to verify
          </button>
          <button className="trust-verify-sheet-btn-tertiary" onClick={onLearnMore}>
            Learn more
          </button>
          <div className="trust-verify-sheet-indicator">
            <div className="trust-verify-sheet-indicator-bar" />
          </div>
        </div>
      </div>
    </div>
  )
}

function HelpCentreModal({ isOpen, onClose, onBack }) {
  if (!isOpen) return null

  return (
    <div className="trust-help-modal">
      {/* Header */}
      <div className="trust-help-header">
        <button className="trust-help-back" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="trust-help-header-title">Help Centre</span>
        <button className="trust-help-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="trust-help-content">
        <div className="trust-help-logo">
          <span className="trust-help-logo-depop">depop</span>
          <span className="trust-help-logo-text">Help Centre</span>
        </div>

        <div className="trust-help-search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#747474" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </div>

        <div className="trust-help-breadcrumb">
          <span>Depop Help Centre</span>
          <span className="trust-help-breadcrumb-arrow">›</span>
          <span>Payments</span>
          <span className="trust-help-breadcrumb-arrow">›</span>
          <span>Identity Verification</span>
        </div>

        <h1 className="trust-help-title">Why you may be asked for your SSN</h1>

        <p className="trust-help-intro">
          To use your Depop Balance for purchases, we need to verify your identity. This is a one-time check that helps keep your account and our community safe.
        </p>

        <div className="trust-help-faq">
          <h2 className="trust-help-faq-title">Why do I need to verify my identity?</h2>
          <p className="trust-help-faq-text">
            Identity verification is required by U.S. financial regulations. By confirming who you are, we can:
          </p>
          <ul className="trust-help-list">
            <li>Protect your account from unauthorized access</li>
            <li>Prevent fraud and keep the Depop community safe</li>
            <li>Comply with legal requirements for payment services</li>
          </ul>

          <h2 className="trust-help-faq-title">What information do I need to provide?</h2>
          <p className="trust-help-faq-text">
            We only ask for the last 4 digits of your Social Security Number. This is the minimum information needed to verify your identity — we don't need your full SSN.
          </p>

          <h2 className="trust-help-faq-title">Is my information safe?</h2>
          <p className="trust-help-faq-text">
            Absolutely. Your data is encrypted using AES-256, the same security standard used by banks. We never store your full SSN and your information is processed securely through our payment partner, Stripe.
          </p>

          <h2 className="trust-help-faq-title">What if I don't want to verify?</h2>
          <p className="trust-help-faq-text">
            Verification is optional, but required to unlock the ability to shop with your Depop Balance. You can still sell items and withdraw your earnings to your bank account without verifying.
          </p>

          <h2 className="trust-help-faq-title">I don't have a Social Security Number</h2>
          <p className="trust-help-faq-text">
            If you don't have an SSN, please contact our support team. We may be able to verify your identity using alternative documentation.
          </p>
        </div>

        <div className="trust-help-related">
          <h3 className="trust-help-related-title">Related articles</h3>
          <a href="#" className="trust-help-related-link">How Depop Balance works</a>
          <a href="#" className="trust-help-related-link">Shopping with your balance</a>
          <a href="#" className="trust-help-related-link">Keeping your account secure</a>
        </div>

        <div className="trust-help-footer-section">
          <h3 className="trust-help-footer-title">Didn't find what you were looking for?</h3>
          <button className="trust-help-contact-btn">Contact support</button>
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
      <div className="trust-sheet-wrapper">
        <div className="trust-sheet-overlay" onClick={onClose} />
        <div className="trust-sheet-container">
          <div className="trust-sheet-grabber" />
          <button className="trust-sheet-close" onClick={onClose}>
            <CloseIcon />
          </button>
          
          <div className="trust-sheet-success-content">
            <div className="trust-sheet-success-icon">
              <img src="/icons/confirm.png" alt="Verified" className="trust-confirm-image" />
            </div>
            <h2 className="trust-sheet-success-title">You're verified!</h2>
            <p className="trust-sheet-success-desc">Your balance should be ready to spend within an hour. We'll notify you when it's good to go.</p>
          </div>
          
          <div className="trust-sheet-footer">
            <button className="trust-sheet-btn-primary" onClick={handleDone}>Done</button>
          </div>
          
          <div className="trust-sheet-indicator">
            <div className="trust-sheet-indicator-bar" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="trust-sheet-wrapper">
      <div className="trust-sheet-overlay" onClick={onClose} />
      <div className="trust-sheet-container">
        <div className="trust-sheet-grabber" />
        <button className="trust-sheet-back" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {isVerifying && (
          <div className="trust-verifying-overlay">
            <div className="trust-verifying-logo">
              <img src="/icons/Dbug.jpg" alt="Depop" className="trust-verifying-image" />
            </div>
            <p className="trust-verifying-text">Verifying...</p>
          </div>
        )}
        
        <div className="trust-sheet-content">
          <h2 className="trust-sheet-title">Let's make sure it's you</h2>
          <p className="trust-sheet-subtitle">Please enter the last 4 digits of your Social Security Number.</p>
          
          <button 
            className={`trust-sheet-input-field ${isInputFocused ? 'focused' : ''}`}
            onClick={handleInputClick}
          >
            <LockIcon />
            <div className="trust-sheet-input-content">
              {isInputFocused ? (
                <>
                  <span className="trust-sheet-floating-label">Last 4 digits of your SSN</span>
                  <span className="trust-sheet-input-value">
                    XXX-XX-{inputValue}<span className="trust-cursor">|</span>
                  </span>
                </>
              ) : (
                <span className="trust-sheet-input-placeholder">Last 4 digits of your SSN</span>
              )}
            </div>
          </button>

          <p className="trust-sheet-encryption">Secured with AES-256 encryption. <button className="trust-sheet-encryption-link" onClick={onLearnMore}>Learn more</button></p>
        </div>

        <div className={`trust-sheet-bottom ${isInputFocused ? 'keyboard-open' : ''}`}>
          <button 
            className={`trust-sheet-btn-primary ${!hasValue ? 'disabled' : ''}`}
            onClick={handleVerify}
            disabled={!hasValue}
          >
            Verify securely
          </button>
          <p className="trust-sheet-legal">
            By continuing you agree to our payment partner's <span className="underline">Connect</span>, <span className="underline">Treasury</span> and <span className="underline">Service Agreements</span>
          </p>
        </div>

        {isInputFocused && (
          <div className="trust-sheet-keypad">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'delete'].map((key) => (
              <button
                key={key}
                className={`trust-keypad-key ${key === '' ? 'empty' : ''} ${key === 'delete' ? 'delete' : ''}`}
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

        <div className="trust-sheet-indicator">
          <div className="trust-sheet-indicator-bar" />
        </div>
      </div>
    </div>
  )
}

function HomeScreen() {
  return (
    <div className="trust-home-screen">
      {/* Status Bar */}
      <div className="trust-status-bar">
        <span className="trust-status-time">09:41</span>
        <div className="trust-status-icons">
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
      <div className="trust-search-bar">
        <div className="trust-search-input">
          <SearchIcon />
          <span className="trust-search-placeholder">Search for anything</span>
        </div>
        <button className="trust-header-icon">
          <HeartIcon />
        </button>
        <button className="trust-header-icon trust-bag-icon">
          <BagIcon />
          <span className="trust-bag-badge">9+</span>
        </button>
      </div>

      {/* Section Header */}
      <div className="trust-section-header">
        <h2 className="trust-section-title">Suggested for you</h2>
        <button className="trust-see-all-btn">See all</button>
      </div>

      {/* Product Grid */}
      <div className="trust-product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bottom Tab Bar */}
      <div className="trust-tab-bar">
        <div className="trust-tab-item active">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9.5L12 3L21 9.5V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.5Z"/>
          </svg>
          <span>Home</span>
        </div>
        <div className="trust-tab-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <span>Discover</span>
        </div>
        <div className="trust-tab-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          <span>Sell</span>
        </div>
        <div className="trust-tab-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>Inbox</span>
        </div>
        <div className="trust-tab-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span>My Depop</span>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="trust-home-indicator-bar" />
    </div>
  )
}

function TrustLead() {
  const [showIntroSplash, setShowIntroSplash] = useState(false)
  const [showVerifySheet, setShowVerifySheet] = useState(false)
  const [showSSNSheet, setShowSSNSheet] = useState(false)
  const [showHelpCentre, setShowHelpCentre] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroSplash(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleUnlock = () => {
    setShowVerifySheet(true)
  }

  const handleMaybeLater = () => {
    setShowIntroSplash(false)
  }

  const handleContinueToVerify = () => {
    setShowVerifySheet(false)
    setShowSSNSheet(true)
  }

  const handleLearnMore = () => {
    setShowHelpCentre(true)
  }

  const handleCloseHelpCentre = () => {
    setShowHelpCentre(false)
  }

  const handleBackFromHelpCentre = () => {
    setShowHelpCentre(false)
  }

  const handleVerified = () => {
    setIsVerified(true)
    setShowSSNSheet(false)
    setShowIntroSplash(false)
  }

  const handleCloseVerifySheet = () => {
    setShowVerifySheet(false)
  }

  const handleBackFromSSN = () => {
    setShowSSNSheet(false)
    setShowVerifySheet(true)
  }

  return (
    <div className="trust-concept-page">
      <Link to="/balance-respend" className="trust-back-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>

      <div className="trust-mobile-frame">
        <div className="trust-mobile-notch" />
        <div className="trust-mobile-screen">
          <HomeScreen />
          
          <IntroSplashScreen 
            isOpen={showIntroSplash}
            onClose={() => setShowIntroSplash(false)}
            onContinue={handleUnlock}
            onMaybeLater={handleMaybeLater}
          />

          {showIntroSplash && (
            <VerifyIdentitySheet 
              isOpen={showVerifySheet}
              onClose={handleCloseVerifySheet}
              onContinue={handleContinueToVerify}
              onLearnMore={handleLearnMore}
            />
          )}

          {showIntroSplash && showVerifySheet && (
            <HelpCentreModal
              isOpen={showHelpCentre}
              onClose={handleCloseHelpCentre}
              onBack={handleBackFromHelpCentre}
            />
          )}
          
          <SSNVerificationModal 
            isOpen={showSSNSheet}
            onClose={() => {
              setShowSSNSheet(false)
              setShowIntroSplash(false)
            }}
            onVerified={handleVerified}
            onBack={handleBackFromSSN}
            onLearnMore={handleLearnMore}
          />

          {showSSNSheet && (
            <HelpCentreModal
              isOpen={showHelpCentre}
              onClose={handleCloseHelpCentre}
              onBack={handleBackFromHelpCentre}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TrustLead
