let cart = [];

export default function handler(req, res) { // default export로 Node.js 리퀘스트 객체(req)와 리스폰스 객체(res)를 파라미터로 받는 함수
    if (req.method === 'GET') {
        return res.status(200).json(cart);
    } else if (req.method === 'PUT') {
        cart = req.body;
        return res.status(200).json(cart);
    } else {
        return res.sendStatus(404);
    }
}
