// pages/api/auth.js
export default function handler(req, res) {
    const isAuthenticated = req.cookies.isAuthenticated === 'true';
  
    if (!isAuthenticated) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    res.status(200).json({ message: 'Authenticated' });
  }