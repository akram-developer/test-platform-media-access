export const PLANS = [
  {
    id: '1-month',
    name: '1 Month Access',
    description: 'Perfect for short-term usage.',
    price: 9.99,
    duration: '30 Days',
    features: ['Instant Activation', 'Premium Support', 'HD Player Compatible', 'Stable Server Connection'],
    popular: false,
  },
  {
    id: '6-months',
    name: '6 Months Access',
    description: 'Great value for regular users.',
    price: 39.99,
    duration: '180 Days',
    features: ['Instant Activation', 'Premium Support', 'HD Player Compatible', 'Stable Server Connection', '1 Month Free'],
    popular: true,
  },
  {
    id: '12-months',
    name: '12 Months Access',
    description: 'Best choice for long-term stability.',
    price: 69.99,
    duration: '365 Days',
    features: ['Instant Activation', 'VIP Support', 'HD Player Compatible', 'Stable Server Connection', '2 Months Free'],
    popular: false,
  },
];

export const FAKE_USER = {
  id: 'user_123',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://i.pravatar.cc/150?u=user_123',
  role: 'USER',
  status: 'ACTIVE',
};

export const MY_SERVICES = [
  {
    id: 'srv_001',
    planName: '12 Months Access',
    status: 'ACTIVE',
    expiresAt: '2026-12-31',
    username: 'user77892',
    password: '●●●●●●●●',
    host: 'http://mag.media-access.one:8080',
  },
  {
    id: 'srv_002',
    planName: '1 Month Access',
    status: 'EXPIRED',
    expiresAt: '2025-11-20',
    username: 'user11234',
    password: '●●●●●●●●',
    host: 'http://mag.media-access.one:8080',
  },
];
