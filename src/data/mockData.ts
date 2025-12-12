export const mockProducts = [
  {
    id: '1',
    title: 'Premium Arabica Coffee Beans',
    category: 'Coffee',
    price: 4500,
    currency: 'ETB',
    quantity: 500,
    unit: 'kg',
    location: 'Sidama, Ethiopia',
    certification: ['Organic', 'Fair Trade'],
    rating: 4.8,
    reviewCount: 24,
    seller: {
      id: 's1',
      name: 'Sidama Coffee Cooperative',
      verified: true,
      rating: 4.9
    },
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    description: 'High-quality Arabica coffee beans from Sidama region',
    qualityGrade: 'Grade 1'
  },
  {
    id: '2',
    title: 'Ethiopian Teff Grain',
    category: 'Grains',
    price: 3200,
    currency: 'ETB',
    quantity: 1000,
    unit: 'kg',
    location: 'Shewa, Ethiopia',
    certification: ['Organic'],
    rating: 4.5,
    reviewCount: 18,
    seller: {
      id: 's2',
      name: 'Shewa Grain Farmers Union',
      verified: true,
      rating: 4.7
    },
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    description: 'Traditional Ethiopian teff, gluten-free superfood grain',
    qualityGrade: 'Grade 2'
  },
  {
    id: '3',
    title: 'Red Kidney Beans',
    category: 'Legumes',
    price: 2800,
    currency: 'ETB',
    quantity: 750,
    unit: 'kg',
    location: 'Oromia, Ethiopia',
    certification: ['Fair Trade'],
    rating: 4.6,
    reviewCount: 31,
    seller: {
      id: 's3',
      name: 'Oromia Legume Producers',
      verified: true,
      rating: 4.8
    },
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400',
    description: 'Premium red kidney beans, perfect for export',
    qualityGrade: 'Grade 1'
  },
  {
    id: '4',
    title: 'Sesame Seeds - White',
    category: 'Seeds',
    price: 5200,
    currency: 'ETB',
    quantity: 600,
    unit: 'kg',
    location: 'Tigray, Ethiopia',
    certification: ['Organic', 'ISO Certified'],
    rating: 4.9,
    reviewCount: 42,
    seller: {
      id: 's4',
      name: 'Tigray Sesame Cooperative',
      verified: true,
      rating: 5.0
    },
    imageUrl: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400',
    description: 'Premium white sesame seeds, high oil content',
    qualityGrade: 'Grade 1'
  },
  {
    id: '5',
    title: 'Haricot Beans',
    category: 'Legumes',
    price: 2600,
    currency: 'ETB',
    quantity: 900,
    unit: 'kg',
    location: 'Amhara, Ethiopia',
    certification: ['Fair Trade'],
    rating: 4.4,
    reviewCount: 15,
    seller: {
      id: 's5',
      name: 'Amhara Agricultural Union',
      verified: false,
      rating: 4.5
    },
    imageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400',
    description: 'Quality haricot beans, ready for export',
    qualityGrade: 'Grade 2'
  },
  {
    id: '6',
    title: 'Robusta Coffee Beans',
    category: 'Coffee',
    price: 3800,
    currency: 'ETB',
    quantity: 400,
    unit: 'kg',
    location: 'Kaffa, Ethiopia',
    certification: ['Organic'],
    rating: 4.7,
    reviewCount: 29,
    seller: {
      id: 's6',
      name: 'Kaffa Coffee Growers',
      verified: true,
      rating: 4.8
    },
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
    description: 'Strong and bold Robusta coffee from the birthplace of coffee',
    qualityGrade: 'Grade 1'
  }
];

export const marketPriceData = [
  {
    product: 'Coffee Arabica',
    localAverage: 4200,
    globalPrice: 6800,
    trend: 'up' as const,
    change: '+12%',
    lastUpdated: '2 hours ago'
  },
  {
    product: 'Teff',
    localAverage: 3100,
    globalPrice: 5200,
    trend: 'up' as const,
    change: '+5%',
    lastUpdated: '4 hours ago'
  },
  {
    product: 'Sesame Seeds',
    localAverage: 5000,
    globalPrice: 7500,
    trend: 'down' as const,
    change: '-3%',
    lastUpdated: '1 hour ago'
  },
  {
    product: 'Kidney Beans',
    localAverage: 2750,
    globalPrice: 4200,
    trend: 'neutral' as const,
    change: '0%',
    lastUpdated: '6 hours ago'
  }
];

export const weatherAlerts = [
  {
    id: 'w1',
    type: 'warning' as const,
    title: 'Heavy Rain Expected',
    message: 'Heavy rainfall predicted in Sidama region for next 48 hours. Secure your harvest.',
    region: 'Sidama'
  },
  {
    id: 'w2',
    type: 'info' as const,
    title: 'Optimal Planting Season',
    message: 'Perfect conditions for teff planting in Shewa region.',
    region: 'Shewa'
  }
];
