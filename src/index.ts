import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk register user
app.post('/register', (req: Request, res: Response) => {
  const { username, password } = req.body;
  res.send('User registered');
});

// Endpoint untuk login user
app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  res.send('User logged in');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/products', (req: Request, res: Response) => {
  const { name, price } = req.body;
  res.send('Product added');
});

// Endpoint untuk mendapatkan semua produk
app.get('/products', (req: Request, res: Response) => {
  res.send('List of products');
});

// Endpoint untuk membuat order
app.post('/orders', (req: Request, res: Response) => {
  const { productId, quantity } = req.body;
  res.send('Order created');
});

// Endpoint untuk mendapatkan semua order
app.get('/orders', (req: Request, res: Response) => {
  res.send('List of orders');
});
