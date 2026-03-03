import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ExistingSellerOnboarding.css'

const imgAspectRatio = "/icons/NB_cap.png"
const imgAspectRatio1 = "/icons/NB_trainers.jpg"
const imgAspectRatio3 = "/icons/Marni_bag.jpg"
const imgAspectRatio4 = "/icons/Cap.jpg"
const imgBalanceCard = "/icons/card.png"
const imgDepopLogo = "/icons/Logo.png"
const imgSuccessIcon = "/icons/confirm.png"
const imgPendingIcon = "/icons/pending.png"
const imgBalanceCardRed = "/icons/card_view.svg"
const imgVerificationIcon = "/icons/2FA.png"
const imgBagProduct = "/icons/NB_cap.png"
const imgSellerAvatar = "/icons/Dbug-gif 1.jpg"
const imgDepopBalance = "/icons/Depop_Balance.jpg"
const imgApplePay = "/icons/Apple_Pay.jpg"
const imgAmex = "/icons/Amex.png"
const imgKlarna = "/icons/Klarna.jpg"
const imgPaymentCard = "/icons/Payment_card.jpg"

const products = [
  { id: 1, image: imgAspectRatio, brand: 'Brand', size: 'UK 6', price: '£25', originalPrice: '£25', likes: 3 },
  { id: 2, image: imgAspectRatio1, brand: 'Brand', size: 'UK 6', price: '£25', originalPrice: '£25', likes: 3 },
  { id: 3, image: imgAspectRatio3, brand: 'Brand', size: 'UK 6', price: '£25', originalPrice: '£25', likes: 3 },
  { id: 4, image: imgAspectRatio1, brand: 'Brand', size: 'UK 6', price: '£25', originalPrice: '£25', likes: 3 },
  { id: 5, image: imgAspectRatio4, brand: 'Brand', size: 'UK 6', price: '£25', originalPrice: '£25', likes: 3 },
  { id: 6, image: imgAspectRatio1, brand: 'Brand', size: 'UK 6', price: '£25', originalPrice: '£25', likes: 3 },
]

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.brand} className="product-image" />
        <button className="like-button">
          <HeartIcon />
          <span className="like-count">{product.likes}</span>
        </button>
      </div>
      <div className="product-details">
        <p className="product-brand">{product.brand}</p>
        <p className="product-size">{product.size}</p>
        <div className="product-price-row">
          <span className="product-price">{product.price}</span>
          <span className="product-original-price">{product.originalPrice}</span>
        </div>
      </div>
    </div>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function BackIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M17.5 21L10.5 14L17.5 7" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

function BalanceRespendModal({ isOpen, onClose, onUnlock, onNotNow }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Progress bars */}
        <div className="story-progress">
          <div className="story-bar">
            <div className="story-bar-fill" style={{ width: '30%' }} />
          </div>
          <div className="story-bar" />
          <div className="story-bar" />
        </div>

        {/* Close button */}
        <button className="modal-close" onClick={onClose}>
          <CloseIcon />
        </button>

        {/* Card image */}
        <div className="balance-card-container">
          <img src={imgBalanceCard} alt="Depop Balance Card" className="balance-card-image" />
        </div>

        {/* Content */}
        <div className="modal-text-content">
          <p className="early-access-label">Early access</p>
          <h2 className="modal-headline">Be one of the first to shop with Depop Balance</h2>
          <p className="modal-description">
            You can now shop using your Depop Balance. Complete verification today to unlock early access.
          </p>
        </div>

        {/* Buttons */}
        <div className="modal-buttons">
          <button className="btn-primary" onClick={onUnlock}>Unlock now</button>
          <button className="btn-tertiary" onClick={onNotNow}>Not now</button>
        </div>

        {/* Home indicator */}
        <div className="modal-home-indicator">
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  )
}

function SuccessOnboardingModal({ isOpen, onClose, onContinue, onNotNow }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [dragStart, setDragStart] = useState(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef(null)
  
  const slides = [
    {
      image: imgBalanceCard,
      label: 'Get early access',
      title: 'Shop with your Depop Balance',
      description: 'Be one of the first to pay with your earnings on Depop.'
    },
    {
      image: '/icons/Shopping.png',
      label: 'Get early access',
      title: 'Turn sales into new finds',
      description: "Sell what you're done with, and use your balance to buy what's next."
    },
    {
      image: '/icons/SSN.png',
      label: 'Get early access',
      title: 'One more step to get started',
      description: "To keep your payments safe, we'll ask for a quick identity check — including the last 4 digits of your SSN."
    }
  ]

  const handleDragStart = (clientX) => {
    setDragStart(clientX)
    setIsDragging(true)
  }

  const handleDragMove = (clientX) => {
    if (dragStart === null) return
    const diff = clientX - dragStart
    setDragOffset(diff)
  }

  const handleDragEnd = () => {
    if (dragStart === null) return
    
    const threshold = 50
    if (dragOffset < -threshold && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else if (dragOffset > threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
    
    setDragStart(null)
    setDragOffset(0)
    setIsDragging(false)
  }

  const onTouchStart = (e) => handleDragStart(e.touches[0].clientX)
  const onTouchMove = (e) => handleDragMove(e.touches[0].clientX)
  const onTouchEnd = () => handleDragEnd()

  const onMouseDown = (e) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }
  const onMouseMove = (e) => {
    if (isDragging) handleDragMove(e.clientX)
  }
  const onMouseUp = () => handleDragEnd()
  const onMouseLeave = () => {
    if (isDragging) handleDragEnd()
  }

  useEffect(() => {
    if (!isOpen) {
      setCurrentSlide(0)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleClose = () => {
    setCurrentSlide(0)
    onClose()
  }

  const getTransform = () => {
    const baseOffset = currentSlide * 100
    const carouselWidth = carouselRef.current?.offsetWidth || 375
    const dragPercent = (dragOffset / carouselWidth) * 100
    return `translateX(-${baseOffset - dragPercent}%)`
  }

  return (
    <div className="onboarding-modal-wrapper">
      <div className="onboarding-modal-overlay" onClick={handleClose} />
      <div className="onboarding-modal-container">
        <div className="onboarding-modal-grabber" />
        
        <button className="onboarding-modal-close" onClick={handleClose}>
          <CloseIcon />
        </button>

        <div 
          className="onboarding-carousel"
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <div 
            className={`onboarding-slides ${isDragging ? 'dragging' : ''}`}
            style={{ transform: getTransform() }}
          >
            {slides.map((slide, index) => (
              <div className="onboarding-slide" key={index}>
                <img 
                  src={slide.image} 
                  alt="" 
                  className={`onboarding-slide-image ${index === 0 ? 'card-bounce' : ''}`} 
                  draggable={false} 
                />
                <p className="onboarding-slide-label">{slide.label}</p>
                <h2 className="onboarding-slide-title">{slide.title}</h2>
                <p className="onboarding-slide-desc">{slide.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="onboarding-dots">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`onboarding-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <button className="onboarding-btn-primary" onClick={onContinue}>
          Unlock now
        </button>
        <button className="onboarding-btn-tertiary" onClick={onNotNow}>Not now</button>

        <div className="onboarding-indicator">
          <div className="onboarding-indicator-bar" />
        </div>
      </div>
    </div>
  )
}

function BalanceOnboardingScrollModal({ isOpen, onClose, onContinue, onNotNow }) {
  const bullets = [
    {
      icon: '/icons/Bag.png',
      title: 'Shop instantly',
      description: 'Use your balance directly at checkout'
    },
    {
      icon: '/icons/Clock.png',
      title: 'Limited time',
      description: 'Exclusive early access for select sellers'
    },
    {
      icon: '/icons/ID.png',
      title: 'Quick & secure',
      description: 'Just your last 4 digits of SSN'
    }
  ]

  if (!isOpen) return null

  const handleClose = () => {
    onClose()
  }

  return (
    <div className="scroll-modal-wrapper">
      <div className="scroll-modal-overlay" onClick={handleClose} />
      <div className="scroll-modal-container">
        <div className="scroll-modal-grabber" />
        
        <button className="scroll-modal-close" onClick={handleClose}>
          <CloseIcon />
        </button>

        <div className="scroll-modal-content">
          {/* Hero Section */}
          <div className="scroll-hero">
            <img src={imgBalanceCard} alt="Depop Balance Card" className="scroll-hero-image" />
            <p className="scroll-hero-label">Early access</p>
            <h2 className="scroll-hero-title">Be one of the first to shop with Depop Balance</h2>
            <p className="scroll-hero-desc">
              You can now shop using your Depop Balance. Complete verification today to unlock early access.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="scroll-bullets">
            {bullets.map((bullet, index) => (
              <div className="scroll-bullet" key={index}>
                <div className="scroll-bullet-icon-wrapper">
                  <img src={bullet.icon} alt="" className="scroll-bullet-icon" />
                </div>
                <div className="scroll-bullet-text">
                  <p className="scroll-bullet-title">{bullet.title}</p>
                  <p className="scroll-bullet-desc">{bullet.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-modal-footer">
          <button className="scroll-modal-btn-primary" onClick={onContinue}>Get started</button>
          <button className="scroll-modal-btn-tertiary" onClick={onNotNow}>Not now</button>
        </div>

        <div className="scroll-modal-indicator">
          <div className="scroll-modal-indicator-bar" />
        </div>
      </div>
    </div>
  )
}

function BalanceOnboardingModal({ isOpen, onClose, onContinue, onNotNow }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [dragStart, setDragStart] = useState(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef(null)
  
  const slides = [
    {
      image: imgBalanceCard,
      label: 'Early access',
      title: 'Be one of the first to shop with Depop Balance',
      description: 'You can now shop using your Depop Balance. Complete verification today to unlock early access.'
    },
    {
      image: '/icons/Shopping.png',
      label: 'How it works',
      title: 'Turn earnings into your new favourite pieces',
      description: 'No more waiting for withdrawals. Use your balance directly at checkout to buy items you love.'
    },
    {
      image: '/icons/SSN.png',
      label: 'Quick verification',
      title: 'Verify your identity to get started',
      description: "Just enter the last 4 digits of your SSN. We do this to confirm you're really you, and to protect you from fraud and identity theft."
    }
  ]

  const handleDragStart = (clientX) => {
    setDragStart(clientX)
    setIsDragging(true)
  }

  const handleDragMove = (clientX) => {
    if (dragStart === null) return
    const diff = clientX - dragStart
    setDragOffset(diff)
  }

  const handleDragEnd = () => {
    if (dragStart === null) return
    
    const threshold = 50
    if (dragOffset < -threshold && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else if (dragOffset > threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
    
    setDragStart(null)
    setDragOffset(0)
    setIsDragging(false)
  }

  const onTouchStart = (e) => handleDragStart(e.touches[0].clientX)
  const onTouchMove = (e) => handleDragMove(e.touches[0].clientX)
  const onTouchEnd = () => handleDragEnd()

  const onMouseDown = (e) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }
  const onMouseMove = (e) => {
    if (isDragging) handleDragMove(e.clientX)
  }
  const onMouseUp = () => handleDragEnd()
  const onMouseLeave = () => {
    if (isDragging) handleDragEnd()
  }

  if (!isOpen) return null

  const handleContinue = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onContinue()
    }
  }

  const handleClose = () => {
    setCurrentSlide(0)
    onClose()
  }

  const getTransform = () => {
    const baseOffset = currentSlide * 100
    const carouselWidth = carouselRef.current?.offsetWidth || 375
    const dragPercent = (dragOffset / carouselWidth) * 100
    return `translateX(-${baseOffset - dragPercent}%)`
  }

  return (
    <div className="onboarding-modal-wrapper">
      <div className="onboarding-modal-overlay" onClick={handleClose} />
      <div className="onboarding-modal-container">
        <div className="onboarding-modal-grabber" />
        
        <button className="onboarding-modal-close" onClick={handleClose}>
          <CloseIcon />
        </button>

        <div 
          className="onboarding-carousel"
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <div 
            className={`onboarding-slides ${isDragging ? 'dragging' : ''}`}
            style={{ transform: getTransform() }}
          >
            {slides.map((slide, index) => (
              <div className="onboarding-slide" key={index}>
                <img 
                  src={slide.image} 
                  alt="" 
                  className={`onboarding-slide-image ${index === 0 ? 'card-bounce' : ''}`} 
                  draggable={false} 
                />
                <p className="onboarding-slide-label">{slide.label}</p>
                <h2 className="onboarding-slide-title">{slide.title}</h2>
                <p className="onboarding-slide-desc">{slide.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="onboarding-dots">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`onboarding-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <button className="onboarding-btn-primary" onClick={handleContinue}>
          {currentSlide < slides.length - 1 ? 'Continue' : 'Get started'}
        </button>
        <button className="onboarding-btn-tertiary" onClick={onNotNow}>Not now</button>

        <div className="onboarding-indicator">
          <div className="onboarding-indicator-bar" />
        </div>
      </div>
    </div>
  )
}

function LoadingOverlay() {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <img src={imgDepopLogo} alt="Depop" className="loading-logo spinning" />
        <p className="loading-text">Unlocking access to Depop Balance...</p>
      </div>
    </div>
  )
}

function SuccessScreen({ onDiscoverNow }) {
  return (
    <div className="success-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Close button */}
      <div className="success-nav">
        <button className="close-button" onClick={onDiscoverNow}>
          <CloseIcon />
        </button>
      </div>

      {/* Content */}
      <div className="success-content">
        <img src={imgSuccessIcon} alt="Success" className="success-icon" />
        <h1 className="success-title">You're verified</h1>
        <p className="success-description">
          You're ready to turn your earnings into new purchases.
        </p>
        <p className="success-description">
          Simply choose Depop Balance as your payment method at checkout.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="success-bottom">
        <button className="btn-primary" onClick={onDiscoverNow}>Discover now</button>
        <div className="home-indicator-container">
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  )
}

function PendingScreen({ onGotIt }) {
  return (
    <div className="pending-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Close button */}
      <div className="pending-nav">
        <button className="close-button" onClick={onGotIt}>
          <CloseIcon />
        </button>
      </div>

      {/* Content */}
      <div className="pending-content">
        <img src={imgPendingIcon} alt="Pending" className="pending-icon" />
        <h1 className="pending-title">Verification pending</h1>
        <p className="pending-description">
          It's taking a little longer than usual to verify your identity.
        </p>
        <p className="pending-description">
          We'll let you know once verification is completed.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="pending-bottom">
        <button className="btn-primary" onClick={onGotIt}>Got it</button>
        <div className="home-indicator-container">
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  )
}

function FailedScreen({ onTryAgain }) {
  return (
    <div className="failed-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Close button */}
      <div className="failed-nav">
        <button className="close-button" onClick={onTryAgain}>
          <CloseIcon />
        </button>
      </div>

      {/* Content */}
      <div className="failed-content">
        <div className="failed-icon">✕</div>
        <h1 className="failed-title">Verification failed</h1>
        <p className="failed-description">
          We couldn't verify your identity with the information provided.
        </p>
        <p className="failed-description">
          Please check your details and try again.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="failed-bottom">
        <button className="btn-primary" onClick={onTryAgain}>Try again</button>
        <div className="home-indicator-container">
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  )
}

function NoSignupResultScreen({ onContinue }) {
  return (
    <div className="no-signup-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Close button */}
      <div className="no-signup-nav">
        <button className="close-button" onClick={onContinue}>
          <CloseIcon />
        </button>
      </div>

      {/* Content */}
      <div className="no-signup-content">
        <div className="no-signup-icon">→</div>
        <h1 className="no-signup-title">No sign-up required</h1>
        <p className="no-signup-description">
          This flow demonstrates the experience without additional sign-up steps.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="no-signup-bottom">
        <button className="btn-primary" onClick={onContinue}>Continue</button>
        <div className="home-indicator-container">
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  )
}

const declineReasons = [
  "I don't understand what this is about",
  "I don't buy on Depop",
  "I don't want to verify my identity",
  "I have safety or privacy concerns",
  "I don't have a Social Security Number",
  "My reason isn't listed"
]

function FindOutMoreModal({ isOpen, onClose, onLearnMore }) {
  if (!isOpen) return null

  return (
    <div className="find-out-modal-wrapper">
      <div className="find-out-modal-overlay" onClick={onClose} />
      <div className="find-out-modal-container">
        <div className="find-out-modal-grabber" />
        
        <div className="find-out-modal-header">
          <button className="find-out-modal-close" onClick={onClose}>
            <CloseIcon />
          </button>
          <h2 className="find-out-modal-title">Find out more</h2>
        </div>

        <div className="find-out-modal-content">
          <p className="find-out-modal-text">
            We've created a help centre article that can tell you everything about how Depop Balance works and the benefits it offers to your users.
          </p>
          <p className="find-out-modal-text">
            Tap below to find out more.
          </p>
        </div>

        <div className="find-out-modal-footer">
          <button className="btn-primary" onClick={onLearnMore}>Learn more</button>
        </div>

        <div className="find-out-modal-indicator">
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  )
}

function HelpCentreModal({ isOpen, onClose, onBack }) {
  if (!isOpen) return null

  return (
    <div className="help-centre-screen">
      {/* Dark header background */}
      <div className="help-centre-header-bg" />
      
      {/* Status Bar */}
      <div className="status-bar help-centre-status">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <div className="help-centre-nav">
        <button className="help-centre-back" onClick={onBack}>
          <BackIcon />
        </button>
        <h1 className="help-centre-nav-title">Help Centre</h1>
        <button className="help-centre-close" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      {/* Content */}
      <div className="help-centre-content">
        {/* Header with logo and search */}
        <div className="help-centre-branding">
          <div className="help-centre-logo-row">
            <img src="/icons/Logo.png" alt="Depop" className="help-centre-logo" />
            <span className="help-centre-brand-text">Help Centre</span>
          </div>
          <div className="help-centre-search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#43484D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="help-centre-breadcrumb">
          <span>Depop Help Centre</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>Buying</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>Checking out</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>Depop Balance</span>
        </div>

        {/* Article Title */}
        <h2 className="help-centre-article-title">Making a purchase using your Depop Balance</h2>

        {/* Article Content */}
        <div className="help-centre-article">
          <h3>What is Depop Balance?</h3>
          <p>Depop Balance is a feature that allows you to use money from your sales to make purchases directly on Depop. Instead of waiting for bank transfers, you can shop instantly with your earnings.</p>
          
          <h3>How do I use it?</h3>
          <p>When you have funds in your Depop Balance, you'll see it as a payment option at checkout. Simply select "Depop Balance" and complete your purchase.</p>
          
          <h3>What can I do if I don't have a Social Security Number?</h3>
          <p>If you don't have a Social Security Number, please contact our support team for alternative verification options.</p>
        </div>

        {/* Divider */}
        <div className="help-centre-divider" />

        {/* Related Articles */}
        <div className="help-centre-related">
          <h3>Related articles</h3>
          <a href="#">My item didn't arrive</a>
          <a href="#">Buyer says the item isn't as described</a>
          <a href="#">How do I get a refund?</a>
        </div>

        {/* Divider */}
        <div className="help-centre-divider" />

        {/* Need more help */}
        <div className="help-centre-help">
          <h3>Didn't find what you were looking for?</h3>
          <button className="btn-primary">Get help with an order</button>
          <button className="btn-secondary">Contact us</button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="home-indicator-container">
        <div className="home-indicator" />
      </div>
    </div>
  )
}

function DeclineReasonsScreen({ onBack, onConfirm, onChangedMind }) {
  const [selectedReason, setSelectedReason] = useState(null)
  const [showFindOutMore, setShowFindOutMore] = useState(false)
  const [showHelpCentre, setShowHelpCentre] = useState(false)

  const handleReasonSelect = (index) => {
    setSelectedReason(index)
    if (index === 0) {
      setShowFindOutMore(true)
    }
  }

  const handleLearnMore = () => {
    setShowFindOutMore(false)
    setShowHelpCentre(true)
  }

  const handleCloseFindOutMore = () => {
    setShowFindOutMore(false)
  }

  const handleCloseHelpCentre = () => {
    setShowHelpCentre(false)
  }

  const handleBackFromHelpCentre = () => {
    setShowHelpCentre(false)
    setShowFindOutMore(true)
  }

  return (
    <div className="decline-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="decline-header">
        <button className="back-button" onClick={onBack}>
          <BackIcon />
        </button>
        <h1 className="decline-header-title">Tell us why</h1>
      </div>

      {/* Content */}
      <div className="decline-content">
        <p className="decline-description">If you like, tell us what led you to this decision.</p>
        
        <div className="decline-options">
          {declineReasons.map((reason, index) => (
            <button 
              key={index} 
              className={`decline-option ${selectedReason === index ? 'selected' : ''}`}
              onClick={() => handleReasonSelect(index)}
            >
              <div className={`radio-circle ${selectedReason === index ? 'selected' : ''}`}>
                {selectedReason === index && <div className="radio-dot" />}
              </div>
              <span className="decline-option-text">{reason}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="decline-bottom">
        <button 
          className={`btn-primary ${selectedReason === null ? 'btn-disabled' : ''}`}
          disabled={selectedReason === null}
          onClick={onConfirm}
        >
          Confirm
        </button>
        <button className="btn-tertiary" onClick={onChangedMind}>I've changed my mind</button>
        <div className="home-indicator-container">
          <div className="home-indicator" />
        </div>
      </div>

      {/* Find Out More Modal */}
      <FindOutMoreModal 
        isOpen={showFindOutMore}
        onClose={handleCloseFindOutMore}
        onLearnMore={handleLearnMore}
      />

      {/* Help Centre Modal */}
      <HelpCentreModal
        isOpen={showHelpCentre}
        onClose={handleCloseHelpCentre}
        onBack={handleBackFromHelpCentre}
      />
    </div>
  )
}

function DepopBalanceScreen({ onBack, onHomeClick, onMyDepopClick, pendingMode = false, successMode = false, declinedMode = false, onVerify, onDiscover, onUnlockBalance }) {
  const [showPromoBanner, setShowPromoBanner] = useState(true)

  return (
    <div className="balance-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="balance-header">
        <button className="back-button" onClick={onBack}>
          <BackIcon />
        </button>
        <h1 className="balance-header-title">Depop Balance</h1>
      </div>

      {/* Scrollable Content */}
      <div className="balance-content">
        {/* Balance Card */}
        <div className="balance-card-hero">
          <div className="balance-card-gradient">
            <p className="balance-card-label">Your <img src="/icons/Logo.png" alt="depop" className="balance-card-logo" /> balance</p>
            <p className="balance-card-amount">$30.00</p>
            <div className="balance-card-divider"></div>
            <p className="balance-card-pending">$0.00 pending</p>
            <img src="/icons/Logo.png" alt="" className="balance-card-watermark" />
          </div>
        </div>

        {/* Pending Banner - only show in pending mode */}
        {pendingMode && (
          <div className="balance-pending-banner">
            <img src="/icons/pending.png" alt="" className="pending-banner-icon" />
            <div className="pending-banner-text">
              <p className="pending-banner-title">Unlocking your balance</p>
              <p className="pending-banner-desc">We'll let you know when it's ready</p>
            </div>
          </div>
        )}

        {/* Promo Banner - only show in declined mode, not in pending mode */}
        {declinedMode && !pendingMode && showPromoBanner && (
          <div className="balance-promo-banner">
            <div className="promo-banner-content">
              <p className="promo-banner-title">Turn sales into new finds</p>
              <p className="promo-banner-desc">Tap below to verify your identity and unlock early access</p>
            </div>
            <img src="/icons/Shopping.png" alt="" className="promo-banner-image" />
            <button className="promo-banner-close" onClick={() => setShowPromoBanner(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="balance-buttons-section">
          {pendingMode ? (
            <>
              <button className="btn-secondary btn-disabled" disabled>Verify</button>
              <button className="btn-primary">Withdraw</button>
            </>
          ) : successMode ? (
            <>
              <button className="btn-secondary" onClick={onDiscover}>Discover</button>
              <button className="btn-primary">Withdraw</button>
            </>
          ) : declinedMode ? (
            <>
              <button className="btn-secondary" onClick={onUnlockBalance}>Verify & unlock</button>
              <button className="btn-primary">Withdraw</button>
            </>
          ) : (
            <button className="btn-primary">Withdraw</button>
          )}
        </div>

        {/* Divider */}
        <div className="balance-divider"></div>

        {/* Latest Transactions */}
        <div className="transactions-section">
          <div className="transactions-header">
            <h2 className="transactions-title">Latest transactions</h2>
            <button className="see-all-link">See all</button>
          </div>
          <p className="transactions-date">Monday, 10 November</p>
        <div className="transaction-row">
          <div className="transaction-image">
            <img src={imgAspectRatio} alt="Item" />
            <div className="transaction-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="transaction-details">
            <p className="transaction-type">Sold</p>
            <p className="transaction-description">Item description</p>
            <p className="transaction-status">Paid</p>
          </div>
          <p className="transaction-amount">+$30.00</p>
        </div>
        </div>

        {/* Legal Footer */}
        <div className="balance-legal-footer">
          <p>
            Depop partners with Stripe Payments Company for money transmission services and account services with funds held at Fifth Third Bank N.A., Member FDIC. View our <a href="#">Terms of Service</a>.
          </p>
          <p>
            Access your Stripe-issued regulatory payment receipts by viewing your <a href="#">Depop Wallet Account</a> and <a href="#">Outbound Payment Account</a> transaction list.
          </p>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="my-depop" onHomeClick={onHomeClick} onMyDepopClick={onMyDepopClick} />

      {/* Home Indicator */}
      <div className="home-indicator-container">
        <div className="home-indicator" />
      </div>
    </div>
  )
}

function BagScreen({ onClose, onCheckout }) {
  return (
    <div className="bag-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bag-header">
        <button className="close-button" onClick={onClose}>
          <CloseIcon />
        </button>
        <h1 className="bag-header-title">Bag</h1>
        <span className="bag-edit">Edit</span>
      </div>

      {/* Bag Content */}
      <div className="bag-content">
        {/* Seller Info */}
        <div className="bag-seller-row">
          <div className="bag-seller-info">
            <img src={imgSellerAvatar} alt="Seller" className="bag-seller-avatar" />
            <div className="bag-seller-details">
              <p className="bag-seller-name">blaisesbitsandbobs</p>
              <p className="bag-seller-active">
                <span className="active-dot">●</span> Active yesterday
              </p>
              <p className="bag-seller-items">1 item</p>
            </div>
          </div>
          <div className="bag-price-info">
            <p className="bag-total-price">$15.00</p>
            <p className="bag-shipping">+ free shipping</p>
          </div>
        </div>

        {/* Product Items */}
        <div className="bag-items">
          <div className="bag-item">
            <div className="bag-product-card">
              <img src={imgBagProduct} alt="Red cap" className="bag-product-image" />
              <div className="bag-product-overlay">
                <span className="bag-product-price">$15</span>
                <span className="bag-product-size">Unisex</span>
              </div>
            </div>
            <p className="bag-item-nudge">🛍️ In 1 person's bag</p>
          </div>
          <div className="bag-add-bundle">
            <span className="bag-add-icon">+</span>
            <p className="bag-add-text">Add more items to make a bundle</p>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="btn-primary" onClick={onCheckout}>Checkout</button>
      </div>

      {/* Separator */}
      <div className="bag-separator"></div>

      {/* Home Indicator */}
      <div className="home-indicator-container">
        <div className="home-indicator" />
      </div>
    </div>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 18L15 12L9 6" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckoutScreen({ onBack, onPay, pendingMode = false, declinedMode = false, onUnlockBalance, onComplete }) {
  const [selectedPayment, setSelectedPayment] = useState((pendingMode || declinedMode) ? 'apple-pay' : 'balance')
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false)

  useEffect(() => {
    if (!declinedMode && !pendingMode) {
      setSelectedPayment('balance')
    }
  }, [declinedMode, pendingMode])

  const handlePay = () => {
    if (selectedPayment === 'balance') {
      setShowOrderConfirmation(true)
    } else {
      onPay()
    }
  }

  return (
    <div className="checkout-screen">
      <OrderConfirmationModal 
        isOpen={showOrderConfirmation} 
        onComplete={onComplete}
      />
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="checkout-header">
        <button className="back-button" onClick={onBack}>
          <BackIcon />
        </button>
        <h1 className="checkout-header-title">Checkout</h1>
        <span className="checkout-edit">Edit</span>
      </div>

      {/* Content */}
      <div className="checkout-content">
        {/* Product */}
        <div className="checkout-product">
          <img src={imgBagProduct} alt="New Balance Hat" className="checkout-product-image" />
          <div className="checkout-product-info">
            <p className="checkout-product-name">New Balance Hat</p>
            <p className="checkout-product-details">Unisex | $15.00</p>
          </div>
        </div>

        {/* Total Row */}
        <div className="checkout-row">
          <div className="checkout-row-left">
            <p className="checkout-row-title">Total: $20.00</p>
            <p className="checkout-row-subtitle">Includes free shipping and $5.00 marketplace fee</p>
          </div>
          <ChevronRightIcon />
        </div>

        {/* Ships To Row */}
        <div className="checkout-row">
          <div className="checkout-row-left">
            <p className="checkout-row-title">Ships to</p>
            <p className="checkout-row-subtitle">168 Mott Street, New York, NY 10013</p>
          </div>
          <ChevronRightIcon />
        </div>

        {/* Module Divider */}
        <div className="checkout-divider-thick"></div>

        {/* Pay With Section */}
        <div className="checkout-section">
          <h2 className="checkout-section-title">Pay with</h2>
          
          {pendingMode ? (
            <>
              {/* Pending Banner */}
              <div className="checkout-pending-banner">
                <img src="/icons/pending.png" alt="" className="pending-banner-icon" />
                <div className="pending-banner-text">
                  <p className="pending-banner-title">Unlocking your balance</p>
                  <p className="pending-banner-desc">We'll let you know when it's ready</p>
                </div>
              </div>
              
              {/* Disabled Depop Balance Option */}
              <div className="checkout-payment-option disabled">
                <div className="radio-button disabled"></div>
                <div className="payment-icon depop">
                  <img src={imgDepopBalance} alt="Depop" />
                </div>
                <span className="payment-label disabled">Depop Balance</span>
                <span className="payment-amount disabled">$30.00</span>
              </div>
            </>
          ) : declinedMode ? (
            <>
              {/* Unlock Balance Banner */}
              <button className="checkout-unlock-banner" onClick={onUnlockBalance}>
                <img src="/icons/card.png" alt="" className="unlock-banner-icon" />
                <div className="unlock-banner-text">
                  <p className="unlock-banner-title">Unlock early access</p>
                  <p className="unlock-banner-desc">Verify to pay using your balance</p>
                </div>
                <ChevronRightIcon />
              </button>
              
              {/* Disabled Depop Balance Option */}
              <div className="checkout-payment-option disabled">
                <div className="radio-button disabled"></div>
                <div className="payment-icon depop">
                  <img src={imgDepopBalance} alt="Depop" />
                </div>
                <span className="payment-label disabled">Depop Balance</span>
                <span className="payment-amount disabled">$30.00</span>
              </div>
            </>
          ) : (
            <button 
              className={`checkout-payment-option ${selectedPayment === 'balance' ? 'selected' : ''}`}
              onClick={() => setSelectedPayment('balance')}
            >
              <div className={`radio-button ${selectedPayment === 'balance' ? 'selected' : ''}`}></div>
              <div className="payment-icon depop">
                <img src={imgDepopBalance} alt="Depop" />
              </div>
              <span className="payment-label">Depop Balance</span>
              <span className="payment-amount">$30.00</span>
            </button>
          )}
        </div>

        {/* Other Payment Types */}
        <div className="checkout-section">
          <h2 className="checkout-section-title">Other payment type</h2>
          
          <button 
            className={`checkout-payment-option ${selectedPayment === 'apple-pay' ? 'selected' : ''}`}
            onClick={() => setSelectedPayment('apple-pay')}
          >
            <div className={`radio-button ${selectedPayment === 'apple-pay' ? 'selected' : ''}`}></div>
            <div className="payment-icon apple-pay">
              <img src={imgApplePay} alt="Apple Pay" />
            </div>
            <span className="payment-label">Apple Pay</span>
          </button>

          <button 
            className={`checkout-payment-option ${selectedPayment === 'amex' ? 'selected' : ''}`}
            onClick={() => setSelectedPayment('amex')}
          >
            <div className={`radio-button ${selectedPayment === 'amex' ? 'selected' : ''}`}></div>
            <div className="payment-icon amex">
              <img src={imgAmex} alt="AMEX" />
            </div>
            <span className="payment-label">AMEX •••• 0001</span>
          </button>

          <button 
            className={`checkout-payment-option ${selectedPayment === 'klarna' ? 'selected' : ''}`}
            onClick={() => setSelectedPayment('klarna')}
          >
            <div className={`radio-button ${selectedPayment === 'klarna' ? 'selected' : ''}`}></div>
            <div className="payment-icon klarna">
              <img src={imgKlarna} alt="Klarna" />
            </div>
            <span className="payment-label">Klarna</span>
          </button>
        </div>

        {/* Legal Footer */}
        {!pendingMode && !declinedMode && (
          <div className="checkout-legal">
            <p className="checkout-legal-text">
              By continuing, you authorize Depop to debit your Depop Balance for purchases and refunds you make in line with <a href="#">our terms</a>.
            </p>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="checkout-bottom">
        {selectedPayment === 'balance' ? (
          <button className="btn-primary" onClick={handlePay}>Pay with balance</button>
        ) : selectedPayment === 'apple-pay' ? (
          <button className="btn-primary" onClick={handlePay}>
            Pay
          </button>
        ) : (
          <button className="btn-primary" onClick={handlePay}>Pay now</button>
        )}
        <p className="checkout-stripe-text">This payment will be processed by Stripe</p>
        <div className="checkout-payment-icons">
          <div className="payment-icon-small depop"><img src={imgDepopBalance} alt="Depop" /></div>
          <div className="payment-icon-small"><img src={imgApplePay} alt="Apple Pay" /></div>
          <div className="payment-icon-small klarna"><img src={imgKlarna} alt="Klarna" /></div>
          <div className="payment-icon-small"><img src={imgPaymentCard} alt="Card" /></div>
          <div className="payment-icon-small amex"><img src={imgAmex} alt="AMEX" /></div>
        </div>
        <div className="home-indicator-container">
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  )
}

function SSNVerificationModal({ isOpen, onClose, onVerified, pendingMode = false }) {
  const [inputValue, setInputValue] = useState('')
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setInputValue('')
      setIsInputFocused(false)
      setIsVerified(false)
    }
  }, [isOpen])

  const handleContinue = () => {
    if (onVerified) {
      onVerified()
    }
    onClose()
  }

  if (!isOpen) return null

  const hasValue = inputValue.length === 4

  const handleKeyPress = (key) => {
    if (key === 'delete') {
      setInputValue(prev => prev.slice(0, -1))
    } else if (inputValue.length < 4 && /^[0-9]$/.test(key)) {
      setInputValue(prev => prev + key)
    }
  }

  const handleVerify = () => {
    if (hasValue) {
      setIsVerified(true)
    }
  }

  if (isVerified) {
    if (pendingMode) {
      return (
        <>
          <div className="sheet-overlay" onClick={onClose} />
          <div className="ssn-sheet verified-sheet">
            <div className="sheet-grabber" />
            <button className="sheet-close" onClick={onClose}>
              <CloseIcon />
            </button>
            
            <div className="verified-content">
              <img src="/icons/pending.png" alt="Pending" className="verified-icon bounce-in" />
              <h2 className="verified-title">Verification pending</h2>
              <p className="verified-subtitle">It's taking a little longer than usual to verify your identity.</p>
              <p className="verified-description">We'll let you know when verification is completed.</p>
            </div>
            
            <div className="sheet-bottom">
              <button className="btn-primary" onClick={handleContinue}>
                Got it
              </button>
              <div className="home-indicator-container">
                <div className="home-indicator" />
              </div>
            </div>
          </div>
        </>
      )
    }
    
    return (
      <>
        <div className="sheet-overlay" onClick={onClose} />
        <div className="ssn-sheet verified-sheet">
          <div className="sheet-grabber" />
          <button className="sheet-close" onClick={onClose}>
            <CloseIcon />
          </button>
          
          <div className="verified-content">
            <img src="/icons/confirm.png" alt="Verified" className="verified-icon bounce-in" />
            <h2 className="verified-title">You're verified!</h2>
            <p className="verified-subtitle">We've successfully verified your identity.</p>
            <p className="verified-description">You're all set to start using your balance.</p>
          </div>
          
          <div className="sheet-bottom">
            <button className="btn-primary" onClick={handleContinue}>
              Done
            </button>
            <div className="home-indicator-container">
              <div className="home-indicator" />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {/* Dark Overlay */}
      <div className="sheet-overlay" onClick={onClose} />
      
      {/* Modal Sheet */}
      <div className="ssn-sheet">
        {/* Grabber */}
        <div className="sheet-grabber" />
        
        {/* Close Button */}
        <button className="sheet-close" onClick={onClose}>
          <CloseIcon />
        </button>

        {/* Content */}
        <div className="sheet-content">
          <h2 className="sheet-title">Let's make sure it's you</h2>
          <p className="sheet-subtitle">Please enter the last 4 digits of your Social Security Number.</p>

          {/* Input Field */}
          <button 
            className={`sheet-input-field ${isInputFocused ? 'focused' : ''}`}
            onClick={() => setIsInputFocused(true)}
          >
            <LockIcon />
            <div className="sheet-input-content">
              {isInputFocused ? (
                <>
                  <span className="sheet-floating-label">Last 4 digits of your SSN</span>
                  <span className="sheet-input-value">
                    XXX-XX-{inputValue}<span className="cursor">|</span>
                  </span>
                </>
              ) : (
                <span className="sheet-input-placeholder">Last 4 digits of your SSN</span>
              )}
            </div>
          </button>

          <button className="sheet-help-link">Why do I need to provide my SSN?</button>
        </div>

        {/* Bottom Section with CTA - always visible */}
        <div className={`sheet-bottom ${isInputFocused ? 'above-keyboard' : ''}`}>
          <p className="sheet-legal-text">
            By continuing you agree to our payment partner's{' '}
            <span className="sheet-link">Connect</span>,{' '}
            <span className="sheet-link">Treasury</span> and{' '}
            <span className="sheet-link">Service Agreements</span>
          </p>
          <button 
            className={`btn-primary ${!hasValue ? 'btn-disabled' : ''}`}
            disabled={!hasValue}
            onClick={handleVerify}
          >
            Verify
          </button>
          {!isInputFocused && (
            <div className="home-indicator-container">
              <div className="home-indicator" />
            </div>
          )}
        </div>

        {/* Keyboard when focused */}
        {isInputFocused && (
          <div className="sheet-keyboard">
            <div className="keyboard-toolbar">
              <button className="keyboard-cancel" onClick={() => setIsInputFocused(false)}>Cancel</button>
              <button className="keyboard-done" onClick={() => setIsInputFocused(false)}>Done</button>
            </div>
            <div className="numpad-grid">
              <button className="numpad-key" onClick={() => handleKeyPress('1')}>
                <span className="numpad-number">1</span>
              </button>
              <button className="numpad-key" onClick={() => handleKeyPress('2')}>
                <span className="numpad-number">2</span>
                <span className="numpad-letters">ABC</span>
              </button>
              <button className="numpad-key" onClick={() => handleKeyPress('3')}>
                <span className="numpad-number">3</span>
                <span className="numpad-letters">DEF</span>
              </button>
              <button className="numpad-key" onClick={() => handleKeyPress('4')}>
                <span className="numpad-number">4</span>
                <span className="numpad-letters">GHI</span>
              </button>
              <button className="numpad-key" onClick={() => handleKeyPress('5')}>
                <span className="numpad-number">5</span>
                <span className="numpad-letters">JKL</span>
              </button>
              <button className="numpad-key" onClick={() => handleKeyPress('6')}>
                <span className="numpad-number">6</span>
                <span className="numpad-letters">MNO</span>
              </button>
              <button className="numpad-key" onClick={() => handleKeyPress('7')}>
                <span className="numpad-number">7</span>
                <span className="numpad-letters">PQRS</span>
              </button>
              <button className="numpad-key" onClick={() => handleKeyPress('8')}>
                <span className="numpad-number">8</span>
                <span className="numpad-letters">TUV</span>
              </button>
              <button className="numpad-key" onClick={() => handleKeyPress('9')}>
                <span className="numpad-number">9</span>
                <span className="numpad-letters">WXYZ</span>
              </button>
              <div className="numpad-key empty"></div>
              <button className="numpad-key" onClick={() => handleKeyPress('0')}>
                <span className="numpad-number">0</span>
              </button>
              <button className="numpad-key delete" onClick={() => handleKeyPress('delete')}>
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                  <path d="M22 0H7.5C6.9 0 6.3 0.3 5.9 0.7L0 9L5.9 17.3C6.3 17.7 6.9 18 7.5 18H22C23.1 18 24 17.1 24 16V2C24 0.9 23.1 0 22 0ZM19 12.6L17.6 14L14 10.4L10.4 14L9 12.6L12.6 9L9 5.4L10.4 4L14 7.6L17.6 4L19 5.4L15.4 9L19 12.6Z" fill="#262626"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

function OrderConfirmationModal({ isOpen, onComplete }) {
  if (!isOpen) return null

  return (
    <>
      <div className="order-confirmation-overlay">
        <button className="order-close-button" onClick={onComplete}>
          <CloseIcon />
        </button>
        <img src={imgBagProduct} alt="" className="order-confirmation-bg" />
      </div>
      <div className="order-confirmation-sheet">
        <div className="sheet-grabber" />
        
        <div className="order-confirmation-content">
          <h1 className="order-title">Thank you!</h1>
          <p className="order-subtitle">We've sent your order confirmation to user@depop.com.</p>
          
          <div className="order-buttons">
            <button className="btn-secondary">Message seller</button>
            <button className="btn-primary">View receipt</button>
          </div>

          <div className="order-delivery">
            <div className="order-delivery-info">
              <p className="order-delivery-label">Estimated delivery <span className="info-icon">ⓘ</span></p>
              <p className="order-delivery-date">7–11 September</p>
            </div>
            <div className="order-qr-icon">
              <img src="/icons/delivery.png" alt="QR" />
            </div>
          </div>

          <div className="order-section">
            <div className="order-section-header">
              <span className="order-section-title">See order info</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#262626" strokeWidth="2">
                <path d="M1 6.5L6 1.5L11 6.5" />
              </svg>
            </div>
            
            <div className="order-details">
              <div className="order-detail-row">
                <span className="order-detail-label">Ships to</span>
              </div>
              <p className="order-detail-value">168 Mott Street, New York, NY 10013, USA</p>
              
              <div className="order-detail-row">
                <span className="order-detail-label">Total</span>
                <span className="order-detail-amount">$13.50</span>
              </div>
            </div>
          </div>

          <div className="order-suggested">
            <h2 className="order-suggested-title">Suggested for you</h2>
            <div className="order-suggested-grid">
              <div className="suggested-item">
                <div className="suggested-image" style={{background: '#e8e8e8'}}></div>
                <span className="suggested-price">£29.99</span>
              </div>
              <div className="suggested-item">
                <div className="suggested-image" style={{background: '#d8e8f8'}}></div>
                <span className="suggested-price">£16.99</span>
              </div>
              <div className="suggested-item">
                <div className="suggested-image" style={{background: '#f0e8f8'}}></div>
                <span className="suggested-price">£45</span>
              </div>
              <div className="suggested-item">
                <div className="suggested-image" style={{background: '#f8f0e8'}}></div>
                <span className="suggested-price">£25</span>
              </div>
            </div>
          </div>
        </div>

        <div className="home-indicator-container">
          <div className="home-indicator" />
        </div>
      </div>
    </>
  )
}

function NoSignupCheckoutScreen({ onBack, onPay, onComplete }) {
  const [showSSNSheet, setShowSSNSheet] = useState(false)
  const [isBalanceEnabled, setIsBalanceEnabled] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState('apple-pay')
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false)

  const handleVerified = () => {
    setIsBalanceEnabled(true)
    setSelectedPayment('balance')
  }

  const handlePayWithBalance = () => {
    if (selectedPayment === 'balance') {
      setShowOrderConfirmation(true)
    } else {
      onPay()
    }
  }

  return (
    <div className="checkout-screen">
      {/* Order Confirmation Modal */}
      <OrderConfirmationModal 
        isOpen={showOrderConfirmation} 
        onComplete={onComplete}
      />
      {/* SSN Verification Modal Sheet */}
      <SSNVerificationModal 
        isOpen={showSSNSheet} 
        onClose={() => setShowSSNSheet(false)}
        onVerified={handleVerified}
      />
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="checkout-header">
        <button className="back-button" onClick={onBack}>
          <BackIcon />
        </button>
        <h1 className="checkout-header-title">Checkout</h1>
        <span className="checkout-edit">Edit</span>
      </div>

      {/* Content */}
      <div className="checkout-content">
        {/* Product */}
        <div className="checkout-product">
          <img src={imgBagProduct} alt="New Balance Hat" className="checkout-product-image" />
          <div className="checkout-product-info">
            <p className="checkout-product-name">New Balance Hat</p>
            <p className="checkout-product-details">Unisex | $15.00</p>
          </div>
        </div>

        {/* Total Row */}
        <div className="checkout-row">
          <div className="checkout-row-left">
            <p className="checkout-row-title">Total: $25.00</p>
            <p className="checkout-row-subtitle">Includes free shipping and $5.00 marketplace fee</p>
          </div>
          <ChevronRightIcon />
        </div>

        {/* Ships To Row */}
        <div className="checkout-row">
          <div className="checkout-row-left">
            <p className="checkout-row-title">Ships to</p>
            <p className="checkout-row-subtitle">168 Mott Street, New York, NY 10013</p>
          </div>
          <ChevronRightIcon />
        </div>

        {/* Module Divider */}
        <div className="checkout-divider-thick"></div>

        {/* Pay With Section */}
        <div className="checkout-section">
          <h2 className="checkout-section-title">Pay with</h2>
          
          {!isBalanceEnabled ? (
            <>
              {/* Unlock Balance Banner */}
              <button className="unlock-balance-banner" onClick={() => setShowSSNSheet(true)}>
                <img src={imgBalanceCard} alt="" className="unlock-balance-card" />
                <div className="unlock-balance-text">
                  <p className="unlock-balance-title">Unlock paying with balance</p>
                  <p className="unlock-balance-subtitle">Verify to pay using your balance</p>
                </div>
                <ChevronRightIcon />
              </button>

              {/* Disabled Depop Balance Option */}
              <div className="checkout-payment-option disabled">
                <div className="radio-button disabled"></div>
                <div className="payment-icon depop">
                  <img src={imgDepopBalance} alt="Depop" />
                </div>
                <span className="payment-label disabled">Depop Balance</span>
                <span className="payment-amount disabled">$30.00</span>
              </div>
            </>
          ) : (
            /* Enabled Depop Balance Option */
            <button 
              className={`checkout-payment-option ${selectedPayment === 'balance' ? 'selected' : ''}`}
              onClick={() => setSelectedPayment('balance')}
            >
              <div className={`radio-button ${selectedPayment === 'balance' ? 'selected' : ''}`}></div>
              <div className="payment-icon depop">
                <img src={imgDepopBalance} alt="Depop" />
              </div>
              <span className="payment-label">Depop Balance</span>
              <span className="payment-amount">$30.00</span>
            </button>
          )}
        </div>

        {/* Other Payment Types */}
        <div className="checkout-section">
          <h2 className="checkout-section-title">Other payment type</h2>
          
          <button 
            className={`checkout-payment-option ${selectedPayment === 'apple-pay' ? 'selected' : ''}`}
            onClick={() => setSelectedPayment('apple-pay')}
          >
            <div className={`radio-button ${selectedPayment === 'apple-pay' ? 'selected' : ''}`}></div>
            <div className="payment-icon apple-pay">
              <img src={imgApplePay} alt="Apple Pay" />
            </div>
            <span className="payment-label">Apple Pay</span>
          </button>

          <button 
            className={`checkout-payment-option ${selectedPayment === 'amex' ? 'selected' : ''}`}
            onClick={() => setSelectedPayment('amex')}
          >
            <div className={`radio-button ${selectedPayment === 'amex' ? 'selected' : ''}`}></div>
            <div className="payment-icon amex">
              <img src={imgAmex} alt="AMEX" />
            </div>
            <span className="payment-label">AMEX •••• 0001</span>
          </button>

          <button 
            className={`checkout-payment-option ${selectedPayment === 'klarna' ? 'selected' : ''}`}
            onClick={() => setSelectedPayment('klarna')}
          >
            <div className={`radio-button ${selectedPayment === 'klarna' ? 'selected' : ''}`}></div>
            <div className="payment-icon klarna">
              <img src={imgKlarna} alt="Klarna" />
            </div>
            <span className="payment-label">Klarna</span>
          </button>

          <button 
            className={`checkout-payment-option ${selectedPayment === 'new-card' ? 'selected' : ''}`}
            onClick={() => setSelectedPayment('new-card')}
          >
            <div className={`radio-button ${selectedPayment === 'new-card' ? 'selected' : ''}`}></div>
            <div className="payment-icon">
              <img src={imgPaymentCard} alt="Card" />
            </div>
            <span className="payment-label">Add new card</span>
          </button>

          {isBalanceEnabled && (
            <p className="checkout-legal">
              By continuing, you authorize Depop to debit your Depop Balance for purchases and refunds you make in line with <span className="checkout-legal-link">our terms</span>.
            </p>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="checkout-bottom">
        {selectedPayment === 'balance' ? (
          <button className="btn-primary" onClick={handlePayWithBalance}>
            Pay with balance
          </button>
        ) : selectedPayment === 'apple-pay' ? (
          <button className="btn-primary" onClick={handlePayWithBalance}>
            Pay
          </button>
        ) : (
          <button className="btn-primary" onClick={handlePayWithBalance}>
            Pay now
          </button>
        )}
        <p className="checkout-stripe-text">This payment will be processed by Stripe</p>
        <div className="checkout-payment-icons">
          <div className="payment-icon-small depop"><img src={imgDepopBalance} alt="Depop" /></div>
          <div className="payment-icon-small"><img src={imgApplePay} alt="Apple Pay" /></div>
          <div className="payment-icon-small klarna"><img src={imgKlarna} alt="Klarna" /></div>
          <div className="payment-icon-small"><img src={imgPaymentCard} alt="Visa" /></div>
          <div className="payment-icon-small"><img src={imgPaymentCard} alt="Mastercard" /></div>
          <div className="payment-icon-small"><img src={imgPaymentCard} alt="Maestro" /></div>
          <div className="payment-icon-small amex"><img src={imgAmex} alt="AMEX" /></div>
        </div>
        <div className="home-indicator-container">
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  )
}

function SSNVerificationScreen({ onBack, onComplete }) {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputClick = () => {
    setIsInputFocused(true)
  }

  const handleKeyPress = (key) => {
    if (key === 'delete') {
      setInputValue(prev => prev.slice(0, -1))
    } else if (inputValue.length < 4 && /^[0-9]$/.test(key)) {
      setInputValue(prev => prev + key)
    }
  }

  const handleContinue = () => {
    if (inputValue.length === 4) {
      setIsInputFocused(false)
      setIsLoading(true)
      setTimeout(() => {
        onComplete()
      }, 2000)
    }
  }

  const displayValue = inputValue ? `XXX-XX-${inputValue}` : ''
  const hasValue = inputValue.length === 4

  return (
    <div className={`ssn-screen ${isInputFocused ? 'keyboard-open' : ''}`}>
      {/* Loading Overlay */}
      {isLoading && <LoadingOverlay />}
      
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="ssn-nav-bar">
        <button className="back-button" onClick={onBack}>
          <BackIcon />
        </button>
      </div>

      {/* Header */}
      <div className="ssn-header">
        <h1 className="ssn-title">Let's make sure it's you</h1>
        <p className="ssn-subtitle">Please enter the last 4 digits of your Social Security Number.</p>
      </div>

      {/* Input Section */}
      <div className="ssn-input-section">
        <button 
          className={`ssn-input-field ${isInputFocused ? 'focused' : ''}`}
          onClick={handleInputClick}
        >
          <LockIcon />
          <div className="ssn-input-content">
            {isInputFocused && <span className="ssn-floating-label">Last 4 digits of your SSN</span>}
            {isInputFocused ? (
              <span className="ssn-input-value">
                XXX-XX-{inputValue}<span className="cursor">|</span>
              </span>
            ) : (
              <span className="ssn-input-placeholder">Last 4 digits of your SSN</span>
            )}
          </div>
        </button>
        <button className="ssn-help-link">Why do I need to provide my SSN?</button>
      </div>

      {/* Bottom Section - stacks on keyboard when open */}
      <div className={`ssn-bottom ${isInputFocused ? 'above-keyboard' : ''}`}>
        <p className="ssn-legal-text">
          By continuing you agree to our payment partner's{' '}
          <span className="ssn-link">Connect</span>,{' '}
          <span className="ssn-link">Treasury</span> and{' '}
          <span className="ssn-link">Service Agreements</span>
        </p>
        <button 
          className={`btn-primary ${!hasValue ? 'btn-disabled' : ''}`} 
          disabled={!hasValue}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>

      {/* iOS Numeric Keyboard */}
      {isInputFocused && (
        <div className="ios-numpad">
          {/* Keyboard toolbar */}
          <div className="numpad-toolbar">
            <button className="toolbar-btn" onClick={() => setIsInputFocused(false)}>Cancel</button>
            <button className="toolbar-btn toolbar-done" onClick={() => setIsInputFocused(false)}>Done</button>
          </div>
          
          {/* Number pad */}
          <div className="numpad-grid">
            <button className="numpad-key" onClick={() => handleKeyPress('1')}>
              <span className="numpad-number">1</span>
            </button>
            <button className="numpad-key" onClick={() => handleKeyPress('2')}>
              <span className="numpad-number">2</span>
              <span className="numpad-letters">ABC</span>
            </button>
            <button className="numpad-key" onClick={() => handleKeyPress('3')}>
              <span className="numpad-number">3</span>
              <span className="numpad-letters">DEF</span>
            </button>
            <button className="numpad-key" onClick={() => handleKeyPress('4')}>
              <span className="numpad-number">4</span>
              <span className="numpad-letters">GHI</span>
            </button>
            <button className="numpad-key" onClick={() => handleKeyPress('5')}>
              <span className="numpad-number">5</span>
              <span className="numpad-letters">JKL</span>
            </button>
            <button className="numpad-key" onClick={() => handleKeyPress('6')}>
              <span className="numpad-number">6</span>
              <span className="numpad-letters">MNO</span>
            </button>
            <button className="numpad-key" onClick={() => handleKeyPress('7')}>
              <span className="numpad-number">7</span>
              <span className="numpad-letters">PQRS</span>
            </button>
            <button className="numpad-key" onClick={() => handleKeyPress('8')}>
              <span className="numpad-number">8</span>
              <span className="numpad-letters">TUV</span>
            </button>
            <button className="numpad-key" onClick={() => handleKeyPress('9')}>
              <span className="numpad-number">9</span>
              <span className="numpad-letters">WXYZ</span>
            </button>
            <button className="numpad-key numpad-empty"></button>
            <button className="numpad-key" onClick={() => handleKeyPress('0')}>
              <span className="numpad-number">0</span>
            </button>
            <button className="numpad-key numpad-delete" onClick={() => handleKeyPress('delete')}>
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" stroke="#262626" strokeWidth="2">
                <path d="M8 1h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8l-6-8 6-8z"/>
                <line x1="12" y1="6" x2="16" y2="12"/>
                <line x1="16" y1="6" x2="12" y2="12"/>
              </svg>
            </button>
          </div>

          {/* Home indicator */}
          <div className="numpad-home-indicator">
            <div className="home-indicator" />
          </div>
        </div>
      )}

      {/* Home Indicator - only show when keyboard is closed */}
      {!isInputFocused && (
        <div className="home-indicator-container">
          <div className="home-indicator" />
        </div>
      )}
    </div>
  )
}

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function BurgerMenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function FilterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#262626" strokeWidth="1.5">
      <line x1="4" y1="6" x2="16" y2="6" />
      <line x1="6" y1="10" x2="14" y2="10" />
      <line x1="8" y1="14" x2="12" y2="14" />
    </svg>
  )
}

function BottomTabBar({ activeTab = 'home', onHomeClick, onMyDepopClick }) {
  return (
    <div className="tab-bar">
      <button 
        className={`tab-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={onHomeClick}
      >
        <img src="/icons/Home.svg" alt="Home" />
        <span>Home</span>
      </button>
      <div className={`tab-item ${activeTab === 'discover' ? 'active' : ''}`}>
        <img src="/icons/Discover.svg" alt="Discover" />
        <span>Discover</span>
      </div>
      <div className={`tab-item ${activeTab === 'sell' ? 'active' : ''}`}>
        <img src="/icons/Sell.svg" alt="Sell" />
        <span>Sell</span>
      </div>
      <div className={`tab-item ${activeTab === 'inbox' ? 'active' : ''}`}>
        <img src="/icons/Inbox.svg" alt="Inbox" />
        <span>Inbox</span>
      </div>
      <button 
        className={`tab-item ${activeTab === 'my-depop' ? 'active' : ''}`}
        onClick={onMyDepopClick}
      >
        <img src="/icons/MyDepop.svg" alt="My Depop" />
        <span>My Depop</span>
      </button>
    </div>
  )
}

function MyDepopScreen({ onBurgerClick, onHomeClick, onMyDepopClick }) {
  const [activeTab, setActiveTab] = useState('shop')
  
  const itemsForSale = [
    { id: 1, image: imgAspectRatio },
    { id: 2, image: imgAspectRatio1 },
    { id: 3, image: imgAspectRatio3 },
    { id: 4, image: imgAspectRatio4 },
  ]
  
  const soldItems = [
    { id: 1, image: imgAspectRatio1 },
    { id: 2, image: imgAspectRatio3 },
    { id: 3, image: imgAspectRatio },
  ]

  return (
    <div className="mydepop-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mydepop-header">
        <h1 className="mydepop-username">zymto</h1>
        <div className="mydepop-header-icons">
          <button className="mydepop-icon-btn">
            <PlusIcon />
          </button>
          <button className="mydepop-icon-btn" onClick={onBurgerClick}>
            <BurgerMenuIcon />
          </button>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="mydepop-tabs">
        <button 
          className={`mydepop-tab ${activeTab === 'shop' ? 'active' : ''}`}
          onClick={() => setActiveTab('shop')}
        >
          Shop
        </button>
        <button 
          className={`mydepop-tab ${activeTab === 'sold' ? 'active' : ''}`}
          onClick={() => setActiveTab('sold')}
        >
          Sold
        </button>
        <button 
          className={`mydepop-tab ${activeTab === 'purchases' ? 'active' : ''}`}
          onClick={() => setActiveTab('purchases')}
        >
          Purchases
        </button>
        <button 
          className={`mydepop-tab ${activeTab === 'likes' ? 'active' : ''}`}
          onClick={() => setActiveTab('likes')}
        >
          Likes
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="mydepop-content">
        {/* Profile Stats */}
        <div className="mydepop-profile">
          <div className="mydepop-avatar">
            <span className="avatar-emoji">🍒</span>
          </div>
          <div className="mydepop-stat">
            <span className="stat-number">0</span>
            <span className="stat-label">followers</span>
          </div>
          <div className="mydepop-stat">
            <span className="stat-number">0</span>
            <span className="stat-label">following</span>
          </div>
          <div className="mydepop-stat">
            <span className="stat-number">0 ★</span>
            <span className="stat-label">0 reviews</span>
          </div>
        </div>

        {/* Bio */}
        <p className="mydepop-bio">Selling pieces from my wardrobe</p>

        {/* Revenue Card */}
        <div className="mydepop-revenue-card">
          <div className="revenue-left">
            <span className="revenue-amount">£0</span>
            <span className="revenue-label">earned</span>
            <span className="revenue-period">Last 30 days</span>
          </div>
          <div className="revenue-right">
            <span className="revenue-amount">£10</span>
            <span className="revenue-label">potential revenue</span>
            <span className="revenue-period">From 1 active listings</span>
          </div>
          <ChevronRightIcon />
        </div>

        {/* Items for Sale */}
        <div className="mydepop-section">
          <div className="mydepop-section-header">
            <h2 className="mydepop-section-title">Items for sale (4)</h2>
            <button className="mydepop-filter-btn">
              <FilterIcon />
            </button>
          </div>
          <div className="mydepop-items-grid">
            {itemsForSale.map(item => (
              <div key={item.id} className="mydepop-item">
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Sold Items */}
        <div className="mydepop-section">
          <h2 className="mydepop-section-title">Sold items (3)</h2>
          <div className="mydepop-items-grid">
            {soldItems.map(item => (
              <div key={item.id} className="mydepop-item">
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="my-depop" onHomeClick={onHomeClick} onMyDepopClick={onMyDepopClick} />

      {/* Home Indicator */}
      <div className="home-indicator-container">
        <div className="home-indicator" />
      </div>
    </div>
  )
}

function MyAccountScreen({ onBack, onHomeClick, onMyDepopClick, onBalanceClick }) {
  const menuItems = [
    { section: 'Sell more', items: [
      { icon: '/icons/Boost.png', label: 'Boost Shop', badge: null },
      { icon: '/icons/search.png', label: 'Sold item search', badge: null },
      { icon: '/icons/Bundle.png', label: 'Bundles', badge: 'New' },
    ]},
    { section: 'Support', items: [
      { icon: '/icons/Red flag.png', label: 'Sold item issues', badge: '1', badgeRed: true },
      { icon: '/icons/Help.png', label: 'Need help?', badge: '1', badgeRed: true },
    ]},
    { section: 'Settings', items: [
      { icon: '/icons/My Depop.png', label: 'Account details', badge: null },
      { icon: '/icons/Delivery_icon.png', label: 'Shipping settings', badge: null },
      { icon: '/icons/Payment.svg', label: 'Payment settings', badge: null },
      { icon: '/icons/2FA_icon.png', label: 'Two-factor authentication', badge: null },
    ]},
  ]

  return (
    <div className="myaccount-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">09:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
          </svg>
          <div className="battery-icon">
            <div className="battery-fill"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="myaccount-header">
        <button className="back-button" onClick={onBack}>
          <BackIcon />
        </button>
        <h1 className="myaccount-title">My account</h1>
      </div>

      {/* Content */}
      <div className="myaccount-content">
        {/* Depop Balance Card */}
        <button className="myaccount-balance-card" onClick={onBalanceClick}>
          <img src={imgDepopBalance} alt="" className="balance-card-icon" />
          <span className="myaccount-balance-label">Depop Balance</span>
          <ChevronRightIcon />
        </button>

        {/* Menu Sections */}
        {menuItems.map(section => (
          <div key={section.section} className="myaccount-section">
            <h2 className="myaccount-section-title">{section.section}</h2>
            {section.items.map(item => (
              <button key={item.label} className="myaccount-menu-item">
                <img src={item.icon} alt="" className="menu-item-icon" />
                <span className="menu-item-label">{item.label}</span>
                {item.badge && (
                  <span className={`menu-item-badge ${item.badgeRed ? 'red' : ''}`}>
                    {item.badge}
                  </span>
                )}
                <ChevronRightIcon />
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="my-depop" onHomeClick={onHomeClick} onMyDepopClick={onMyDepopClick} />

      {/* Home Indicator */}
      <div className="home-indicator-container">
        <div className="home-indicator" />
      </div>
    </div>
  )
}

function DecisionScreen({ onSelectPath }) {
  return (
    <div className="decision-screen">
      <h1 className="decision-title">Existing Seller Onboarding</h1>
      <p className="decision-subtitle">Select a path to preview</p>
      
      {/* Happy Path Section */}
      <div className="decision-section">
        <h2 className="decision-section-title">Happy Path</h2>
        <div className="decision-cards">
          <button className="decision-card" onClick={() => onSelectPath('happy')}>
            <img src="/icons/confirm.png" alt="" className="decision-card-icon" />
            <span className="decision-card-label">Success</span>
          </button>
          <button className="decision-card" onClick={() => onSelectPath('pending')}>
            <img src="/icons/pending.png" alt="" className="decision-card-icon" />
            <span className="decision-card-label">Pending</span>
          </button>
          <button className="decision-card" onClick={() => onSelectPath('failed')}>
            <img src="/icons/blocked.png" alt="" className="decision-card-icon" />
            <span className="decision-card-label">Failed</span>
          </button>
        </div>
      </div>

      {/* Alternative Path Section */}
      <div className="decision-section">
        <h2 className="decision-section-title">Alternative Path</h2>
        <div className="decision-cards">
          <button className="decision-card" onClick={() => onSelectPath('no-signup')}>
            <img src="/icons/checkout.png" alt="" className="decision-card-icon" />
            <span className="decision-card-label">Checkout</span>
          </button>
          <button className="decision-card" onClick={() => onSelectPath('payments-home')}>
            <img src="/icons/payment.png" alt="" className="decision-card-icon" />
            <span className="decision-card-label">Payments home</span>
          </button>
        </div>
      </div>

      {/* Reminder Flow Section */}
      <div className="decision-section">
        <h2 className="decision-section-title">Reminder Flow</h2>
        <div className="decision-cards">
          <button className="decision-card" onClick={() => onSelectPath('reminder')}>
            <img src="/icons/schedule.png" alt="" className="decision-card-icon" />
            <span className="decision-card-label">Reminder prompt</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function ExistingSellerOnboarding() {
  const [currentScreen, setCurrentScreen] = useState('decision')
  const [showModal, setShowModal] = useState(false)
  const [selectedPath, setSelectedPath] = useState(null)
  const [showToast, setShowToast] = useState(false)
  const [showPendingSSNSheet, setShowPendingSSNSheet] = useState(false)
  const [showSuccessSSNSheet, setShowSuccessSSNSheet] = useState(false)
  const [showCheckoutSSNSheet, setShowCheckoutSSNSheet] = useState(false)
  const [showBalanceSSNSheet, setShowBalanceSSNSheet] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [isPendingVerification, setIsPendingVerification] = useState(false)
  const [showDelayedSuccessModal, setShowDelayedSuccessModal] = useState(false)
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false)
  const [hasDeclinedOnboarding, setHasDeclinedOnboarding] = useState(false)
  const [previousScreen, setPreviousScreen] = useState(null)

  useEffect(() => {
    if (currentScreen === 'home' && !showToast && !hasCompletedOnboarding && !isVerified && !isPendingVerification) {
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [currentScreen, showToast, hasCompletedOnboarding, isVerified, isPendingVerification])

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  // Async verification simulation - after 15 seconds in pending state, show success
  useEffect(() => {
    if (isPendingVerification) {
      const timer = setTimeout(() => {
        setIsPendingVerification(false)
        setShowDelayedSuccessModal(true)
      }, 15000)
      return () => clearTimeout(timer)
    }
  }, [isPendingVerification])

  const handleMyDepopClick = () => {
    setPreviousScreen(currentScreen)
    setCurrentScreen('my-depop')
  }

  const handleHomeClick = () => {
    setCurrentScreen('home')
  }

  const handleBurgerClick = () => {
    setCurrentScreen('my-account')
  }

  const handleMyAccountBack = () => {
    setCurrentScreen('my-depop')
  }

  const handleSelectPath = (path) => {
    setSelectedPath(path)
    if (path === 'payments-home' || path === 'no-signup') {
      // Reset verification states for alternative paths to show default experience
      setIsVerified(false)
      setIsPendingVerification(false)
      setHasCompletedOnboarding(false)
      if (path === 'payments-home') {
        setCurrentScreen('balance')
      } else {
        setCurrentScreen('checkout')
      }
    } else {
      setCurrentScreen('home')
    }
  }

  const handleUnlock = () => {
    setShowModal(false)
    setShowSuccessSSNSheet(true)
  }

  const handlePendingContinue = () => {
    setShowModal(false)
    setShowPendingSSNSheet(true)
  }

  const handlePendingSSNVerified = () => {
    setShowPendingSSNSheet(false)
    if (currentScreen !== 'balance') {
      setCurrentScreen('home')
    }
    setShowModal(false)
    // Mark onboarding as complete and start the async verification timer
    setHasCompletedOnboarding(true)
    setIsPendingVerification(true)
  }

  const handleDelayedSuccessComplete = () => {
    setShowDelayedSuccessModal(false)
    setIsVerified(true)
    setSelectedPath(null) // Clear pending path since verification is now complete
  }

  const handleSuccessSSNVerified = () => {
    setShowSuccessSSNSheet(false)
    setIsVerified(true)
    setHasCompletedOnboarding(true)
    // Stay on home screen - verification confirmation shown in modal
  }

  const handleDiscover = () => {
    setCurrentScreen('home')
  }

  const handleBackToHome = () => {
    setCurrentScreen('home')
    setShowModal(false)
  }

  const handleSSNComplete = () => {
    // Branch based on selected path
    if (selectedPath === 'pending') {
      setCurrentScreen('pending')
    } else if (selectedPath === 'failed') {
      setCurrentScreen('failed')
    } else if (selectedPath === 'no-signup') {
      setCurrentScreen('no-signup-result')
    } else {
      setCurrentScreen('success')
    }
  }

  const resetFlowState = () => {
    setShowModal(false)
    setSelectedPath(null)
    setHasCompletedOnboarding(false)
    setHasDeclinedOnboarding(false)
    setIsVerified(false)
    setIsPendingVerification(false)
  }

  const handleSuccessDiscoverNow = () => {
    setCurrentScreen('decision')
    resetFlowState()
  }

  const handlePendingGotIt = () => {
    setCurrentScreen('decision')
    resetFlowState()
  }

  const handleFailedTryAgain = () => {
    setCurrentScreen('decision')
    resetFlowState()
  }

  const handleNoSignupContinue = () => {
    setCurrentScreen('decision')
    resetFlowState()
  }

  const handleNotNow = () => {
    setShowModal(false)
    setCurrentScreen('decline-reasons')
  }

  const handleDeclineBack = () => {
    setCurrentScreen('home')
    setShowModal(true)
  }

  const handleDeclineConfirm = () => {
    setCurrentScreen('home')
    setShowModal(false)
    setShowToast(true)
    setHasDeclinedOnboarding(true)
    setHasCompletedOnboarding(true)
  }

  const handleDeclineChangedMind = () => {
    setCurrentScreen('home')
    setShowModal(true)
  }

  const handleBalanceBack = () => {
    setCurrentScreen('my-account')
  }

  const handleBagClick = () => {
    setCurrentScreen('bag')
    setShowModal(false)
  }

  const handleBagClose = () => {
    setCurrentScreen('home')
  }

  const handleBagCheckout = () => {
    setCurrentScreen('checkout')
  }

  const handleCheckoutBack = () => {
    setCurrentScreen('bag')
  }

  const handleCheckoutPay = () => {
    setCurrentScreen('home')
    setShowModal(false)
  }

  const handleOrderComplete = () => {
    setCurrentScreen('decision')
    resetFlowState()
  }

  const handleUnlockBalance = () => {
    setShowBalanceSSNSheet(true)
  }

  const handleBalanceSSNVerified = () => {
    setShowBalanceSSNSheet(false)
    setHasDeclinedOnboarding(false)
    setIsVerified(true)
  }

  const handleCheckoutUnlockBalance = () => {
    setShowCheckoutSSNSheet(true)
  }

  const handleCheckoutSSNVerified = () => {
    setShowCheckoutSSNSheet(false)
    setHasDeclinedOnboarding(false)
    setIsVerified(true)
  }

  return (
    <div className="mobile-frame">
      <div className="mobile-screen">
        {currentScreen === 'decision' ? (
          <DecisionScreen onSelectPath={handleSelectPath} />
        ) : currentScreen === 'my-depop' ? (
          <MyDepopScreen 
            onBurgerClick={handleBurgerClick} 
            onHomeClick={handleHomeClick}
            onMyDepopClick={handleMyDepopClick}
          />
        ) : currentScreen === 'my-account' ? (
          <MyAccountScreen 
            onBack={handleMyAccountBack} 
            onHomeClick={handleHomeClick}
            onMyDepopClick={handleMyDepopClick}
            onBalanceClick={() => setCurrentScreen('balance')}
          />
        ) : currentScreen === 'checkout' ? (
          <>
            <CheckoutScreen 
              onBack={handleCheckoutBack} 
              onPay={handleCheckoutPay}
              onComplete={handleCheckoutPay}
              pendingMode={selectedPath === 'pending' && !hasDeclinedOnboarding && !isVerified}
              declinedMode={(selectedPath !== 'pending' || hasDeclinedOnboarding) && !isVerified}
              onUnlockBalance={handleCheckoutUnlockBalance}
            />
            <SSNVerificationModal 
              isOpen={showCheckoutSSNSheet} 
              onClose={() => setShowCheckoutSSNSheet(false)}
              onVerified={handleCheckoutSSNVerified}
            />
          </>
        ) : currentScreen === 'bag' ? (
          <BagScreen onClose={handleBagClose} onCheckout={handleBagCheckout} />
        ) : currentScreen === 'balance' ? (
          <>
            <DepopBalanceScreen 
              onBack={handleBalanceBack} 
              onHomeClick={handleHomeClick}
              onMyDepopClick={handleMyDepopClick}
              pendingMode={selectedPath === 'pending' && !hasDeclinedOnboarding && !isVerified}
              successMode={isVerified}
              declinedMode={(selectedPath !== 'pending' || hasDeclinedOnboarding) && !isVerified}
              onVerify={() => setShowPendingSSNSheet(true)}
              onDiscover={handleDiscover}
              onUnlockBalance={handleUnlockBalance}
            />
            {selectedPath === 'pending' && (
              <SSNVerificationModal 
                isOpen={showPendingSSNSheet} 
                onClose={() => setShowPendingSSNSheet(false)}
                onVerified={handlePendingSSNVerified}
                pendingMode={true}
              />
            )}
            <SSNVerificationModal 
              isOpen={showBalanceSSNSheet} 
              onClose={() => setShowBalanceSSNSheet(false)}
              onVerified={handleBalanceSSNVerified}
            />
          </>
        ) : currentScreen === 'success' ? (
          <SuccessScreen onDiscoverNow={handleSuccessDiscoverNow} />
        ) : currentScreen === 'pending' ? (
          <PendingScreen onGotIt={handlePendingGotIt} />
        ) : currentScreen === 'failed' ? (
          <FailedScreen onTryAgain={handleFailedTryAgain} />
        ) : currentScreen === 'no-signup-result' ? (
          <NoSignupResultScreen onContinue={handleNoSignupContinue} />
        ) : currentScreen === 'decline-reasons' ? (
          <DeclineReasonsScreen 
            onBack={handleDeclineBack} 
            onConfirm={handleDeclineConfirm} 
            onChangedMind={handleDeclineChangedMind} 
          />
        ) : currentScreen === 'ssn' ? (
          <SSNVerificationScreen onBack={handleBackToHome} onComplete={handleSSNComplete} />
        ) : (
          <>
            {selectedPath === 'pending' ? (
              <>
                <BalanceOnboardingModal 
                  isOpen={showModal} 
                  onClose={() => setShowModal(false)} 
                  onContinue={handlePendingContinue}
                  onNotNow={handleNotNow}
                />
                <SSNVerificationModal 
                  isOpen={showPendingSSNSheet} 
                  onClose={() => setShowPendingSSNSheet(false)}
                  onVerified={handlePendingSSNVerified}
                  pendingMode={true}
                />
              </>
            ) : (
              <>
                <SuccessOnboardingModal 
                  isOpen={showModal} 
                  onClose={() => setShowModal(false)} 
                  onContinue={handleUnlock}
                  onNotNow={handleNotNow}
                />
                <SSNVerificationModal 
                  isOpen={showSuccessSSNSheet} 
                  onClose={() => setShowSuccessSSNSheet(false)}
                  onVerified={handleSuccessSSNVerified}
                />
              </>
            )}
        {/* Status Bar */}
        <div className="status-bar">
          <span className="status-time">09:41</span>
          <div className="status-icons">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
              <path d="M1 3.5C1 2.67 1.67 2 2.5 2h1C4.33 2 5 2.67 5 3.5v5C5 9.33 4.33 10 3.5 10h-1C1.67 10 1 9.33 1 8.5v-5zM6 2.5C6 1.67 6.67 1 7.5 1h1C9.33 1 10 1.67 10 2.5v6c0 .83-.67 1.5-1.5 1.5h-1C6.67 10 6 9.33 6 8.5v-6zM11 1.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-7z"/>
            </svg>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
              <path d="M7.5 2.5c2.7 0 5.1 1.1 6.9 2.8l-1.4 1.4c-1.4-1.4-3.4-2.2-5.5-2.2s-4.1.8-5.5 2.2L.6 5.3C2.4 3.6 4.8 2.5 7.5 2.5zm2.8 5.6l-2.8 2.8-2.8-2.8c.7-.7 1.7-1.1 2.8-1.1s2.1.4 2.8 1.1z"/>
            </svg>
            <div className="battery-icon">
              <div className="battery-fill"></div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar-container">
          <div className="search-bar">
            <SearchIcon />
            <span className="search-placeholder">Search for anything</span>
          </div>
          <button className="header-icon-btn">
            <HeartIcon />
          </button>
          <button className="header-icon-btn bag-btn" onClick={handleBagClick}>
            <BagIcon />
            <span className="bag-badge">1</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Suggested for you</h2>
          <button className="see-all-btn">See all</button>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Toast Message */}
        {showToast && (
          <div className="toast-message">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#43484D"/>
              <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Feedback submitted</span>
          </div>
        )}

        {/* Delayed Success Modal - appears 10 seconds after pending verification */}
        {showDelayedSuccessModal && (
          <>
            <div className="sheet-overlay" onClick={handleDelayedSuccessComplete} />
            <div className="ssn-sheet verified-sheet">
              <div className="sheet-grabber" />
              <button className="sheet-close" onClick={handleDelayedSuccessComplete}>
                <CloseIcon />
              </button>
              
              <div className="verified-content">
                <img src="/icons/confirm.png" alt="Verified" className="verified-icon bounce-in" />
                <h2 className="verified-title">You're verified!</h2>
                <p className="verified-subtitle">We've successfully verified your identity.</p>
                <p className="verified-description">You're all set to start using your balance.</p>
              </div>
              
              <div className="sheet-bottom">
                <button className="btn-primary" onClick={handleDelayedSuccessComplete}>
                  Done
                </button>
                <div className="home-indicator-container">
                  <div className="home-indicator" />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Bottom Tab Bar */}
        <BottomTabBar activeTab="home" onHomeClick={handleHomeClick} onMyDepopClick={handleMyDepopClick} />

        {/* Home Indicator */}
        <div className="home-indicator-container">
          <div className="home-indicator"></div>
        </div>
          </>
        )}
      </div>

      {/* Home button outside mobile frame - only show when not on decision screen */}
      {currentScreen !== 'decision' && (
        <button 
          className="overview-home-btn"
          onClick={() => {
            setCurrentScreen('decision')
            resetFlowState()
          }}
          title="Back to overview"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5L12 3L21 9.5V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  )
}

export default ExistingSellerOnboarding
