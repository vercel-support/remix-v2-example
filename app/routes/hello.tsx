export const config = {
  maxDuration: 60,
};

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
